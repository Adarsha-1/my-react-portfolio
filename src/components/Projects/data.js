import Image1 from "../../assets/images/portfolio.avif";
import Image2 from "../../assets/images/national_park.png"
import Image3 from "../../assets/images/food_allergen.png"
import Image4 from "../../assets/images/home_credit.jpeg"
import Image5 from "../../assets/images/machi.png"

const data = [
  {
    id: 1,
    category: "frontend",
    image: Image1,
    title: "Personal Portfolio",
    desc: "A responsive personal portfolio project, developed with React. It provides an optimal user experience while highlighting my work, projects, and expertise in a visually appealing manner.",
    demo: "http://egatortutorials.com",
    technologies_used: "React.js, HTML, CSS, JavaScript",
    github: "https://github.com/Adarsha-1/my-react-portfolio",
  },
  {
    id: 2,
    category: "frontend",
    image: Image2,
    title: "National Park Tour Planning",
    desc: "Developed a comprehensive Web Based application for National park tours, allowing users to seamlessly create an itinerary, transportation, explore the parks and their attractions, lodging arrangements along with a detailed map location for the place.",
    technologies_used: "HTML, CSS, JavaScript, ReactJs, Java, SpringBoot, MySQL, Microservices",
    demo: "http://egatortutorials.com",
    github: "https://github.com/Adarsha-1/National-Park-Tour-Planning"
    // github: "https://github.com/egattor",
  },
  {
    id: 3,
    category: "backend",
    image: Image3,
    title: "Food Allergen Detector",
    desc: "Engineered a cross-platform mobile application (IOS and Android) that scans product barcodes to detect food allergens and also provides an alert when an user preferences allergen is detected enhancing the overall user experience",
    demo: "http://egatortutorials.com",
    technologies_used: "JavaScript, React Native, Barcode Scanning API, Firebase",
    github: "https://github.com/Adarsha-1/National-Park-Tour-Planning",
  },
  {
    id: 4,
    category: "backend",
    image: Image3,
    title: "PlateMate",
    desc: "Developed a comprehensive Web Based application where users can discover, publish, and share cooking recipes, specifically designed to assist students abroad in learning to cook delicious meals.",
    demo: "http://egatortutorials.com",
    technologies_used: "JavaScript, React, Java, SpringBoot, PostgreSQL",
    github: "https://github.com/Adarsha-1/PlateMate-Cooking-Recipe",
  },
  {
    id: 5,
    category: "backend",
    image: Image4,
    title: "Home Credit Default Risk",
    desc: "The project is based on the Home Credit Default Risk (HCDR) Kaggle Competition. The goal of this project is to predict whether or not a client will repay a loan. In order to make sure that people who struggle to get loans due to insufficient or non-existent credit histories have a positive loan experience, Home Credit makes use of a variety of alternative data--including telco and transactional information--to predict their clients' repayment abilities.",
    demo: "http://egatortutorials.com",
    technologies_used: "Machine Learning, python, numpy, pandas, sklearn, kaggle",
    github: "https://github.com/Adarsha-1/Home-Credit-Default-Risk",
  },
  {
    id: 6,
    category: "backend",
    image: Image5,
    title: "Lung cancer detection using boosted neural network",
    desc: "Developed a machine learning model to classify patients for lung cancer detection, achieving 90% accuracy and reduced false positives. Trained on Thoracic surgery data",
    demo: "http://egatortutorials.com",
    technologies_used: "Python, TensorFlow, scikit-learn",
    github: "https://github.com/Adarsha-1/my-react-portfolio",
  },
];

export default data;
