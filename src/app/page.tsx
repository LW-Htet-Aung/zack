'use client'
import { Button } from "@/components/ui/button";
import { SignedIn, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import { createUser } from "./actions/userAction";
import { DarkModeToggle } from "@/components/ui/dark-mode-toggle";

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
        <UserButton />
      </SignedIn>
      <DarkModeToggle />
    </>
  );
}
