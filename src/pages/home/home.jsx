import React,{useEffect} from "react";
import "./home.css";
import json from "../../data.json";
import AOS from "aos";
import "aos/dist/aos.css";
import ScrollToTop from "react-scroll-to-top";


import { FaLinkedinIn, FaFacebookF, FaInstagram } from "react-icons/fa";

const Home = () => {
  
  useEffect(() => {
    AOS.init();
    AOS.refresh();  
  }, []);
  const links =[
    {icon:<FaLinkedinIn /> ,link:json.home.links.linkedinIn},
    {icon:<FaFacebookF />,link:json.home.links.facebook},
    {icon:<FaInstagram />,link: json.home.links.instagram}
  ]

  return (
    <div>
      <section className="Home" id="home" >
        <div className="main_div_">
          <p className="name" data-aos={"fada-up"} data-aos-delay={"100"}>
            <b>{json.home.title}</b>
          </p>
          <p className="p">{json.home.text} </p>
          <div className="logos">
            {links.map((links, index) => (
                <a
                  key={`home_icons_links${index}`}
                  href={links.link}
                  style={{ color: "white" }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {links.icon}
                </a>
))}
          </div>
          <div />
        </div>
        <ScrollToTop color=""/>
      </section>
    </div>
  );
};
export default Home;
