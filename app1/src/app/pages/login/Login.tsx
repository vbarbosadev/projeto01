import { useEffect, useMemo, useState } from "react";

export const Login = () => {
  

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    /*if (window.confirm('Voce é homem?')){
      console.log("Homem")
    } else {
      console.log("Mulher")
  
    }*/
  }, []);

  useEffect(() => {
    console.log(email)
  }, [email]);

  useEffect(() => {
    console.log(password)
  }, [password]);


  /* usar useEffect para algo que só precisa ser chamado uma vez no código, como uma api com dados de usuario 

  dependecies [x] = quando x for alterado, o codigo dentro do useEffect roda
  */

  const emailLength = useMemo(() => {
    console.log("rodou")
    return email.length * 10;
  }, [email.length]);
 

  const handlerEntrar = () => {
    console.log(email)
    console.log(password)
  }




  return(
      <div>
        <form>
          <p>Quantidade de caracteres do email: {emailLength}</p>

          <label>
            <span>Email</span>
            <input value={email} onChange={e => setEmail(e.target.value)}/>
          </label>

          <label>
            <span>Senha</span>
            <input type="password" value={password} onChange={e => setPassword(e.target.value)}/>
          </label>

          <button type="button" onClick={handlerEntrar}>
            Entrar
          </button>
        </form>
      </div>
  );
}