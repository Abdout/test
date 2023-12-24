"use client";
import { useGlobalState } from "@/provider/global";
import React, {useState} from "react";

interface Props {
  content: React.ReactNode;
}

function Modal({ content }: Props) {
  const { closeModal } = useGlobalState();
  // const [modal, setModal] = useState(false);
  // const closeModal = () => {
  //   setModal(false);
  // };

  
  return (
    <div className="fixed inset-0 w-full h-screen z-50 flex justify-center items-center">
    <div className="absolute inset-0 w-full h-screen bg-black bg-opacity-20" onClick={closeModal}></div>
    <div className="relative m-4 p-8 max-w-xl w-[25rem] z-50 rounded bg-[#fcfcfc]  sm:text-sm">
      {content}
    </div>
  </div>
  );
}

export default Modal;
