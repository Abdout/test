"use client";
import Index from "@/component/project/itp";
import React from "react";

interface Params {
  id: string;
}

const ITP = ({ params }: { params: Params }) => {
  return (
    <div>
      <Index params={params} />
    </div>
  );
};

export default ITP;
