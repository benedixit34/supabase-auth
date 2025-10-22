import LogoutButton from "@/components/handleLogout";
import { getUser } from "./verifyUser";

export default async function Home() {
  const user = await getUser(); // ✅ Wait for the async result

  return (
    <>
      <p>Hello</p>
      {user ? (
        <LogoutButton />
      ) : (
        <a href="/auth/login">Login</a>
      )}
    </>
  );
}
