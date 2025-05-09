"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { LogIn } from "lucide-react";
import { useSearchParams, useRouter } from "next/navigation";
import React, { useState } from "react";
import Link from "next/link";
import Swal from "sweetalert2";

export default function Login() {
  const [errorMessage, setErrorMessage] = useState(""); // State to hold the error message
  const router = useRouter();
  const searchParams = useSearchParams();

  const redirectParam = searchParams.get("redirect");
  const redirectPath: string = redirectParam ?? "/dashboard";

  return (
    <div className="flex justify-center items-center h-screen">
      <Card className="space-y-4 w-120 h-100">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl">Login to Blog CMS</CardTitle>
        </CardHeader>

        <CardContent>
          <div className="space-y-4">
            <Input
              type="email"
              placeholder="user@example.com"
              className="w-full"
            />
            <Input type="password" placeholder="Password" className="w-full" />
            <Button>
              <LogIn className="mr-2" />
              <p>Login</p>
            </Button>
            {/* Conditionally render error message */}
            {errorMessage && <h1 className="text-red-600">{errorMessage}</h1>}
          </div>
        </CardContent>

        <CardFooter>
          <Link
            href="https://supabase.com/docs/guides/auth"
            className="text-blue-600 hover:underline"
          >
            Learn more
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
}
