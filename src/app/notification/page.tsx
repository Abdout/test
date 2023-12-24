'use client';
import Footer from '@/component/report/footer/table';
import Header from '@/component/report/header/table'
import React, {useState} from 'react'
import { usePDF } from 'react-to-pdf';

const Notification = () => {
  const { toPDF, targetRef } = usePDF({filename: 'page.pdf'});
  const [triggerUpdate, setTriggerUpdate] = useState(false);
  return (
    <div className='flex flex-col gap-4'>
      <button onClick={() => toPDF()}>Download PDF</button>
         <div ref={targetRef}>
      <Header triggerUpdate={triggerUpdate} />
      <Footer triggerUpdate={triggerUpdate} />
      </div>
    </div>
  )
}

export default Notification;
