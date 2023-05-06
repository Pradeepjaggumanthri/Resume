import React from "react";

const Mywebsite = () => {
  const websitelist = [
    {
      linksort: "https://womanonpurpose.org/",
    },
    {
      linksort: "http://futureworldschool.in/",
    },
    {
      linksort: "http://www.hiwaga.in/",
    },
    {
      linksort: "http://oisspa.com/",
    },
    {
      linksort: "https://reactore.com/",
    },
    {
      linksort: "http://dentocalmdentistkiama.com/",
    },
    {
      linksort: "https://www.alphaprosolutions.com.au/",
    },
  ];
  return (
    <div className="wesitelinkgrp">
      <h1>My Project work</h1>
      <ul>
        {websitelist.map((index) => (
          <li>
            <a rel="noopener noreferrer" target="_blank" href={index.linksort}>
              {index.linksort}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Mywebsite;
