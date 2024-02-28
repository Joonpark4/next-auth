import { LoginButton } from "@/components/auth/login-button";
import { Button } from "@/components/ui/button";

LoginButton;
export const Header = () => {
  return (
    <header className="centered h-[10vh] w-full bg-slate-700 gap-10">
      <LoginButton>
        <Button variant="secondary" size="lg">
          Sign in
        </Button>
      </LoginButton>
      <LoginButton>
        <Button variant="secondary" size="lg">
          Sandbox
        </Button>
      </LoginButton>
    </header>
  );
};
