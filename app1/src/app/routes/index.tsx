import { BrowserRouter, Route, Routes as Switch, Navigate } from "react-router-dom";

import { Dashboard, Login } from "../pages"; 

export const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/inicio" element={<Dashboard />} />
        <Route path="/entrar" element={<Login />}/>
        <Route path="*" element={<Navigate to="/inicio"/>} />

      </Switch>
    
    </BrowserRouter>
  );
}