import {
  AboutWrapper,
  HighlightAlt,
  HighlightSpan,
} from "../styles/About.styled";

const About: React.FC = () => {
  return (
    <AboutWrapper data-testid="about">
      <p>
        Hi, I'm <HighlightSpan>Terukula Sai</HighlightSpan> !
      </p>

      <p>
        I'm <HighlightAlt>a Frontend Developer</HighlightAlt> and <HighlightAlt> Blockchain Programmer</HighlightAlt> based in Mumbai - Maharashtra
      </p>

      <p>
        I am passionate about writing codes and <br />
        developing web applications to solve real-life challenges. <br /><br />
        
        <HighlightSpan>" 𝒞ℴ𝒹ℯ 𝒾𝓈 ℒ𝒶𝓌 "</HighlightSpan>
      </p>
    </AboutWrapper>
  );
};

export default About;
