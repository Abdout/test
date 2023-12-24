'use client';
import Form from '@/component/report/header/form'

import React, { useState } from 'react'

const Report = () => {
  const [triggerUpdate, setTriggerUpdate] = useState(false);

  return (
    <div>
      
      <Form setTriggerUpdate={setTriggerUpdate} />
    </div>
  )
}

export default Report