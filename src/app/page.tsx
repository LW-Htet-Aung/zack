'use client'
import { Button } from "@/components/ui/button";
import { SignedIn, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import { createUser } from "./actions/userAction";

export default function Home() {
  const handleClick = async () => {
    await createUser()

  }
  return (
    <>
      <Button onClick={handleClick}>
        Fetch
      </Button>
      <SignedIn>
        {/* Mount the UserButton component */}
        <UserButton />
      </SignedIn>
      {/* <Button>
        Click Me
      </Button> */}

    </>
  );
}
