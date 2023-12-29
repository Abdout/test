"use client";
import { Select, SelectOption } from "@/components/select";
import React, { useState, useEffect } from "react";

const MvSelect =({ onOptionChange }: { onOptionChange: (options: SelectOption[]) => void }) => {
  const [selectedOption, setSelectedOption] = useState<SelectOption[]>([]);

  useEffect(() => {
    onOptionChange(selectedOption);
  }, [selectedOption, onOptionChange]);

  const options: SelectOption[] = [
    { label: "Swgr", value: "1" },
    { label: "Trafo", value: "2" },
    { label: "Cable", value: "3" },
    { label: "RMU", value: "4" },
    // Add more options as needed
  ];

  return (
    <div className=" items-center w-full">
      <label className="py-2">MV</label>
      <Select
        multiple={true}
        options={options}
        value={selectedOption}
        onChange={setSelectedOption}
      />
    </div>
  );
};

export default MvSelect;
