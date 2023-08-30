import {
    AboutWrapper,
    HighlightSpan,
} from "../styles/About.styled";


const Call: React.FC = () => {
    return (
        <AboutWrapper data-testid="about">
            <p>
                <HighlightSpan>My Phone Number</HighlightSpan> :
            </p>
            <p>
                +91 9987886552
            </p>
        </AboutWrapper>
    );
};

export default Call;
