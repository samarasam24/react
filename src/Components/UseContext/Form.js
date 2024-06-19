import { useContext } from "react";
import { ContextCreated } from "./ContextProvider";

export function ContextForm() {
    const value = useContext(ContextCreated);

    console.log(value);
    return(
        <form>
            <label>Name:</label>
            <input/>
            <label>Password:</label>
            <input/>
            <button>Submit</button>
        </form>
    );
};