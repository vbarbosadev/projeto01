import { useEffect, useMemo, useState, useCallback, useRef } from "react";
import { redirect, Link } from "react-router-dom";
import { Dashboard } from "../dashboard/Dashboard";
import { InputLogin } from "./components/InputLogin";

export const Login = () => {
  const inputPasswordRef = useRef<HTMLInputElement>(null);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const emailLength = useMemo(() => {
    return email.length * 10;
  }, [email.length]);

  const handlerEntrar = useCallback(() => {
      console.log(email)
      console.log(password)

      if (inputPasswordRef.current !== null) {
          inputPasswordRef.current.focus()
      }
    
    }, [email, password]);


  return(
      <div>
        <form>
          <p>Quantidade de caracteres do email: {emailLength}</p>

          <InputLogin 
            label="Email"
            value={email}
            onChange={newValue => setEmail(newValue)}
            onPressEnter={() => inputPasswordRef.current?.focus()}
            />

        
          <InputLogin 
            type="password"
            label="Senha"
            value={password}
            onChange={newValue => setPassword(newValue)}
            />
        
          <button type="button" onClick={handlerEntrar}>
            Entrar
          </button>
          <p></p>
          <br />
          <Link to="/inicio">Inicio</Link>
        </form>
      </div>
  );
}