import { Route, Routes } from "react-router";
import { Post } from "./components/Post";
import PostLists from "./components/PostLists";
import { PostProvider } from "./contexts/PostContext";

function App() {
  return (
    <Routes>
      <Route path="/" element={<PostLists />}></Route>
      <Route
        path="/posts/:id"
        element={
          <PostProvider>
            <Post />
          </PostProvider>
        }
      ></Route>
    </Routes>
  );
}

export default App;
