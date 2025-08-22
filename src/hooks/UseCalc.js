import { useState } from "react";

export const UseCalc = (initialValue = {}) => {
    const [resultado, setResultado] = useState(initialValue);

    const handleAdd = () => {
        setResultado(initialValue);
    };

    console.log(resultado);

    return {
        resultado,
        handleAdd,
    };
};
