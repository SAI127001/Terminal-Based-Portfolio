import {
    AboutWrapper,
    HighlightAlt,
    HighlightSpan,
} from "../styles/About.styled";

const About: React.FC = () => {
    return (
        <AboutWrapper data-testid="about">
            <p>
                <HighlightSpan>My Skills</HighlightSpan> :
            </p>
            <p>
                <ul><li><h2>Programming Languages :</h2></li></ul>
                <ol>
                    <li>C++</li>
                    <li>Python</li>
                    <li>C Sharp</li>
                    <li>C</li>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>Soladity</li>
                    <li>Java</li>
                </ol>
                <ul><li><h2>Frameworks/Libraries</h2></li></ul>
                <ol>
                    <li>Django</li>
                    <li>ReactJS</li>
                    <li>Bootstrap</li>
                    <li>Tailwind CSS</li>
                    <li>.NET</li>
                </ol>
                <ul><li><h2>Database</h2></li></ul>
                <ol>
                    <li>MySQL</li>
                    <li>Mongo db</li>
                    <li>Oracle</li>
                </ol>
                <ul><li><h2>Tools</h2></li></ul>
                <ol>
                    <li>VS code</li>
                    <li>Git</li>
                    <li>Github</li>
                    <li>Gitlab</li>
                    <li>Netlify</li>
                    <li>ViteJS</li>
                </ol>
                <ul><li><h2>Testing</h2></li></ul>
                <ol>
                    <li>Selenium</li>
                </ol>
                <ul><li><h2>Others</h2></li></ul>
                <ol>
                    <li>Linux</li>
                    <li>Rasberry Pi</li>
                    <li>Arduino</li>
                </ol>
            </p>
        </AboutWrapper>
    );
};

export default About;

