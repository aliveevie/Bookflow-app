/* eslint-disable require-jsdoc */
import React, { useState, useEffect } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme.js";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./components/home_page/HomePage.js";
import AuthPage from "./components/login_page/AuthPage.js";
import AdminPanel from "./components/admin_panel/AdminPanel.js";
import StudentPanel from "./components/student_panel/StudentPanel.js";
import Footer from "./components/footer/Footer.js";
import AdminAccount from "./components/admin_panel/admin_pages/AdminAccount.js";
import AddBook from "./components/admin_panel/admin_pages/AddBook.js";
import ManageStudents from "./components/admin_panel/admin_pages/ManageStudents.js";
import IssuedBooks from "./components/admin_panel/admin_pages/IssuedBooks.js";
import AllBooks from "./components/admin_panel/admin_pages/AllBooks.js";
import BookIssued from "./components/student_panel/student_pages/BookIssued.js";
import StudentAccount from "./components/student_panel/student_pages/StudentAccount.js";
import History from "./components/student_panel/student_pages/History.js";
import Search from "./components/student_panel/student_pages/Search.js";

/*
 * Main component for the application.
 * @returns {JSX.Element} The rendered component.
 */
function App () {
  const [backendStatus, setBackendStatus] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/api/status")
      .then(response => response.json())
      .then(data => setBackendStatus(data))
      .catch(error => console.error("Error connecting to backend:", error));
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <div>
          <p>Backend Status: {backendStatus.message}</p>
        </div>
        <div className="App">
          <CssBaseline />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="login" element={<AuthPage />} />
            <Route path="admin" element={<AdminPanel />} >
              <Route path="account" element={<AdminAccount />} />
              <Route path="add-book" element={<AddBook />} />
              <Route path="all-book" element={<AllBooks />} />
              <Route path="manage-std" element={<ManageStudents />} />
              <Route path="issued-book" element={<IssuedBooks />} />
            </Route>
            <Route path="student" element={<StudentPanel />} >
              <Route path="std-account" element={<StudentAccount />} />
              <Route path="history" element={<History />} />
              <Route path="book-issued" element={<BookIssued />} />
              <Route path="search" element={<Search />} />
            </Route>
          </Routes>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
