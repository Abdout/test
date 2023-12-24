import { useState, useEffect } from "react";


const getTopics = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/report", {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch report");
    }

    return res.json();
  } catch (error) {
    console.log("Error loading report: ", error);
  }
};

export default function TopicsList() {
  const [show, setShow] = useState(false);
  const [currentTopic, setCurrentTopic] = useState(null);
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    getTopics().then((data) => setTopics(data.topics));
  }, []);

  return (
    <>
      <div>
        <h1>{title}</h1>
        <div>{description}</div>
      </div>
    </>
  );
}
