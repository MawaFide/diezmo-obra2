import React from "react";

export const SalarioNomina = () => {
    return (
        <div className="py-4">
            <h2 className="text-center text-violet-700">Salario De Nomina</h2>
            <div className="grid grid-cols-5 p-4">
            <div className=" border border-r-0 border-y-violet-500 border-l-violet-500">
                Nombre
            </div>
            <div className=" border border-r-0 border-y-violet-500 border-l-violet-500">
                Salario
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
            <div className="text-end">7</div>
            <div className="text-end">8</div>
            <div className="text-end">9</div>
            <div className="text-end">10</div>
             <div className="">Pastora</div>
            <div className="text-end">7</div>
            <div className="text-end">8</div>
            <div className="text-end">9</div>
            <div className="text-end">10</div>
        </div>
        </div>
        
    );
};
