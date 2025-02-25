"use server";

import { connectToDb } from "@/lib/mongoDb";
import User from "@/lib/models/userModel";
import { hash } from "bcryptjs";
import { signIn } from "@/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import ratelimit from "../rateLimit";

export const signInWithCredentials = async (params) => {
  const { email, password } = params;

  const ip = (await headers()).get("x-forwarded-for") || "127.0.0.1";
  const { success } = await ratelimit.limit(ip);

  if (!success) return redirect("/too-fast");

  try {
    const result = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    if (result.error) {
      return { success: false, error: result.error };
    }

    return { success: true };
  } catch (error) {
    switch (error.type) {
      case "CredentialsSignin":
      case "CallbackRouteError":
        return { error: "Invalid credentials!" };
      default:
        return { error: "Something went wrong!" };
    }
  }
};

export const signUp = async (params) => {
  const { fullName, email, universityId, password, universityCard } = params;

  const ip = (await headers()).get("x-forwarded-for") || "127.0.0.1";
  const { success } = await ratelimit.limit(ip);

  if (!success) return redirect("/too-fast");

  try {
    await connectToDb();

    const existingUser = await User.find({ email });

    if (existingUser.length > 0) {
      return { success: false, error: "User already exist!!" };
    }

    const hashedPassword = await hash(password, 10);

    const user = await User.create({
      email,
      fullName,
      universityId,
      password: hashedPassword,
      universityCard,
    });

    await signInWithCredentials({ email, password });

    return { success: true };
  } catch (error) {
    throw new Error(`Failed to create user : ${error.message}`);
  }
};
