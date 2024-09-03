import { Link } from 'react-router-dom';
import { useRef } from 'react';

export const Dashboard = () => {

  const counterRef = useRef({counter: 0});



  return(
    <div>
      <p>Dashboard</p>

      <p>Contador: {counterRef.current.counter}</p>
      <button onClick={() => counterRef.current.counter++}>Aumentar +1</button>
      
      <br />
      <br />
      <Link to="/entrar">login</Link>
    </div>
  );
}

