"use client";

import { createClient } from "@/utils/supabase/server";
import { useRouter } from "next/navigation";
import { Button, message } from "antd";

export default function LogoutButton() {
  const router = useRouter();

  const handleLogout = async () => {
    const supabase = await createClient();
    await supabase.auth.signOut();
    message.success("Logged out successfully");
    router.refresh();
  };

  return (
    <Button onClick={handleLogout} type="primary">
      Logout
    </Button>
  );
}
