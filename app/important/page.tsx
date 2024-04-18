"use client";
import React from "react";
import { useGlobalState } from "../context/globalProvider";
import Tasks from "../Components/Tasks/Tasks";

function Page() {
  const { importantTasks } = useGlobalState();
  return <Tasks title="Important Tasks" tasks={importantTasks} />;
}

export default Page;
