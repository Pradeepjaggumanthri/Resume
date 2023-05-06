import React from "react";

const AboutusSection = () => {
  return (
    <div className="homesection">
      <div className="profileimage-grp">
        <span>          
          <img src={require("../assets/img/profile.png")} alt="" />
        </span>
        <h1>Jaggumanthri Pradeep Kumar</h1>
        <h4>UI/UX ,Wordpress,React JS Frontend and Shopify</h4>
      </div>
      <div className="aboutme-grp">
        <h1>About Me</h1>
        <p>
          “Design doesn't mean that every person gonna like, love it .but that's
          the creativity of those eye which creates something different.”
        </p>
        <p>
          We are currently hiring a passionate, user centered UI/UX Designer to
          join a collaborative and innovative team to create visually delightful
          and easy-to-use digital products in a fast-paced environment.
        </p>
        <p>
          Design, develop and test HTML5, CSS3, Bootstrap, JavaScript, jQuery
          and React.JS that meets accessibility and web browser standards for
          website.
        </p>
        <p>
          Designed CSS templates for use in all pages on the website working
          with CSS Background, positioning, text, border, margin, padding, and
          table.
        </p>
        <p>
          Environment: HTML 5, CSS3, SASS, LESS, JavaScript, Bootstrap, React
          JS,JSON
        </p>
        <p>
          Used Object Oriented Programming concepts to develop UI components
          that could be reused across the Web Application .
        </p>
        <p>
          Responsible for experimenting with new frameworks and libraries to
          make decision either should be used in the product/project or not.
        </p>
        <p>
          Created Responsive Designs (Mobile/Tablet/Desktop) using HTML & CSS,
          Bootstrap.
        </p>
      </div>
    </div>
  );
};

export default AboutusSection;
