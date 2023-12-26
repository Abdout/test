// 'use client';
// import React, { useEffect, useState } from 'react';
// import EditTopicForm from '@/components/EditTopicForm';

// const getTopicById = async (id) => {
//   try {
//     const res = await fetch(`http://localhost:3000/api/topics/${id}`, {
//       method: 'GET',
//       headers: {
//         'Content-Type': 'application/json'
//       }
//     });
//     const data = await res.json();
//     return data;
//   } catch (error) {
//     console.error("Error fetching topic: ", error);
//   }
// };

// export default function EditTopic({ params }) {
//   const { id } = params;
//   const [topic, setTopic] = useState(null);

//   useEffect(() => {
//     const fetchTopic = async () => {
//       const data = await getTopicById(id);
//       setTopic(data.topic);
//     };

//     fetchTopic();
//   }, [id]);

//   if (!topic) {
//     return <div>Loading...</div>;
//   }

//   const { title, description } = topic;

//   return <EditTopicForm id={id} title={title} description={description} />;
// }