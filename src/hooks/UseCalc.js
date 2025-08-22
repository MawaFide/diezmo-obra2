import { useState } from "react";

export const UseCalc = (initialValue = {}) => {
    const [obtiendo, setObtiendo] = useState(initialValue);
    const [valor, setValor] = useState({
        fondop: 0,
        entradap: 0,
        obrap: 0,
        pastorp: 0,
        pastorap: 0,
        aportep: 0,
        ayudap: 0,
        misionesp: 0,
        caballerosp: 0,
        jovenesp: 0,
        otrosp: 0,
    });
    const [resultado, setResultado] = useState({
        fondor: 0,
        entradar: 0,
        obrar: 0,
        pastorr: 0,
        pastorar: 0,
        aporter: 0,
        ayudar: 0,
        misionesr: 0,
        caballerosr: 0,
        jovenesr: 0,
        otrosr: 0,
    });

    const handleAdd = () => {
        setObtiendo(initialValue);
    };

    const handleCalc = () => {
        if (obtiendo.entrada >= 300 && obtiendo.entrada <= 4500) {
            setValor({
                ...valor,
                obrap:valor.obrap = (obtiendo.entrada * 10) / 100,
                   
            });
         
            
        }
        // setValor({
        //     fondop: obtiendo.fondo,
        //     entradap: obtiendo.entrada,
        //     obrap: obrap,
        //     pastorp: 0,
        //     pastorap: 0,
        //     aportep: 0,
        //     ayudap: 0,
        //     misionesp: 0,
        //     caballerosp: 0,
        //     jovenesp: 0,
        //     otrosp: 0,
        // });
    };

    const handleResult = () => {
        setResultado({
            fondor: obtiendo.fondo,
            entradar: parseInt(obtiendo.entrada) + parseInt(obtiendo.fondo),
            obrar: parseInt(),
            pastorr: 0,
            pastorar: 0,
            aporter: 0,
            ayudar: 0,
            misionesr: 0,
            caballerosr: 0,
            jovenesr: 0,
            otrosr: 0,
        });
    };

    return {
        obtiendo,
        valor,
        resultado,
        handleAdd,
        handleCalc,
        handleResult,
    };
};
