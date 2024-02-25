import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { LoginButton } from "@/components/auth/login-button";

const poppins = Poppins({ subsets: ["latin"], weight: ["600"] });

export default function Home() {
  return (
    <div className=" space-y-6 text-center">
      <h1
        className={cn(
          "text-6xl font-semibold drop-shadow-md",
          poppins.className,
        )}
      >
        🔐 Auth
      </h1>
      <p className="text-lg">A simple authentication service</p>
      <div>
        <LoginButton>
          <Button variant="secondary" size="lg">
            Sign in
          </Button>
        </LoginButton>
      </div>
    </div>
  );
}
