"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { LogIn, UserPlus } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";

export default function SignUp() {
  const [errorMessage, setErrorMessage] = useState(""); // State to hold the error message

  return (
    <div className="flex justify-center items-center h-screen">
      <Card className="space-y-4 w-120 h-100">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl">Sign Up to Blog CMS</CardTitle>
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
              <UserPlus className="mr-2" />
              <p>Sign Up</p>
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
