import abir from "../../../../public/Assets/banner.jpeg"
import { Typewriter } from 'react-simple-typewriter'

const AboutMe = () => {
  return (
    <div className="my-10">
        <div className="text-center mb-5">
            <h2 className="text-4xl font-semibold border-b-2 inline px-5 py-1">About Me</h2>
            
        </div>
      <div className="flex justify-between gap-10 p-10 px-20 items-center">
        <div className="w-4/12">
            <img src={abir} alt="" />
        </div>
        <div className="divider lg:divider-horizontal"></div> 
        <div className="w-6/12 space-y-2">
            <h3 className="text-4xl font-bold">I am Abir Mahmud</h3>
            <h1 className="text-2xl">
       
        <span style={{ color: 'tomato', fontWeight: 'bold' }}>
          {/* Style will be inherited from the parent element */}
          <Typewriter
            words={['A Front End Web Developer...', 'Comfortable With Backend...', 'A Quick Learner...', 'Who Loves To Learn And Explore..!']}
            loop={5}
            cursor
            cursorStyle='|'
            typeSpeed={80}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </span>
      </h1>
            <p className="font-semibold text-justify">Greetings, I am a meticulous Front-End Developer distinguished by proficiency in React.js, Tailwind, Firebase, Node.js, Express.js, and MongoDB. My dedication is centered on the creation of precise and visually compelling user interfaces that harmoniously integrate artistic flair with practical functionality. Demonstrating a keen attention to detail, I excel in transforming conceptualizations into immersive digital experiences, overseeing the entire developmental lifecycle from ideation to deployment. I am enthusiastic about collaborating to shape the future through innovative and impactful digital solutions. Let us embark on this journey together!</p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
