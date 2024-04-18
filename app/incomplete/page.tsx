"use client";
import React from "react";
import { useGlobalState } from "../context/globalProvider";
import Tasks from "../Components/Tasks/Tasks";

function Page() {
  const { incompleteTasks } = useGlobalState();
  return <Tasks title="Incomplete Tasks" tasks={incompleteTasks} />;
}

export default Page;
