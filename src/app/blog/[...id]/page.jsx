// src/app/blog/[id]/page.jsx
"use client"; // useParams()

import { useParams } from "next/navigation";

const SingleBlog = () => {
  const { id } = useParams();-

  return (
    <div>
          <p>ID: {id}</p>
    </div>
  );
};

export default SingleBlog;