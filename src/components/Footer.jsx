import React from "react";
import SocialMedia from "./SocialMedia";

const Footer = () => (
  <footer id="footer" className="bg-dark text-white text-center py-3 mx-auto">
    <h4 className="text-secondary">Check me via these platforms:</h4>
    <SocialMedia />
    <hr/>
    <p>&copy; 2025 manoftomorrow.eth </p>
  </footer>
);

export default Footer;
