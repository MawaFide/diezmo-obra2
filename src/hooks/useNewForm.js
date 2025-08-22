import { useState } from "react";

export const useNewForm = (initialValue = {}) => {
    const [datos, setDatos] = useState(initialValue);

    const handleChange = ({ target }) => {
        const { name, value } = target;

        setDatos({
            ...datos,
            [name]: value,
        });
    };

    const handleReset = () => {
        setDatos(initialValue);
    };

    return {
        ...datos,
        datos,
        handleChange,
        handleReset,
    };
};
