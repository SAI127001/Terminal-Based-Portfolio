import { User, WebsiteName, Wrapper } from "./styles/TerminalInfo.styled";

const TermInfo = () => {
  return (
    <Wrapper>
      <User>Visitor</User>(@)<WebsiteName>Terukula Sai</WebsiteName>-[~/Sai] $
    </Wrapper>
  );
};

export default TermInfo;
