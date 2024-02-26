import Indiana from "../../assets/images/indiana.png";
import Sastra from "../../assets/images/sastra1.png";

const data = [
  {
    id: 1,
    icon: (
      <img
        src={Indiana}
        alt="Indiana Img"
        style={{
          width: 100,
          height: 100,
          objectFit: "fill",
          // borderRadius: 50,
        }}
      />
    ),
    title:
      "Master's in Computer and Information Sciences, Indiana University, Bloomington, USA",
    desc: "Aug 2022 - May 2024",
  },
  {
    id: 2,
    icon: (
      <img
        src={Sastra}
        alt="Sastra Img"
        style={{
          width: 100,
          height: 100,
          objectFit: "contain",
          // borderRadius: 50,
        }}
      />
    ),
    title:
      "Bachelor of Technology in Information Technology, Sastra University, Thanjavur, India",
    desc: "July 2016 - July 2020",
  },
];

export default data;
