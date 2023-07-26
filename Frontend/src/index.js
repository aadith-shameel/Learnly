import ReactDOM from "react-dom/client";

import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import LoginPage from "./pages/login/loginPage";
import RegisterPage from "./pages/register/registerPage";
import RegisterAboutYouPage from "./pages/register/registerAboutYou/registerAboutYouPage";

import App from "./app";
import LandingPage from "./pages/landing/landingPage";
import ContactPage from "./pages/contact/contactPage";
import AvailabilityCalendarPage from "./pages/availability-calendar/availabilityCalendarPage";
import ReportPage from "./pages/report-issue/reportPage";
import IssueForm from "./pages/report-issue/issueForm";
import IssueDetails from "./pages/report-issue/issueDetails"

const root = ReactDOM.createRoot(document.getElementById("root"));
//root.render(<Register />);
root.render(
  <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<App />}>
        <Route exact path="/" element={<LandingPage />} />
        <Route exact path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/about-you" element={<RegisterAboutYouPage />} />

        <Route path="/contact" element={<ContactPage />} />
        <Route path="/calendar" element={<AvailabilityCalendarPage />} />
        <Route path="/issues" element={<ReportPage />} />
        <Route path="/issue/new" element={<IssueForm />} />
        <Route path="/issue/:id" element={<IssueDetails />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
