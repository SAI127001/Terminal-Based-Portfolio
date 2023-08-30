import { EduIntro, EduList } from "../styles/Education.styled";
import { Wrapper } from "../styles/Output.styled";

const Education: React.FC = () => {
  return (
    <Wrapper data-testid="education">

      <EduIntro>Here is my education background :</EduIntro>

      {eduBg.map(({ title, desc }) => (

        <EduList key={title}>
          <div className="title">{title}</div>

          <div className="desc">{desc}</div>
        </EduList>
      ))}
    </Wrapper>
  );
};

const eduBg = [

  {
    title: "Bsc.IT",
    desc: "Mumbai University | 2021 ~ 2024",
  },
  
];

export default Education;
