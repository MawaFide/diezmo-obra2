import React from "react";

export const Escala = ({escala,porciento}) => {
    return (
        <>
            <div className="flex justify-around">
                <h2 className="text-violet-700">Escala: {escala}</h2>
                <h2 className="text-violet-700">Porciento: {porciento}</h2>
            </div>
           
        </>
    );
};
