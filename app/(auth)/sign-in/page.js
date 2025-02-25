"use client";

import React from "react";
import { signInSchema } from "@/lib/validations";
import AuthForm from "@/components/AuthForm";
import { signInWithCredentials } from "@/lib/actions/auth";

const Page = () => {
  return (
    <AuthForm
      type={"SIGN_IN"}
      schema={signInSchema}
      onSubmit={signInWithCredentials}
      defaultValues={{
        email: "",
        password: "",
      }}
    />
  );
};

export default Page;
