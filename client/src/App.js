import React from "react";
import HomePage from "./views/HomePage";
import PostFrom from "./views/PostFrom";
import NotFoundPage from "./views/NotFoundPage";
import { Route, Routes } from "react-router-dom";
import { PostProvider } from "./context/PostContainer";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <div className="bg-neutral-900 min-h-screen flex items-center">
      <div className="px-10 container m-auto">
        <PostProvider>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/new" element={<PostFrom />} />
            <Route path="/posts/:id" element={<PostFrom />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
          <Toaster />
        </PostProvider>
      </div>
    </div>
  );
};

export default App;
