import React from "react";
import { BsInfoCircleFill } from 'react-icons/bs';
import PageHeaderContent from "../../components/pageheadercontent";
import { Animate } from 'react-simple-animate';
import './style.scss';



const personalDetails = [
    {
        label: "Name:",
        value: "Vighnesh Yogesh Devkate",
    },
    {
        label: "Age:",
        value: "21",
    },
    {
        label: "Address:",
        value: "India",
    },
    {
        label: "Email:",
        value: "vighnesh.devkate2003@gmail.com",
    },
    {
        label: "Contact No:",
        value: "+91 8308323330",
    },
];

const jobSummary = "Enthusiastic Web Developer with hands-on experience in HTML, CSS, JavaScript, and React. Dedicated to creating responsive, scalable, and user-centric web applications. Looking for an entry-level position to leverage my skills and contribute to innovative projects while expanding my knowledge in the field of web development."

const About = () => {
    return (
        <section id='about' className="about">
            <PageHeaderContent
                headerText='About'
                icon={<BsInfoCircleFill size={40} />}
            />
            <div className="about__content">
                <div className="about__content__personalWrapper">
                    <Animate
                        play
                        duration={1.5}
                        delay={1}
                        start={{
                            transform: "translateX(-900px)"
                        }}
                        end={{
                            transform: "translateX(0px)"
                        }}
                    >
                        <h3>Web Developer</h3>
                        <p>{jobSummary}</p>
                    </Animate>
                    <Animate
                        play
                        duration={1.5}
                        delay={1}
                        start={{
                            transform: "translateX(500px)"
                        }}
                        end={{
                            transform: "translateX(0px)"
                        }}
                    >
                        <h3 className="personalInformationHeaderText">Personal Information</h3>
                        <ul>
                            {personalDetails.map((item, i) => (
                                <li key={i}>
                                    <span className="title">{item.label}</span>
                                    <span className="value">{item.value}</span>
                                </li>
                            ))}
                        </ul>
                    </Animate>
                </div>
               
            </div>
        </section>
    );
}

export default About;
