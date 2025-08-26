import React from "react";
import { FormDiezmo } from "./components/FormDiezmo";
import { Mosrar } from "./components/Mosrar";

export const Diezmos = () => {
    return (
        <div className=' bg-violet-950  p-4'>
            <div className="container mx-auto max-w-lg bg-gray-200 mt-1 p-4 border-2 border-violet-700 rounded-lg">
                <h1 className=" text-violet-700 text-center">
                    Entrega a la Obra
                </h1>

                <FormDiezmo />
            </div>
        </div>
    );
};
