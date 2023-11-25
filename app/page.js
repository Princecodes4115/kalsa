"use client";
import Navbar from "./components/Navbar";
import Revenue from "./components/Revenue";
import Analytics from "./components/Analytics";
import { useState } from "react";

const Page = () => {
  const [showComponent, setShowComponent] = useState("revenue");

  const renderContent = (component) => (
    <div className="w-full">
      <div className={` w-full overflow-x-auto`}>
        <div className=" navbar overflow-x-auto mx-auto  ">
          <Navbar
            showComponent={showComponent}
            setShowComponent={setShowComponent}
          />
        </div>
      </div>

      {/* Render the selected component */}
      {component}
    </div>
  );

  return renderContent(
    showComponent === "home" ? (
      <Revenue />
    ) : showComponent === "analytics" ? (
      <Analytics />
    ) : showComponent === "revenue" ? (
      <Analytics />
    ) : showComponent === "crm" ? (
      <Analytics />
    ) : showComponent === "apps" ? (
      <Analytics />
    ) : (
      <Revenue />
    )
  );
};

export default Page;
