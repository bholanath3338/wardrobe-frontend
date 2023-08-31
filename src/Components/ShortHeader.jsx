import React from "react";

export default function ShortHeader() {
  return (
    <header>
      <nav>
        <div className="logo-parent">
          <a className="heading" href="./">
            <img src="/assets/img/logo.png" alt="logo" width="80px" />
          </a>
        </div>
      </nav>
    </header>
  );
}
