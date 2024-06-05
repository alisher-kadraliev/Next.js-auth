import { LoginButton } from "@/components/auth/login-button";
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <main className="flex h-full flex-col items-center justify-center bg-sky-500">
      <div className="space-y-6">
        <h1 className="text-6xl font-bold text-white">Auth</h1>
        <LoginButton>
          <Button variant="secondary">Sign In</Button>
        </LoginButton>
      </div>
    </main>
  );
}
