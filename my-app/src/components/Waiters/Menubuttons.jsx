import {useState} from 'react';
import bfClick from '../../images/bfClick.png'
import bfNoClick from '../../images/bfNoClick.png'
import dinnerClick from '../../images/dinnerClick.png'
import dinnerNoClick from '../../images/dinnerNoClick.png'

function Menubuttons (){
    const [image, setImage ] = useState('false');
    return (
        <div className="menu-hour-bottons">
        <div className= {image ? 'menu-bf-box': 'menu-bf-box-off'}>
            <img 
            className="menu-bf"
            src= {image ? bfClick : bfNoClick}
            alt="Breakfast-button" 
            onClick = {()=> setImage(prevmode => !prevmode)}>
            
            </img>
            <label className={image ? 'bf-letters' : 'bf-letters-off'}>Breakfast</label>
        </div>
        <div className={!image ? 'menu-dinner-box': 'menu-dinner-box-off'}>
            <img 
            className="menu-dinner"
            src={!image ? dinnerClick : dinnerNoClick}
            alt="Dinner-button"
            onClick = {()=> setImage(prevmode => !prevmode)}>
            </img>
            <label className={!image ? 'dinner-letters' : 'dinner-letters-off'}>Dinner</label>

        </div>
    </div>
    )
}

export default Menubuttons;