"use server";

import { connectToDb } from "@/lib/mongoDb";
import User from "@/lib/models/userModel";

export async function createUser(data) {
  try {
    await connectToDb();

    const { fullName, email, universityId, password } = data;

    const user = await User.create({
      email,
      fullName,
      universityId,
      password,
    });

    console.log(user, "here is the user ");
  } catch (error) {
    throw new Error(`Failed to create user : ${error.message}`);
  }
}
