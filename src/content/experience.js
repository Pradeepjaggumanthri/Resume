import React from "react";

const Experiencesection = () => {
  const experiencecount = [
    {
      toyear: "2016",
      endyear: "2019",
      companyname: "Media3 International PVT ltd",
      workname: "UI developer",
      descriptionword:
        "Implemented user interface guidelines and standards throughout the development and maintenance of the website using JavaScript, JQuery, CSS and HTML.Designed CSS templates for use in all pages on the website working with CSS Background, positioning, text, border, margin, padding, and table.",
    },
    {
      toyear: "2019",
      endyear: "2020",
      companyname: "Media3 International PVT ltd",
      workname: "UI developer and Wordpress",
      descriptionword:
        "We can Web design: UX, UI, site architecture and Use this Programmation languages: HTML, CSS, PHP, Javascript,Theme and plugin installation development and Page builders: Elementor, Divi, Beaver are worked in wordpress",
    },
    {
      toyear: "2021",
      endyear: "2022",
      companyname: "Media3 International PVT ltd",
      workname: "UI developer,Wordpress and React Js",
      descriptionword:
        "Design, develop and test HTML5, CSS3, Bootstrap, JavaScript, jQuery and React.JS that meets accessibility and web browser standards for website.",
    },
    {
      toyear: "2022",
      endyear: "2023",
      companyname: "UnoSimple Technologies Pvt.Ltd",
      workname: "React Js Frontend",
      descriptionword:
        "Design and react js developer using frontend layout using website and coding",
    },
    {
      toyear: "2023",
      endyear: "Present",
      companyname: "UnoSimple Technologies Pvt.Ltd",
      workname: "React Js Frontend",
      descriptionword:
        "Design and react js developer using frontend layout using website and coding",
    },
  ];
  return (
    <div className="experiencegrp">
      <h1>Experience</h1>
      {experiencecount.map((index) => (
        <div className="experiencebox">
          <span>
            {index.toyear} - {index.endyear}
          </span>
          <h3>{index.companyname}</h3>
          <h4>{index.workname}</h4>
          <div className="list-description">
            <p>{index.descriptionword}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Experiencesection;
