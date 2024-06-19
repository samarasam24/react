import { ContextProvide } from "./ContextProvider";
import { ContextForm } from "./Form";
import { ContextTable } from "./Table";

export function ContextApp() {
    return(
        <ContextProvide>
            <ContextForm/>
            <ContextTable/>
        </ContextProvide>
    );
};