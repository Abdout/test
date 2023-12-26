import connectDB from "@/model/connect/db";
import Project from "@/model/project/project";
import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  const { title, description } = await request.json() as { title: string, description: string };
  await connectDB();
  await Project.create({ title, description });
  return NextResponse.json({ message: "Project Created" }, { status: 201 });
}

export async function GET() {
  await connectDB();
  const projects = await Project.find() as unknown[];
  return NextResponse.json({ projects });
}

export async function DELETE(request: NextRequest) {
  const id = request.nextUrl.searchParams.get("id");
  await connectDB();
  await Project.findByIdAndDelete(id);
  return NextResponse.json({ message: "Project deleted" }, { status: 200 });
}