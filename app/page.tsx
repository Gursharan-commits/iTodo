import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import Tasks from "@/components/ui/iTodo/tasks";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>iTODO</h1>
      <Button>Hi</Button>
      <Tasks />
    </main>
  );
}
