import { FC, FormEvent, useState } from "react";
import { useGlobalState } from "@/provider/global";
import Volt from "@/component/project/volt";
import LvSelect from "./selectlv";
import MvSelect from "./selectmv";
import HvSelect from "./selecthv";
import EvSelect from "./selectev";
import { SelectOption } from "@/components/select";

const totalSteps = 4;

const Create: FC = () => {
  const { closeModal, fetchProject } = useGlobalState();
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [voltages, setVoltages] = useState<{ [key: string]: boolean }>({
    LV: false,
    MV: true,
    HV: false,
    EV: false,
  });
  const [lvOptions, setLvOptions] = useState<SelectOption[]>([]);
  const [mvOptions, setMvOptions] = useState<SelectOption[]>([]);
  const [hvOptions, setHvOptions] = useState<SelectOption[]>([]);
  const [evOptions, setEvOptions] = useState<SelectOption[]>([]);
  const [currentStep, setCurrentStep] = useState(1);
  const progress = (currentStep / totalSteps) * 100;

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };
  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    console.log(voltages); // Add this line

    try {
      console.log({ title, description, voltages });
      const res = await fetch("http://localhost:3000/api/project", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          title,
          description,
          voltages,
          lvOptions,
          mvOptions,
          hvOptions,
          evOptions,
        }),
      });

      console.log("Fetch response:", res);

      if (res.ok) {
        closeModal();
        await fetchProject();
      } else {
        throw new Error("Failed to create a topic");
      }
    } catch (error: any) {
      console.log("Error:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="h-[6px] relative bg-yellow-100">
        <div
          className="absolute h-full bg-yellow-400"
          style={{ width: `${progress}%` }}
        />
      </div>

      <div className="flex justify-between">
        <button type="button" onClick={prevStep}>
          Back
        </button>
        <button type="button" onClick={nextStep}>
          Next
        </button>
      </div>

      {currentStep === 1 && (
        <div>
          <input
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            className="border border-slate-500 px-8 py-2"
            type="text"
            placeholder="Topic Title"
          />

          <input
            onChange={(e) => setDescription(e.target.value)}
            value={description}
            className="border border-slate-500 px-8 py-2"
            type="text"
            placeholder="Topic Description"
          />
        </div>
      )}

      {currentStep === 2 && (
        <div className="space-y-4">
          <h1 className="flex justify-center items-center text-2xl">Item</h1>
          <Volt onVoltChange={setVoltages} />
          {voltages.LV && <LvSelect onOptionChange={setLvOptions} />}
          {voltages.MV && <MvSelect onOptionChange={setMvOptions} />}
          {voltages.HV && <HvSelect onOptionChange={setHvOptions} />}
          {voltages.EV && <EvSelect onOptionChange={setEvOptions} />}
        </div>
      )}

      {currentStep === 3 && <div>Third Step</div>}
      {currentStep === 4 && <div>Fourth Step</div>}

      <button
        type="submit"
        className="px-6 py-3 bg-yellow-400 w-full font-bold rounded mt-4"
      >
        Add Topic
      </button>
    </form>
  );
};

export default Create;
