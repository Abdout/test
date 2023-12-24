import { FC } from "react";
import SmIcon from "@/component/atom/icon/sm";
import { useGlobalState } from "@/provider/global";

interface DeleteProps {
  id: string;
}

const Delete: FC<DeleteProps> = ({ id }) => {
  const { refreshProject } = useGlobalState();

  const deleteProject = async () => {
    const confirmed = window.confirm("Are you sure?");

    if (confirmed) {
      const res = await fetch(`http://localhost:3000/api/project?id=${id}`, {
        method: "DELETE",
      });

      if (res.ok) {
        refreshProject();
      }
    }
  };

  return (
    <button onClick={deleteProject} className="text-red-400">
      <SmIcon src="/delete.png" alt="Edit" path="" />
    </button>
  );
};

export default Delete;