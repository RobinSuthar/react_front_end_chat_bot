import React from "react";
import ReactDOM from "react-dom/client";
import HomePage from "./components/HomePage";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import NewPage from "./components/NewPage";
// import App from "./App";
// import loginPage from "./components/loginPage";
// import LoginPage from "./components/loginPage";
// import reportWebVitals from "./reportWebVitals";
// import Footer from "./components/Footer";
// import Stuff from "./components/Stuff";
// import HomePage from "./components/HomePage";
import NewPage from "./components/NewPage";
import SignupPage from "./components/SignupPage";
import App from "./App";
import AuthPage from "./components/AuthPage";
import FormPage from "./components/FormPage";
import ReviewPage from "./components/ReviewPage";
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/NewPage" element={<NewPage />} />
      <Route path="/App" element={<App />} />
      {/* <Route path="/FeedBack" element={<FeedBack />} /> */}
      <Route path="/Review" element={<ReviewPage />} />
      <Route path="/SignUp" element={<SignupPage />} />
      <Route path="/Auth" element={<AuthPage />} />
      <Route path="/FormPage" element={<FormPage />} />
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
