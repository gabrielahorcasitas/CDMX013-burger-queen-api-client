import {useNavigate} from 'react-router-dom'

function Admin() {
  let navigate = useNavigate();
  function handleNavigate() {
   navigate('/');
  }

  return (
    <div className="admin">
     <h1>Admin view</h1>
     <button className='goBack' onClick= {handleNavigate}>Log Out</button>
    </div>
  );
}

export default Admin;