import { BrowserRouter,Routes,Route, Navigate } from "react-router-dom";
import { Form } from "./Form";
import { Table } from "./Table";

export function UseStateApiApp() {
    return(
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Navigate to={'/form'}/>}/>
            <Route path='/form' element={<Form/>}/>
            <Route path="/table" element={<Table/>}/>
            <Route path="/form/:id" element={<Form/>}/>
        </Routes>
        </BrowserRouter>
    );
};