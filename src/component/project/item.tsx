// "use client";
// import { Select, SelectOption } from "@/components/select";
// import React, { useState, useEffect } from "react";

// const Item = ( props: {
//   label: string;
//   options: SelectOption[];
//   onOptionChange: (options: SelectOption[]) => void;
// }) => {
//   const [selectedOption, setSelectedOption] = useState<SelectOption[]>([]);

//   useEffect(() => {
//     props.onOptionChange(selectedOption);
//   }, [selectedOption, props.onOptionChange]);

//   return (
//     <div className=" items-center w-full">
//       <label className="mr-2">{props.label}</label>
//       <Select
//         multiple={true}
//         options={props.options}
//         value={selectedOption}
//         onChange={setSelectedOption}
//       />
//     </div>
//   );
// };

// export default Item;

"use client";
import { Select, SelectOption } from "@/components/select";
import React, { useState, useEffect } from "react";

interface EvSelectProps {
  label: string;
  options: SelectOption[];
  onOptionChange: (options: SelectOption[]) => void;
}

const Item = ({ label, options, onOptionChange }: EvSelectProps) => {
  const [selectedOption, setSelectedOption] = useState<SelectOption[]>([]);

  useEffect(() => {
    onOptionChange(selectedOption);
  }, [selectedOption, onOptionChange]);

  return (
    <div className=" items-center w-full">
      <label className="mr-2">{label}</label>
      <Select
        multiple={true}
        options={options}
        value={selectedOption}
        onChange={setSelectedOption}
      />
    </div>
  );
};

export default Item;