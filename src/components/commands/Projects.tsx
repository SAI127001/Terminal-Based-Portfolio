import { useContext, useEffect } from "react";
import {
  checkRedirect,
  getCurrentCmdArry,
  isArgInvalid,
} from "../../utils/funcs";
import {
  ProjectContainer,
  ProjectDesc,
  ProjectsIntro,
  ProjectTitle,
} from "../styles/Projects.styled";
import { termContext } from "../Terminal";
import Usage from "../Usage";


const Projects: React.FC = () => {
  const { arg, history, rerender } = useContext(termContext);

  /* ===== get current command ===== */
  const currentCommand = getCurrentCmdArry(history);

  /* ===== check current command is redirect ===== */
  useEffect(() => {
    if (checkRedirect(rerender, currentCommand, "projects")) {
      projects.forEach(({ id, url }) => {
        id === parseInt(arg[1]) && window.open(url, "_blank");
      });

    }
  }, [arg, rerender, currentCommand]);

  /* ===== check arg is valid ===== */
  const checkArg = () =>
    isArgInvalid(arg, "go", ["1", "2", "3", "4"]) ? (
      <Usage cmd="projects" />
    ) : null;

  return arg.length > 0 || arg.length > 2 ? (
    checkArg()
  ) : (
    <div data-testid="projects">

      <ProjectsIntro>
        “Talk is cheap. Show me the code”? I got you. <br />
        Here are some of my projects you shouldn't misss _
      </ProjectsIntro>
      {projects.map(({ id, title, desc }) => (
        <ProjectContainer key={id}>
          <ProjectTitle>{`${id}. ${title}`}</ProjectTitle>
          <ProjectDesc>{desc}</ProjectDesc>
        </ProjectContainer>
      ))}
      <Usage cmd="projects" marginY />
    </div>
  );
};

const projects = [

  {
    id: 1,
    title: "Decentalized Transaction application",
    desc: "This project is made using React-vite, solidity, tailwincss. It enable user to exchange Ehtereum from one address to another.",
    url: "https://github.com/SAI127001/Decentralized-Transaction-Application",
  },
  
  {
    id: 2,
    title: "QR Code Generator",
    desc: "Simple QR Generator is made using React, one can generate Qr by pasteing the link or entering the desire characters.",
    url: "https://github.com/SAI127001/Qr-Code-Generator",
  },
  {
    id: 3,
    title: "3D Earth Model",
    desc: "3D Earth in infinite space, made it using React + vite and 3Js. You can use it in your project as a module. Images used in this project are of large size, one can optimize it by compressing the size of the images.",
    url: "https://github.com/SAI127001/3D-Earth-using-React-and-Three-js",
  },
  {
    id : 4,
    title : "Ethical Hacker Portfolio",
    desc : "This portfolio is suitable for the person who are interested in ethical hacking. This project is created using HTML, CSS and JS. Easy to customize according to the preferences.",
    url : "https://github.com/SAI127001/Ethical-Hacker-Portfolio-template",
  },
  
];

export default Projects;
