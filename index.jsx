import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Feed from "./pages/Feed";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import Dashboard from "./pages/Dashboard";
import SubmitPost from "./pages/SubmitPost";
import PoliticianProfile from "./pages/PoliticianProfile";
import PoliticianTimeline from "./pages/PoliticianTimeline";
import PostDetail from "./pages/PostDetail";
import PrivateRoute from "./components/PrivateRoute";

const App = () => (
  <Router>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/feed' element={<Feed />} />
      <Route path='/login' element={<LoginPage />} />
      <Route path='/signup' element={<SignupPage />} />
      <Route path='/dashboard' element={<PrivateRoute><Dashboard /></PrivateRoute>} />
      <Route path='/submit' element={<PrivateRoute><SubmitPost /></PrivateRoute>} />
      <Route path='/politician/:id/profile' element={<PoliticianProfile />} />
      <Route path='/politician/:id/timeline' element={<PoliticianTimeline />} />
      <Route path='/post/:postId' element={<PostDetail />} />
    </Routes>
  </Router>
);

const root = createRoot(document.getElementById("root"));
root.render(<App />);