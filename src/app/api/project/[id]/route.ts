import connectDB from "@/model/connect/db";
import Project from "@/model/project/project";
import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

export async function PUT(request: NextRequest, { params }: { params: { id: string } }) {
  const { id } = params;
  const { newTitle: title, newDescription: description } = await request.json() as { newTitle: string, newDescription: string };
  await connectDB();
  await Project.findByIdAndUpdate(id, { title, description });
  return NextResponse.json({ message: "Project updated" }, { status: 200 });
}

export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
  const { id } = params;
  await connectDB();
  const project = await Project.findOne({ _id: id });
  return NextResponse.json({ project }, { status: 200 });
}