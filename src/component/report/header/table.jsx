'use client';
import React, { useState, useEffect } from 'react';

const getHeader = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/report", {
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

export default function Header({ triggerUpdate }) {
  const [header, setHeader] = useState(null);

  useEffect(() => {
    const fetchHeaders = async () => {
      const data = await getHeader();
      setHeader(data.headers[0]);
    };

    fetchHeaders();
  }, [triggerUpdate]);

  const fields = [
    { label: 'Customer', key: 'customer' },
    { label: 'Consultant', key: 'consultant' },
    { label: 'Client', key: 'client' },
    { label: 'Description', key: 'description' },
    { label: 'Project Name', key: 'projectName' },
    { label: 'Date', key: 'date' },
    { label: 'Location', key: 'location' },
    { label: 'Tag', key: 'tag' },
    { label: 'Sheet', key: 'sheet' },
  ];

  const chunkedFields = [
    fields.slice(0, 3),
    fields.slice(3, 6),
    fields.slice(6, 9),
  ];

  return (
    <table className="table-fixed border-collapse border border-black w-full">
      <tbody>
        {chunkedFields.map((rowFields, rowIndex) => (
          <tr key={rowIndex} className={rowIndex === 0 ? 'min-h-[12rem]' : 'min-h-[4rem]'}>
            {rowFields.map((field, index) => (
              <td key={index} className="border border-black">
                <div className="p-2">
                  <div className="font-bold mb-2">{field.label}</div>
                  <div>{header && header[field.key]}</div>
                </div>
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}