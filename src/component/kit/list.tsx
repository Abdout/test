import { item } from '@/constant/kit/item'
import React from 'react'
import Kit from './kit';

const KitList = () => {
  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
      {item.map((kit, index) => (
        <Kit key={index} src={kit.src} alt={kit.alt} width={kit.width} height={kit.height} />
      ))}
    </div>
  );
  };
  
  export default KitList;