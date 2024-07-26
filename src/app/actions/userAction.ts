"use server";
import { createClient } from "@/ultis/supabase/server";

export const createUser = async () => {
  const supabase = createClient();
  let { data: users, error } = await supabase.from("users").select("*");

  console.log("ERROR", users, error);
};
