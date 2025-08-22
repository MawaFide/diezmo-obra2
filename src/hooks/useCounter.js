import { useState } from "react";

export const useCounter = (initialValue = 1) => {
    const [contador, setContador] = useState(initialValue);

    const handleIncrement = (valor = 1) => {
        setContador(contador + valor);
    };
    const handleDecrement = (valor = 1) => {
        setContador(contador - valor);
    };
    const handleReset = () => {
        setContador(initialValue);
    };

    return {
        contador,
        handleIncrement,
        handleDecrement,
        handleReset,
    };
};
