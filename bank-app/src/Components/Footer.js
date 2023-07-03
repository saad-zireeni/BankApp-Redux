import React from "react";

const Footer = () => {
  return (
    <footer className="fixed bottom-0 w-full bg-gray-200 text-center py-2">
      &copy; {new Date().getFullYear()} Bank App
    </footer>
  );
};

export default Footer;
