import SectionWrapper from "../generics/SectionWrapper";
import HomePageButton from "../HomePageButton";
import MySkillsButton from "../MySkillsButton";
import ProjectsButton from "../ProjectsButton";

const Landing = () => {
  return (
    <SectionWrapper>
      <HomePageButton />
      <MySkillsButton />
      <ProjectsButton />
    </SectionWrapper>
  );
};

export default Landing;
