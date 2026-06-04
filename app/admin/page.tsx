"use client";

import { useEffect } from "react";
import { supabase } from "@/lib/supabase";

export default function AdminPage() {
  useEffect(() => {
    async function test() {
      const { data, error } = await supabase
        .from("products")
        .select("*");

      console.log("DATA:", data);
      console.log("ERROR:", error);
    }

    test();
  }, []);

  return (
    <div className="p-10">
      Open browser console (F12)
    </div>
  );
}