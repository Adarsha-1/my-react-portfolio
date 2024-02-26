import capgeminiLogo from "../../assets/images/capgemini1.png";

const data = [
  { id: 1, icon: (
    <img
      src={capgeminiLogo}
      alt="UF Img"
      style={{
        width: 200,
        height: 100,
        objectFit: "contain",
        // borderRadius: 25,
      }}
    />
  ), title: "Assosiate Consultant/Software Engineer", subHeading: "September 2020 - July 2022",  desc: "2 Years Working" },
  { id: 1, icon: (
    <img
      src={capgeminiLogo}
      alt="UF Img"
      style={{
        width: 200,
        height: 100,
        objectFit: "contain",
        // borderRadius: 50,
      }}
    />
  ), title: "J2EE Internship",  subHeading: "Jan 2020 - Mar 2020", desc: "3+ Years Working" },
];

export default data;
