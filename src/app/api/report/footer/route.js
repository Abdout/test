// MongoDB operations
import connectDB from "@/model/db";
import Footer from "@/model/footer";
import { NextResponse } from "next/server";

export async function POST(request) {
  const {
      contractor,
      client,
      customer,
      consultant,
      contractorName,
      clientName,
      customerName,
      consultantName,
      contractorDesignation,
      clientDesignation,
      customerDesignation,
      consultantDesignation,
      contractorSignature,
      clientSignature,
      customerSignature,
      consultantSignature,
      contractorDate,
      clientDate,
      customerDate,
      consultantDate,
  } = await request.json();
  await connectDB();

  // Create a new record or update the existing one
  const footer = await Footer.findOneAndUpdate(
    {},
    {
      contractor,
      client,
      customer,
      consultant,
      contractorName,
      clientName,
      customerName,
      consultantName,
      contractorDesignation,
      clientDesignation,
      customerDesignation,
      consultantDesignation,
      contractorSignature,
      clientSignature,
      customerSignature,
      consultantSignature,
      contractorDate,
      clientDate,
      customerDate,
      consultantDate,
    },
    { upsert: true, new: true }
  );

  return NextResponse.json(
    { message: "Report Created/Updated", footer },
    { status: 201 }
  );
}

export async function GET() {
  await connectDB();
  const footers = await Footer.find();
  return NextResponse.json({ footers });
}
