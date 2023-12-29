'use client';
import React, { useState } from 'react';

const Docs = () => {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [selectedSubitem, setSelectedSubitem] = useState<string | null>(null);

  const handleMenuClick = (menuName: string) => {
    setActiveMenu(activeMenu === menuName ? null : menuName);
  };

  const handleSubitemClick = (subitemName: string) => {
    setSelectedSubitem(subitemName);
  };

  return (
    <div>
      <h1 className="text-4xl mb-4">Documentation</h1>
      <nav>
        <ul className="flex gap-4">
          <li className="cursor-pointer text-xl opacity-50 hover:opacity-100 focus:opacity-100" onMouseEnter={() => handleMenuClick('Swgr')}>
            Swgr
            {activeMenu === 'Swgr' && (
              <div className="absolute bg-white mt-2 rounded shadow-lg">
                <ul className="p-4 space-y-2">
                  <li className="hover:bg-gray-100" onClick={() => handleSubitemClick('Circuit Breaker')}>Circuit Breaker</li>
                  <li className="hover:bg-gray-100" onClick={() => handleSubitemClick('Relay')}>Relay</li>
                  <li className="hover:bg-gray-100" onClick={() => handleSubitemClick('Current Transformer')}>Current Transformer</li>
                  <li className="hover:bg-gray-100" onClick={() => handleSubitemClick('Contactor')}>Contactor</li>
                  {/* Add more subitems as needed */}
                </ul>
              </div>
            )}
          </li>
          <li className="cursor-pointer text-xl opacity-50 hover:opacity-100 focus:opacity-100" onMouseEnter={() => handleMenuClick('Trafo')}>Trafo</li>
          <li className="cursor-pointer text-xl opacity-50 hover:opacity-100 focus:opacity-100" onMouseEnter={() => handleMenuClick('Cable')}>Cable</li>
          <li className="cursor-pointer text-xl opacity-50 hover:opacity-100 focus:opacity-100" onMouseEnter={() => handleMenuClick('Other')}>Other</li>
        </ul>
      </nav>
      {selectedSubitem && <div className="mt-4">{selectedSubitem}</div>}
    </div>
  );
};

export default Docs;