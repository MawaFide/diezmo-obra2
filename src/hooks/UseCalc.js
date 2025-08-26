import { useState } from "react";
const valorInitial = {
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
    escalap: "",
    porcientop: "",
};

export const UseCalc = (initialValue = {}) => {
    const [obtiendo, setObtiendo] = useState(initialValue);
    const [valor, setValor] = useState(valorInitial);
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
        escalar: "",
        porcientor: "",
    });

    const handleAdd = () => {
        setObtiendo(initialValue);
    };
    const handelResetValo = () => {
        setValor(valorInitial);
    };

    const handleCalc = () => {
        // escala1
        if (obtiendo.entrada >= 300 && obtiendo.entrada <= 4500) {
            setValor({
                ...valor,
                obrap: (valor.obrap = (obtiendo.entrada * 10) / 100),
                escalap: (valor.escalap = 1),
                porcientop: (valor.porcientop = "10%"),
                pastorp: (valor.pastorp = 2100),
                pastorap: (valor.pastorp = 0),
                aportep: (valor.aportep = (obtiendo.pastor * 10) / 100),
            });

            setResultado({
                ...resultado,
                fondor: (resultado.fondor = obtiendo.fondo),
                entradar: (resultado.entradar =
                    parseInt(obtiendo.fondo) + parseInt(obtiendo.entrada)),
                obrar: (resultado.obrar =
                    parseInt(resultado.entradar) - parseInt(valor.obrap)),
                    pastorr: resultado.pastorr= parseInt(resultado.obrar) - parseInt(valor.pastorp),
                    pastorar: resultado.pastorar= parseInt(resultado.pastorr) - parseInt(valor.pastorap),
            });
        }
        // escala2
        if (obtiendo.entrada >= 4501 && obtiendo.entrada <= 6000) {
            setValor({
                ...valor,
                obrap: (valor.obrap = (obtiendo.entrada * 11) / 100),
                escalap: (valor.escalap = 2),
                porcientop: (valor.porcientop = "11%"),
                pastorp: (valor.pastorp = 3000),
                pastorap: (valor.pastorp = 0),
                aportep: (valor.aportep = (obtiendo.pastor * 10) / 100),
            });
            setResultado({
                ...resultado,
                fondor: (resultado.fondor = obtiendo.fondo),
                entradar: (resultado.entradar =
                    parseInt(obtiendo.fondo) + parseInt(obtiendo.entrada)),
                obrar: (resultado.obrar =
                    parseInt(resultado.entradar) - parseInt(valor.obrap)),
            });
        }
        if (obtiendo.entrada >= 6001 && obtiendo.entrada <= 8000) {
            setValor({
                ...valor,
                obrap: (valor.obrap = (obtiendo.entrada * 12) / 100),
                escalap: (valor.escalap = 3),
                porcientop: (valor.porcientop = "12%"),
                pastorap: (valor.pastorap = 2100),
                pastorp: (valor.pastorp = 2100),
                aportep: (valor.aportep = (obtiendo.pastor * 10) / 100),
            });
        }
        if (obtiendo.entrada >= 8001 && obtiendo.entrada <= 10000) {
            setValor({
                ...valor,
                obrap: (valor.obrap = (obtiendo.entrada * 13) / 100),
                escalap: (valor.escalap = 4),
                porcientop: (valor.porcientop = "13%"),
                pastorap: (valor.pastorap = 2500),
                pastorap: (valor.pastorp = 2500),
                aportep: (valor.aportep = (obtiendo.pastor * 10) / 100),
            });
        }
        if (obtiendo.entrada >= 10001 && obtiendo.entrada <= 15000) {
            setValor({
                ...valor,
                obrap: (valor.obrap = (obtiendo.entrada * 14) / 100),
                escalap: (valor.escalap = 5),
                porcientop: (valor.porcientop = "14%"),
                pastorap: (valor.pastorap = 3000),
                pastorp: (valor.pastorp = 3000),
                aportep: (valor.aportep = (obtiendo.pastor * 10) / 100),
            });
        }
        if (obtiendo.entrada >= 15001 && obtiendo.entrada <= 20000) {
            setValor({
                ...valor,
                obrap: (valor.obrap = (obtiendo.entrada * 15) / 100),
                escalap: (valor.escalap = 6),
                porcientop: (valor.porcientop = "15%"),
                pastorap: (valor.pastorap = 4500),
                pastorp: (valor.pastorp = 4500),
                aportep: (valor.aportep = (obtiendo.pastor * 10) / 100),
            });
        }
        if (obtiendo.entrada >= 20001 && obtiendo.entrada <= 30000) {
            setValor({
                ...valor,
                obrap: (valor.obrap = (obtiendo.entrada * 16) / 100),
                escalap: (valor.escalap = 7),
                porcientop: (valor.porcientop = "16%"),
                pastorap: (valor.pastorap = 5500),
                pastorap: (valor.pastorp = 5500),
                aportep: (valor.aportep = (obtiendo.pastor * 10) / 100),
            });
        }
        if (obtiendo.entrada >= 30001 && obtiendo.entrada <= 40000) {
            setValor({
                ...valor,
                obrap: (valor.obrap = (obtiendo.entrada * 17) / 100),
                escalap: (valor.escalap = 8),
                porcientop: (valor.porcientop = "17%"),
                pastorap: (valor.pastorap = 6500),
                pastorap: (valor.pastorp = 6500),
                aportep: (valor.aportep = (obtiendo.pastor * 10) / 100),
            });
        }
        if (obtiendo.entrada >= 40001 && obtiendo.entrada <= 60000) {
            setValor({
                ...valor,
                obrap: (valor.obrap = (obtiendo.entrada * 18) / 100),
                escalap: (valor.escalap = 9),
                porcientop: (valor.porcientop = "18%"),
                pastorap: (valor.pastorap = 8000),
                pastorap: (valor.pastorp = 8000),
                aportep: (valor.aportep = (obtiendo.pastor * 10) / 100),
            });
        }
        if (obtiendo.entrada >= 60001 && obtiendo.entrada <= 100000) {
            setValor({
                ...valor,
                obrap: (valor.obrap = (obtiendo.entrada * 19) / 100),
                escalap: (valor.escalap = 10),
                porcientop: (valor.porcientop = "19%"),
                pastorap: (valor.pastorap = 10000),
                pastorap: (valor.pastorp = 10000),
                aportep: (valor.aportep = (obtiendo.pastor * 10) / 100),
            });
        }
        if (obtiendo.entrada >= 100001) {
            setValor({
                ...valor,
                obrap: (valor.obrap = (obtiendo.entrada * 20) / 100),
                escalap: (valor.escalap = 11),
                porcientop: (valor.porcientop = "20%"),
                pastorap: (valor.pastorap = 12000),
                pastorap: (valor.pastorp = 12000),
                aportep: (valor.aportep = (obtiendo.pastor * 10) / 100),
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

    // const handleResult = () => {
    //     setResultado({
    //         fondor: obtiendo.fondo,
    //         entradar: parseInt(obtiendo.entrada) + parseInt(obtiendo.fondo),
    //         obrar: parseInt(),
    //         pastorr: 0,
    //         pastorar: 0,
    //         aporter: 0,
    //         ayudar: 0,
    //         misionesr: 0,
    //         caballerosr: 0,
    //         jovenesr: 0,
    //         otrosr: 0,
    //     });
    // };

    return {
        obtiendo,
        valor,
        resultado,
        handleAdd,
        handleCalc,
        handelResetValo,
    };
};
