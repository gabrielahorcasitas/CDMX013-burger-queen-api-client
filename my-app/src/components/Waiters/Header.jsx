import bfClick from '../../images/bfClick.png'
import bfNoClick from '../../images/bfNoClick.png'
import dinnerClick from '../../images/dinnerClick.png'
import dinnerNoClick from '../../images/dinnerNoClick.png'

function Header(){

   /* if(onClick en img de botones de hora){
    cambiar src
   }*/
    return (
        <>
            <header>
                <div className="choose-table-box">
                    <label className="choose-table-letter">Table: </label>
                    <input
                        className="input-table"
                        type="text">
                    </input>
                </div>
                <div className="menu-hour-bottons">
                    <div className='menu-bf-box'>
                        <img 
                        className="menu-bf"
                        src= {bfClick}
                        alt="Breakfast-button">
                        </img>
                        <label className='bf-letters'>Breakfast</label>
                    </div>
                    <div className='menu-dinner-box'>
                        <img 
                        className="menu-dinner"
                        src={dinnerNoClick}
                        alt="Dinner-button">
                        </img>
                        <label className='dinner-letters'>Dinner</label>

                    </div>
                </div>
                <label className="role-letters">Waiters</label>;
            </header>
        </>
    )
}

export default Header;