import React from "react";

function Header() {
  return (
    <div className="flex justify-between">
      <div className="flex">
        <div className="bg-blue-400 ml-2">FE-ASSISMENT</div>

        <div className="bg-blue-400 ml-2">Workspace Available</div>
        <div className="bg-blue-400 ml-2">Board</div>
      </div>
      <div className="flex">
        <div className="bg-blue-400 mr-2">PowerUps</div>
        <div className="bg-blue-400 mr-2">Automation</div>
        <div className="bg-blue-400 mr-2">Filter</div>
      </div>
    </div>
  );
}

export default Header;
