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
import api from "../../services/api";
import { useState } from "react";

const CardHabits = ({habits}) => {
    
    const token = useState(JSON.parse(localStorage.getItem("token")) || "");

    const updateHowMuchAchieved = (item) => {
        let howMuch = 0;

        item.frequency.toLocaleLowerCase() === "diária" ? 
        howMuch = 3.34 : item.frequency.toLocaleLowerCase() === "mensal" ?
        howMuch = 8.34 : item.frequency.toLocaleLowerCase() === "semanal" ? 
        howMuch = 4.24 : item.frequency.toLocaleLowerCase() === "anual" ? 
        howMuch = 20 : howMuch = 10;
        
        if (item.how_much_achieved+howMuch >= 100) { 
            console.log("100%")
            item.how_much_achieved = 100
            api.patch(`/habits/${item.id}`,
                {   
                    achieved: true,
                    how_much_achieved: 100
                },
                {
                    Authorization: `Bearer ${token}`
                })
                .then(response => console.log(response))
            } if (item.how_much_achieved+howMuch < 100) {
                console.log("ainda não")
                item.how_much_achieved = item.how_much_achieved + howMuch
                api.patch(`/habits/${item.id}`,
                    {   
                        how_much_achieved: item.how_much_achieved+howMuch
                    },
                    {
                        Authorization: `Bearer ${token}`
                    })
                    .then(response => console.log(response)) 
                }

    }

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
                            <CheckinConteiner   category = {item.category} 
                                                onClick = {() => updateHowMuchAchieved(item)} >
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