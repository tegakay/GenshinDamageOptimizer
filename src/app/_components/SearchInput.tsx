"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const SearchInput = () => {
  const [uid, setUid] = useState(""); // State to store input value
  const router = useRouter(); // Router instance

  const handleSearch = () => {
    if (uid.trim() !== "") {
      router.push(`/u/${encodeURIComponent(uid)}`); // Redirect to page with query param
    }
  };
  return (
    <div className="flex flex-row gap-3">
      <Input
        type="text"
        placeholder="Enter Genshin UID"
        onChange={(e) => setUid(e.target.value)}
        value={uid}
      />
      <Button variant="outline" onClick={handleSearch}>
        Enter
      </Button>
    </div>
  );
};
