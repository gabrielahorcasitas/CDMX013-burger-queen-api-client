import Menubuttons from "./Menubuttons";

function Header ({text, setText}){

   /* if(onClick en img de botones de hora){
    cambiar src
   }*/
   const handleInputChange = ({target}) => {
    setText(target.value)
   }

    return (
        <>
            <header>
                <div className="choose-table-box">
                    <label className="choose-table-letter">Table: </label>
                    <input
                        className="input-table"
                        type="number"
                        value={text} onChange={handleInputChange}
                        >  
                    </input>
                </div>
                <Menubuttons/>
                <label className="role-letters">Waiters </label>;
            </header>
        </>
    )
}

export default Header;