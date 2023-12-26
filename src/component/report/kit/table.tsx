'use client'; 
import { useEffect, useState } from "react";

const getKit = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/report/kit", {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch topics");
    }

    return res.json();
  } catch (error) {
    console.log("Error loading topics: ", error);
  }
};

interface IKitProps {
  triggerUpdate: boolean;
}

const Kit: React.FC<IKitProps> = ({ triggerUpdate }) => {
  const [kit, setKit] = useState(null);
  useEffect(() => {
    const fetchKit = async () => {
      const data = await getKit();
      setKit(data.kits[0]);
    };

    fetchKit();
  }, [triggerUpdate]);

  const fixedRow = ['Equipment', 'Brand', 'Model', 'Serial', 'Date'];
  const fields = ['equipment', 'brand', 'model', 'serial', 'date'];
  const fields1 = ['equipment1', 'brand1', 'model1', 'serial1', 'date1'];
  const fields2 = ['equipment2', 'brand2', 'model2', 'serial2', 'date2'];
  const fields3 = ['equipment3', 'brand3', 'model3', 'serial3', 'date3'];

  return (
    <div className="w-[70rem] ">
      <table className="w-full table-auto border-collapse border border-black">
        <thead>
          <tr className="border border-black">
            {fixedRow.map((item, index) => (
              <th key={index} className="border border-black p-2">{item}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr className="border border-black">
            {fields.map((field, index) => (
              <td key={index} className="border border-black p-2">
                {kit ? kit[field] : 'Loading...'}
              </td>
            ))}
          </tr>
          <tr className="border border-black">
            {fields1.map((field, index) => (
              <td key={index} className="border border-black p-2">
                {kit ? kit[field] : 'Loading...'}
              </td>
            ))}
          </tr>
          <tr className="border border-black">
            {fields2.map((field, index) => (
              <td key={index} className="border border-black p-2">
                {kit ? kit[field] : 'Loading...'}
              </td>
            ))}
          </tr>
          <tr className="border border-black">
            {fields3.map((field, index) => (
              <td key={index} className="border border-black p-2">
                {kit ? kit[field] : 'Loading...'}
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );  
}

export default Kit;

  