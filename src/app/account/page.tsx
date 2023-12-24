'use client';
import Form from '@/component/report/footer/form'
import React,{useState} from 'react'

const Account = () => {
  const [triggerUpdate, setTriggerUpdate] = useState(false);
  return (
    <Form setTriggerUpdate={setTriggerUpdate} />
  )
}

export default Account