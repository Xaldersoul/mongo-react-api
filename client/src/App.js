import React from "react";
import HomePage from "./views/HomePage";
import PostFrom from "./views/PostFrom";
import NotFoundPage from "./views/NotFoundPage";
import { Route, Routes } from "react-router-dom";
import { PostContainer } from "./context/PostContainer";

const App = () => {
  return (
    <div className="bg-neutral-900 min-h-screen flex items-center">
      <div className="px-10 container m-auto">
        <PostContainer>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/post" element={<PostFrom />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </PostContainer>
      </div>
    </div>
  );
};

export default App;
