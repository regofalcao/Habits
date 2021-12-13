import {Conteiner, 
        CardConteiner, 
        IconConteiner, 
        BodyConteiner,
        ConteinerDiscription,
        Bar,
        ProgressBar,
        CheckinConteiner,
        Name,
        Category} from "./styled";
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import SkateboardingIcon from '@mui/icons-material/Skateboarding';
import IcecreamIcon from '@mui/icons-material/Icecream';
import HailIcon from '@mui/icons-material/Hail';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const CardHabits = ({habits}) => {


    return(
        <Conteiner>
            {habits.map((item, index) => (
                < CardConteiner key = {index}>
                    <IconConteiner category = {item.category} >
                        {
                        item.category.toLocaleLowerCase() === "sáude" ?
                            <VolunteerActivismIcon/> : 
                        item.category.toLocaleLowerCase() === "esporte" ?
                            <SkateboardingIcon/> :
                        item.category.toLocaleLowerCase() === "lazer" ?
                            <IcecreamIcon/> :
                        item.category.toLocaleLowerCase() === "trabalho" ?
                            <HailIcon/> : <QuestionMarkIcon/>                            
                            }
                    </IconConteiner>

                    <BodyConteiner>
                        <ConteinerDiscription>
                            <div>
                                <Name>{item.title}</Name>
                                <Category   category = {item.category} >
                                    {item.category}
                                </Category>
                            </div>
                            <CheckinConteiner category = {item.category}  >
                                <CheckCircleIcon/>
                            </CheckinConteiner>
                        </ConteinerDiscription>
                        <Bar>
                            <ProgressBar    progress = {item.how_much_achieved} 
                                            category = {item.category}>
                                <p>{item.how_much_achieved}%</p>
                            </ProgressBar>
                        </Bar>
                    </BodyConteiner>
                </CardConteiner>
            ))}
        </Conteiner>
    )
};

export default CardHabits;