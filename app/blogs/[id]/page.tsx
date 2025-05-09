"use client";

import { useParams } from "next/navigation";
import React from "react";

export default function BlogPage() {
  const params = useParams();
  const id = params.id; // or params["id"]

  return (
    <div>
      <h1>Blog ID: {id}</h1>
    </div>
  );
}
