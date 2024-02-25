"use client";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Header } from "@/components/auth/header";
import { Social } from "@/components/auth/social";
import { BackButton } from "@/components/auth/back-button";

interface CardWrapperProps {
  children: React.ReactNode;
  headerLabel: string;
  backButtonLabel: string;
  BackButtonHref: string;
  showSocial: boolean;
}

export const CardWrapper = ({
  children,
  headerLabel,
  backButtonLabel,
  BackButtonHref,
  showSocial,
}: CardWrapperProps) => {
  return (
    <Card className="w-full min-w-[300px] max-w-[450px] shadow-md">
      <CardHeader>
        <Header label={headerLabel} />
      </CardHeader>
      <CardContent>{children}</CardContent>
      {showSocial && (
        <CardFooter>
          <Social />
        </CardFooter>
      )}
      <CardFooter>
        <BackButton label={backButtonLabel} href={BackButtonHref} />
      </CardFooter>
    </Card>
  );
};
