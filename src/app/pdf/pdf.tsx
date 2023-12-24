import Header from '@/component/report/header/table';
import { useRef } from 'react';
import generatePDF from 'react-to-pdf';

const Component = () => {
   const targetRef = useRef();
   return (
      <div>
         <button onClick={() => generatePDF(targetRef, {filename: 'page.pdf'})}>Download PDF</button>
         <div ref={targetRef}>
            <Header />
         </div>
      </div>
   )
}