import BookLists from "@/components/BookLists";
import BookOverview from "@/components/BookOverview";
import { sampleBooks } from "@/constants";
import User from "@/lib/models/userModel";

export default async function Home() {
  return (
    <>
      <BookOverview {...sampleBooks[0]} />

      <BookLists
        title="Latest Book"
        books={sampleBooks}
        containerClassName="mt-28"
      />
    </>
  );
}
