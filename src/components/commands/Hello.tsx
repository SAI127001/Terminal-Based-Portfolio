import {
    AboutWrapper,
    HighlightAlt,
    HighlightSpan,
} from "../styles/About.styled";

import {
    Cmd
  } from "../styles/Welcome.styled";

const Hello: React.FC = () => {

    return (
        <AboutWrapper>
            <p>

                <HighlightSpan> Hello, my name is Terukula Sai, what can I do for you ? </HighlightSpan><br />
                For a list of available Commands, type `<Cmd>help</Cmd>`.

            </p>
        </AboutWrapper>
    );
};

export default Hello;
