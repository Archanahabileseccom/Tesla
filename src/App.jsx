import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";

/* =========================
   Navbar Components
========================= */
import Navbar from "./components/Navbar/Navbar..jsx";
import Dropdown from "./components/Navbar/Dropdown";
import MobileMenu from "./components/Navbar/MobileMenu";

/* =========================
   Footer
========================= */
import Footer from "./components/Footer/Footer";

/* =========================
   Cards
========================= */
import IndustryCard from "./components/Cards/IndustryCard";
import InsightCard from "./components/Cards/InsightCard";
import ServiceCard from "./components/Cards/ServiceCard";
import ValueCard from "./components/Cards/ValueCard";

/* =========================
   Contact
========================= */
import ContactForm from "./components/Contact/ContactForm";

/* =========================
   CTA
========================= */
import CTA from "./components/CTA/CTA";

/* =========================
   Animations
========================= */
import FadeIn from "./components/Animations/FadeIn";
import ImageReveal from "./components/Animations/ImageReveal";
import PageTransition from "./components/Animations/PageTransition";
import SlideUp from "./components/Animations/SlideUp";

/* =========================
   Sections
========================= */
import Section from "./components/Sections/Section";
import ImageContent from "./components/Sections/ImageContent";
import ContentSection from "./components/Sections/ContentSection";
import SectionTitle from "./components/Sections/SectionTitle";

/* =========================
   Pages
========================= */

/* Home */
import Home from "./pages/Home";

/* About */
import About from "./pages/About";

/* Intellectual Property */
import IntellectualProperty from "./pages/IntellectualProperty";

/* Global IP */
import GlobalIP from "./pages/GlobalIP";

/* Litigation */
import Litigation from "./pages/Litigation";

/* Corporate */
import Corporate from "./pages/Corporate";

/* Transactions */
import Transactions from "./pages/Transactions";

/* Insights */
import Insights from "./pages/Insights";

/* Careers */
import Careers from "./pages/Careers";

/* Contact Page */
import Contact from "./pages/Contact";


function App() {
  return (
    <BrowserRouter>
      <div className="app">

        {/* =========================
            Navbar
        ========================= */}
        <Navbar />

        {/* =========================
            Main Content
        ========================= */}
        <main>
          <Routes>

            {/* Home */}
            <Route
              path="/"
              element={<Home />}
            />

            {/* About */}
            <Route
              path="/about"
              element={<About />}
            />

            {/* Intellectual Property */}
            <Route
              path="/intellectual-property"
              element={<IntellectualProperty />}
            />

            {/* Global IP */}
            <Route
              path="/global-ip"
              element={<GlobalIP />}
            />

            {/* Litigation */}
            <Route
              path="/litigation"
              element={<Litigation />}
            />

            {/* Corporate */}
            <Route
              path="/corporate"
              element={<Corporate />}
            />

            {/* Transactions */}
            <Route
              path="/transactions"
              element={<Transactions />}
            />

            {/* Insights */}
            <Route
              path="/insights"
              element={<Insights />}
            />

            {/* Careers */}
            <Route
              path="/careers"
              element={<Careers />}
            />

            {/* Contact Page */}
            <Route
              path="/contact"
              element={<Contact />}
            />

            {/* Contact Form */}
            <Route
              path="/contact-form"
              element={<ContactForm />}
            />

            {/* Fallback */}
            <Route
              path="*"
              element={<Home />}
            />

          </Routes>
        </main>

        {/* =========================
            Footer
        ========================= */}
        <Footer />

      </div>
    </BrowserRouter>
  );
}

export default App;