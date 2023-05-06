import React from "react";

const Education = () => {
  const educationfield = [
    {
      year: "2001",
      boards: "State Board of Education",
      certificate: "Certificate of S.S.C",
      percentage: "45.1",
      maineducation: "Z.P.High School",
      location: "visakhapatnam",
    },
    {
      year: "2004",
      boards: "Board Of Intermediate Education",
      certificate: "Certificate of  M.P.C",
      percentage: "45.2",
      maineducation: "TULASI MURARI JUNIOR COLLEGE",
      location: "visakhapatnam",
    },
    {
      year: "2011",
      boards: "Andhra University",
      certificate: "Certificate of B.sc(M.S.CS)",
      percentage: "53.54",
      maineducation: "M.V.R DEGREE COLLEGE",
      location: "visakhapatnam",
    },
    {
      year: "2013",
      boards: "Government Of Andhra Pradesh",
      certificate: "Certificate of ITI(ELECTRICIAN)",
      percentage: "80.71",
      maineducation: "LOYALA PVT I.T.I",
      location: "visakhapatnam",
    },
  ];
  return (
    <div className="educationgrp">
      <h1>Education</h1>

      {educationfield.map((index) => (
        <div className="eduction-box">
          <span>{index.year}</span>
          <h3>{index.boards}</h3>
          <h4>
            {index.certificate} <h6>{index.percentage}%</h6>{" "}
          </h4>
          <b>{index.maineducation}</b>
          <h5>{index.location}</h5>
        </div>
      ))}
    </div>
  );
};

export default Education;
