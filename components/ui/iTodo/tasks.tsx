"use client";

import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";

export default function Tasks() {
  const tasks = useQuery(api.tasks.get);
  return (
    <div>
      <p>Tasks</p>
      {tasks?.map(({ text, idx }) =>
        <p key={idx}>{text}</p>
      )}
    </div>
  );
}
