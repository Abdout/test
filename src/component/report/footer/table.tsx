'use client';
import React, { useState, useEffect } from 'react';

const getFooter = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/report/footer", {
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

interface IFooterProps {
  triggerUpdate: boolean;
}

const Footer: React.FC<IFooterProps> = ({ triggerUpdate }) => {
  const [footer, setFooter] = useState(null);
  useEffect(() => {
    const fetchFooters = async () => {
      const data = await getFooter();
      setFooter(data.footers[0]);
    };

    fetchFooters();
  }, [triggerUpdate]);

  const fixedColumn = ['Company', 'Name', 'Designation', 'Signature', 'Date'];
const fields = ['contractor', 'client', 'customer', 'consultant'];

return (
  <div className="w-[70rem] ">
    <table className="w-full table-auto border-collapse border border-black">
      <tbody>
        {fixedColumn.map((item, index) => (
          <tr key={index} className="border border-black">
            <td className="border border-black p-2">{item}</td>
            {fields.map((field, index) => (
              <td key={index} className="border border-black p-2">
                {footer ? (item === 'Company' ? footer[field] : footer[field + item]) : 'Loading...'}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);
};

export default Footer;
