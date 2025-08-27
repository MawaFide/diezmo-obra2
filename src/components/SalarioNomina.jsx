import React from "react";

export const SalarioNomina = ({pastorp, pastorap,aportep,iglesiap,}) => {
    return (
        <div className="py-4">
            <h2 className="text-center text-violet-700">Salario De Nomina</h2>
            <div className="grid grid-cols-5 p-4">
            <div className=" border border-r-0 border-y-violet-500 border-l-violet-500">
                Nombre
            </div>
            <div className=" border border-r-0 border-y-violet-500 border-l-violet-500">
                Salario de vengado
            </div>
            <div className=" border border-r-0 border-y-violet-500 border-l-violet-500">
                Aporte Obrero
            </div>
            <div className=" border border-r-0 border-y-violet-500 border-l-violet-500">
                Aporte Iglesia
            </div>
            <div className=" border  border-r-violet-500 border-y-violet-500 border-l-violet-500">
                Salario Neto
            </div>
            <div className="">Pastor</div>
            <div className="text-end">{pastorp}</div>
            <div className="text-end">{(pastorap*5) / 100}</div>
            <div className="text-end">{aportep}</div>
            <div className="text-end">{pastorap-(pastorap*5) / 100}</div>
             <div className="">Pastora</div>
            <div className="text-end">{pastorap}</div>
            <div className="text-end">{(pastorap*5) / 100}</div>
            <div className="text-end">{aportep}</div>
            <div className="text-end">{pastorap-(pastorap*5) / 100}</div>
        </div>
        </div>
        
    );
};
