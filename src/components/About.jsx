import React, { useEffect } from "react";
import Mahima_Jaiswal_Resume from "../resume/Mahima_Jaiswal_Resume.pdf"
import AOS from "aos";

export default function About() {

  const handleDownload = () => {
    window.open("https://drive.google.com/file/d/1SbOB-hSccYow9tXM26ls3LHnsIFDPTG4/view?usp=sharing", '_blank');
  };

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <section data-aos="fade-up" className="about section sections" id="about">
      <h1 data-aos="fade-up" className="heading">
        <span className="sauce">About Me</span>
      </h1>
      <div>
        <div data-aos="fade-up" className=" first">
          <p id="user-detail-intro">
          Welcome to my coding realm, where I transform coffee into lines of code! <p style={{ display: 'inline-block' }} className="sauce">I'm Mahima &nbsp;</p>
          Tech Enthusiast by Profession, Culinary Adventurer at Heart. I'm a Full Stack Developer hailing from Lucknow, with expertise in HTML, CSS, JavaScript, React, MongoDB, Express, and Node. With a strong foundation in full-stack development, I merge my passion for coding with a love for cooking. From crafting visually appealing user interfaces to developing robust backend solutions, I bring seamless functionality, dynamic user experiences, and delightful flavors to the digital realm. Join me on this exciting journey of innovation and taste!
            <br />
          </p>
          <br />
        </div>
        <button onClick={handleDownload} rel="noreferrer" href={Mahima_Jaiswal_Resume} 
        download={"Mahima_Jaiswal_Resume"} id="resume-button-2" 
        className="contact-button resume-button second-btn">
          Resume</button>

         

      </div>
    </section>
  );
}
