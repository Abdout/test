"use client";
import { useGlobalState } from "@/provider/global";
import React from "react";
import Delete from "./delete";
import SmIcon from "@/component/atom/icon/sm";
import Modal from "@/component/atom/modal/modal";
import Edit from "./edit";
import Create from "./create";
import Link from "next/link";

interface Project {
  _id: string;
  title: string;
  description: string;
}

interface ModalState {
  open: boolean;
  id: string | null;
}

const ProjectList: React.FC = () => {
  const { modal, openModal, project } = useGlobalState();

  const handleEdit = (id: string) => {
    openModal(id);
  };

  const projectToEdit = project.find((p: Project) => p._id === modal.id);

  return (
    <>
      {modal.open &&
        (modal.id !== null && projectToEdit ? (
          <Modal
            content={
              <Edit
                id={modal.id}
                title={projectToEdit.title}
                description={projectToEdit.description}
              />
            }
          />
        ) : (
          <Modal content={<Create />} />
        ))}
      {project.map((t: Project) => (
        <div key={t._id} className="p-4 border m-2 flex flex-col items-start">
          <Link href={`/project/${t._id}`}>
            <div>
              <h2 className="font-bold text-2xl">{t.title}</h2>
              <div>{t.description}</div>
            </div>
          </Link>

          <div className="flex gap-2">
            <Delete id={t._id} />
            <button onClick={() => handleEdit(t._id)}>
              <SmIcon src="/edit.png" alt="Edit" path="" />
            </button>
          </div>
          {openModal === t._id && (
            <Modal
              content={
                <Edit id={t._id} title={t.title} description={t.description} />
              }
            />
          )}
        </div>
      ))}

      <button className="border py-10" onClick={() => openModal("")}>
        Create Project
      </button>
    </>
  );
};

export default ProjectList;
