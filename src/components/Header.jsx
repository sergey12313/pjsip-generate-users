import React from "react";

const Header = () => {
  return (
    <div className="terminal-nav">
      <div className="terminal-logo">
        <div className="logo terminal-prompt">
          <a href="/" className="no-style">
            Pjsip.conf generator
          </a>
        </div>
      </div>
      <nav className="terminal-menu"></nav>
    </div>
  );
};

export default Header;
