import React from "react";
import Header from "../app-header/app-header";
import Footer from "../footer/footer";

const AppLayout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-premium-cream">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
};

export default AppLayout;
