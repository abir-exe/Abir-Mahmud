import AboutMe from "./AboutMe/AboutMe";
import Banner from "./Banner";
import Contact from "./Contact/Contact";
import Education from "./Education/Education";
import MySkills from "./MySkills/MySkills";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <AboutMe></AboutMe>
            <MySkills></MySkills>
            <Education></Education>
            <Contact></Contact>
        </div>
    );
};

export default Home;