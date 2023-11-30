import { useState } from "react";

import "./App.css";

import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./pages/home/Home";
import Layout from "./widgets/layout/Layout";
import Admin from "./pages/admin/Admin";
import { QueryClient, QueryClientProvider } from "react-query";

function App() {
  const queryClient = new QueryClient();
  return (
    <Router>
      <Layout>
        <QueryClientProvider client={queryClient}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/admin" element={<Admin />} />
          </Routes>
        </QueryClientProvider>
      </Layout>
    </Router>
  );
}

export default App;
