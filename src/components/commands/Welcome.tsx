import {
  Cmd,
  HeroContainer,
  PreImg,
  PreName,
  PreNameMobile,
  PreWrapper,
  Seperator,
} from "../styles/Welcome.styled";

const Welcome: React.FC = () => {
  return (
    <HeroContainer data-testid="welcome">
      <div className="info-section">
        <PreName>
          {`        
           ######   ######   #####    ##  ##   ##  ##   ##  ##   ##         ##               ####      ##      ####   
             ##     ##       ##  ##   ##  ##   ## ##    ##  ##   ##        ####             ##  ##    ####      ##    
             ##     ##       ##  ##   ##  ##   ####     ##  ##   ##       ##  ##            ##       ##  ##     ##    
             ##     ####     #####    ##  ##   ###      ##  ##   ##       ######             ####    ######     ##    
             ##     ##       ####     ##  ##   ####     ##  ##   ##       ##  ##                ##   ##  ##     ##    
             ##     ##       ## ##    ##  ##   ## ##    ##  ##   ##       ##  ##            ##  ##   ##  ##     ##    
             ##     ######   ##  ##    ####    ##  ##    ####    ######   ##  ##             ####    ##  ##    ####  
          `}  
        </PreName>
        <PreWrapper>
          <PreNameMobile>
            {`
 ######   ######   #####    ##  ##   ##  ##   ##  ##   ##         ##               ####      ##      ####   
   ##     ##       ##  ##   ##  ##   ## ##    ##  ##   ##        ####             ##  ##    ####      ##    
   ##     ##       ##  ##   ##  ##   ####     ##  ##   ##       ##  ##            ##       ##  ##     ##    
   ##     ####     #####    ##  ##   ###      ##  ##   ##       ######             ####    ######     ##    
   ##     ##       ####     ##  ##   ####     ##  ##   ##       ##  ##                ##   ##  ##     ##    
   ##     ##       ## ##    ##  ##   ## ##    ##  ##   ##       ##  ##            ##  ##   ##  ##     ##    
   ##     ######   ##  ##    ####    ##  ##    ####    ######   ##  ##             ####    ##  ##    ####  
 
          `}
          </PreNameMobile>
        </PreWrapper>
        <div>Welcome to my terminal portfolio.
          Just try it..
        </div>
        <Seperator>----------------------------------------------</Seperator>
        <div>
          For a list of available Commands, type `<Cmd>help</Cmd>`.
        </div>
      </div>
      <div className="illu-section">
        <PreImg>
          {`
              ~7~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
              ~7^^^^^^^^^^^^~7?JJJJJJ?7~^^^^^^^^^^^^~!
              ~7^^^^^^^^^^!JPPPPPPPPPPP5Y!^^^^^^^^^^~!
              ~7^^^^^^^^^!PGGGGPPPP555PPGY^^^^^^^^^^~!
              ~7^^^^^^^^^5BBG5J????7??J5GP!^^^^^^^^^!!
              ~7^~~~^~~^^YBGY??7777777?JGG7^^^^^^^^^!!
              ~7^~~~~~~~^7BGYYYYJ??JYYJ?PP~^^^^^^^^^!!
              !?^~~~~~~~~!55?JJ???7?????YJ!^^^^^^^^^!!
              !?~~~~~~~~~~?5??7?J???777?J7~~~~~~~~~^!!
              !7~~~~~~~~~~~?Y??JJ????77J!~~~~~~~~~~^!!
              !7~~~~~~~~~~~~J5J??????JY?~~~~~~~~~~~^!!
              !7~~~~~~~~~~~^7PPPP5555YY!^~~~~~~~~~~^!7
              !7~~~~~~~~~~~755JYYYYJ??J5!~~~~~~~~~~^!7
              !7~~~~~~~~~!?GPJ?????777YBG5JJ7!~~^^~^!7
              !7~~~~~!?Y5PB&#57?7?77??B##BGGPP5J?7!~!7
              !7~?J5PBBBBBBBB#G5?!?5GGGGGPPPPGPGGGPYJ7
              75GB#BGGGPGPP5555PPYGGPP55555PPPPGGPPGP7
              7BGGGGGGPPP5555P55P5555555555555GPP5GG57
              7BGBGPP55555555P5PP55555Y555YYYY5P5PGPP7
              7BB##GPPP555555P55PP5PP55555Y555555GPGG7
              !PP5PP5555YYYYYYYYYYYY5YYYYYYYY5YYY5555!  
         `}
        </PreImg>
      </div>
    </HeroContainer>
  );
};

export default Welcome;
