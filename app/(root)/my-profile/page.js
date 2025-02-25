import { signOut } from "@/auth";
import BookLists from "@/components/BookLists";
import { Button } from "@/components/ui/button";
import { sampleBooks } from "@/constants";
import React from "react";

const Page = () => {
  return (
    <>
      <form
        action={async () => {
          "use server";

          await signOut();
        }}
        className="mb-10"
      >
        <Button>Log out</Button>
      </form>
      <BookLists title="Borrowed Books" books={sampleBooks} />
    </>
  );
};

export default Page;
