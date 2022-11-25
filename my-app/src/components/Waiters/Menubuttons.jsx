import {useState} from 'react';
import { useSearchParams } from 'react-router-dom';
import bfClick from '../../images/bfClick.png'
import bfNoClick from '../../images/bfNoClick.png'
import dinnerClick from '../../images/dinnerClick.png'
import dinnerNoClick from '../../images/dinnerNoClick.png'

function Menubuttons (){
    const [isBreakfast, setBreakfast ] = useState(true);
    const [searchParams, setSearchParams] = useSearchParams();
    return (
        <div className="menu-hour-bottons">
        <div className= {isBreakfast ? 'menu-bf-box': 'menu-bf-box-off'}>
            <img 
            className="menu-bf"
            src= {isBreakfast ? bfClick : bfNoClick}
            alt="Breakfast-button" 
            onClick = {()=> {
                !isBreakfast ? setSearchParams("type=breakfast") : setSearchParams("type=dinner");
                setBreakfast(prevmode => !prevmode)
            }}>
            
            </img>
            <label className={isBreakfast ? 'bf-letters' : 'bf-letters-off'}>Breakfast</label>
        </div>
        <div className={!isBreakfast ? 'menu-dinner-box': 'menu-dinner-box-off'}>
            <img 
            className="menu-dinner"
            src={!isBreakfast ? dinnerClick : dinnerNoClick}
            alt="Dinner-button"
            onClick =  {()=> {
                !isBreakfast ? setSearchParams("type=breakfast") : setSearchParams("type=dinner");
                setBreakfast(prevmode => !prevmode)
            }}>
            </img>
            <label className={!isBreakfast ? 'dinner-letters' : 'dinner-letters-off'}>Dinner</label>

        </div>
    </div>
    )
}

export default Menubuttons;