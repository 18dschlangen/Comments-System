import React from "react";
import { useParams } from "react-router-dom";
import { useAsync } from "../hooks/useAsync";
import { getPost } from "../services/posts";

const Context = React.createContext();

export function PostProvider({ children }) {
  const { id } = useParams();
  const { loading, error, value: post } = useAsync(() => getPost(id), [id]);
  console.log("post :>> ", post);
  return (
    <Context.Provider value={{ post: { id, ...post } }}>
      {loading ? <h1>Loading</h1> : error ? <h1>{error}</h1> : children}
    </Context.Provider>
  );
}
