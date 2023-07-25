import React from "react";
import CommonIS, { CommonPageHead } from "./common";
import ind1 from '../images/ind1.png';
import ind2 from '../images/ind2ag.png';
import ind3 from '../images/ind3fi.png';
import Governmentpic from '../images/industries/Government.png';
import Utilitiespic from '../images/industries/Utilities.png';
import Bankingpic from '../images/industries/Banking.png';
import Insurancepic from '../images/industries/Insurance.png';
import telepic from '../images/industries/tele.png';
import gammingpic from '../images/industries/gamming.png';
import Retailpic from '../images/industries/Retail and manufacturing.png';

export default function Industries() {
  const box = [
    {
      pic: ind1,
      title: "Healthcare",
      des: "With our expert IT services, your healthcare practice can focus on what matters most: providing exceptional patient care. Our expertise in the industry and range of IT services make us the perfect partner to take your healthcare business to the next level",
      points: [
        "Streamline Patient Management",
        "Data Security and Compliance",
        "Healthcare operations optimization",
      ],
    },
    {
      pic: ind2,
      title: "Agriculture",
      des: "The agriculture industry is evolving rapidly, and our IT staffing solutions are at the forefront of this change. With our help, businesses can embrace the latest technology, streamline their operations, and increase efficiency.",
      points: [
        "Smart Agriculture",
        "Precision Farming",
        "Agribusiness Management",
      ],
    },
    {
      pic: ind3,
      extendedlin: 'healthcare',
      title: "Fintech",
      des: "At Teksett, we understand the unique needs of fintech companies. Our experienced recruiters specialize in finding the best talent for fintech positions, including IT support, software development, project management, and more.",
      points: [
        "Industry recognized IT certifications",
        "Proven track record of success with satisfied clients",
      ],
    },
    {
      pic: Retailpic,
      extendedlin: 'healthcare',
      title: "Retail and manufacturing",
      des: "Streamline your operations and improve your bottom line with Teksett's tailored IT services for the retail and manufacturing industry. Our tailored approach ensures that we understand your unique needs and deliver the solutions that meet them.",
      points: [
        "Optimized Supply Chain Management",
        "Enhanced Customer Experience",
        "Robust Data Analytics",
      ],
    },
    {
      pic: gammingpic,
      extendedlin: 'healthcare',
      title: "Gaming & Entertainment",
      des: "The media and entertainment industry is constantly evolving, and our team at Teksett understands the importance of staying ahead of the curve. From developing new software to implementing cutting-edge technologies, we have the expertise to help you stay ahead of the competition.",
      points: [
        "Industry recognized IT certifications",
        "Proven track record of success with satisfied clients",
      ],
    },
    {
      pic: Bankingpic,
      extendedlin: 'healthcare',
      title: "Banking",
      des: "Our IT services are designed to help banks enhance their operational efficiency, streamline processes, and reduce costs while maintaining the highest levels of security.",
      points: [
        "Expert-led team and professionals",
        "Reliable and scalable banking solutions",
        "Ongoing support and maintenance",
      ],
    }, {
      pic: Governmentpic,
      title: "Government",
      des: "We provide reliable and secure IT services that help government agencies streamline their operations and improve their service delivery.",
      points: [
        "Deep understanding of government operations and regulations",
        "Robust and secure IT infrastructure",
        "Expertise in implementing",
      ],
    },
    {
      pic: Utilitiespic,
      extendedlin: 'healthcare',
      title: "Utilities",
      des: "Teksett excels in delivering tailored IT services and solutions for the utilities industry. With industry-specific expertise, robust infrastructure, and adherence to regulatory standards, we ensure optimal performance and reliability for utility operations.",
      points: [
        "Comprehensive Utilities Expertise",
        "Robust Infrastructure for Mission-Critical Systems",
        "Regulatory Compliance and Data Integrity",
      ],
    },
    {
      pic: telepic,
      extendedlin: 'healthcare',
      title: "Telecommunication",
      des: "In a world where communication is key, your business needs IT solutions that can keep up with the speed of technology. Our team of experts at Teksett has a deep understanding of the latest trends and technologies, and we are committed to helping your business succeed.",
      points: [
        "Network Infrastructure Management",
        "Software Development for Telecommunications",
        "Telecom-Specific IT Consultancy",
      ],
    },
    {
      pic: Insurancepic,
      extendedlin: '',
      title: "Insurance",
      des: "Our well-designed IT solutions ensure that you experience reliable IT support tailored to your insurance business needs.",
      points: [
        "Customized solutions to meet your unique business needs",
        "Streamlined workflows for increased efficiency",
        "Expertise in insurance-specific software and systems",
      ],
    },
  ];

  return (
    <div>
      <CommonPageHead title={'Revolutionizing Industries with Teksett’s IT Solutions'} page={'domains'} />

      {box.map(({
        pic,
        title, des, points, extendedlin }) => (
        <CommonIS
          pic={pic}
          title={title} des={des} points={points} mainlin={'domains'} extendedlin={extendedlin} />
      ))}
    </div>
  );
}
