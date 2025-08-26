import { useNewForm } from "../hooks/useNewForm";
import { UseCalc } from "../hooks/UseCalc";
import { Escala } from "./Escala";
import { SalarioNomina } from "./SalarioNomina";

export const FormDiezmo = () => {
    const {
        datos,
        handleChange,
        handleReset,
        fondo,
        entrada,
        obra,
        pastor,
        pastora,
        aporteI,
        ayudaI,
        misiones,
        caballeros,
        jovenes,
        otros,
    } = useNewForm({
        fondo: 0,
        entrada: 0,
        obra: 0,
        pastor: 0,
        pastora: 0,
        aporteI: 0,
        ayudaI: 0,
        misiones: 0,
        caballeros: 0,
        jovenes: 0,
        otros: 0,
    });
    const {
        obtiendo,
        valor,
        resultado,
        handleAdd,
        handleCalc,
        handleResult,
        handelResetValo,
    } = UseCalc(datos);

    const handleSubmit = (e) => {
        e.preventDefault();
        
        handleAdd();
        // console.log(resultado);
        // handelResetValo();
        handleCalc();

        handleResult();
    };

    return (
        <>
            <Escala escala={valor.escalap} porciento={valor.porcientop} />
            <form onSubmit={handleSubmit} className="mt-4 flex flex-col">
                <div className="flex justify-between  p-2">
                    <label className="w-30" htmlFor="Fondo">
                        Fondo Iglesia
                    </label>

                    <input
                        className="flex  border-2 border-violet-700 rounded-md focus:outline-violet-800 focus:p-1"
                        type="number"
                        placeholder="0"
                        name="fondo"
                        value={fondo}
                        onChange={handleChange}
                    />

                    <span>{fondo}</span>
                </div>
                <div className="flex justify-between  p-2">
                    <label className="w-30" htmlFor="entrada">
                        Entrada del mes
                    </label>

                    <input
                        className="flex  border-2 border-violet-700 rounded-md focus:outline-violet-800 focus:p-1"
                        type="number"
                        placeholder="0"
                        name="entrada"
                        value={entrada}
                        onChange={handleChange}
                    />

                    <span>{resultado.entradar}</span>
                </div>
                <div className="flex justify-between  p-2">
                    <label className="w-30" htmlFor="obra">
                        Asignacion a la Obra
                    </label>

                    <input
                        className="flex  border-2 border-violet-700 rounded-md focus:outline-violet-800 focus:p-1"
                        type="number"
                        placeholder="0"
                        name="obra"
                        value={valor.obrap}
                        onChange={handleChange}
                        disabled={true}
                    />

                    <span>{resultado.obrar}</span>
                </div>
                <div className="flex justify-between  p-2">
                    <label className="w-30" htmlFor="pastor">
                        Salario Pastor
                    </label>

                    <input
                        className="flex  border-2 border-violet-700 rounded-md focus:outline-violet-800 focus:p-1"
                        type="number"
                        placeholder="0"
                        name="pastor"
                        value={valor.pastorp}
                        onChange={handleChange}
                        disabled={true}
                    />

                    <span>{resultado.pastorr}</span>
                </div>
                <div className="flex justify-between  p-2">
                    <label className="w-30" htmlFor="pastora">
                        Salario Pastora
                    </label>

                    <input
                        className="flex  border-2 border-violet-700 rounded-md focus:outline-violet-800 focus:p-1"
                        type="number"
                        placeholder="0"
                        name="pastora"
                        value={valor.pastorap}
                        onChange={handleChange}
                        disabled={true}
                    />

                    <span>{resultado.pastorar}</span>
                </div>

                <div className="flex justify-between  p-2">
                    <label className="w-30" htmlFor="aporteI">
                        Aporte Iglesia
                    </label>

                    <input
                        className="flex  border-2 border-violet-700 rounded-md focus:outline-violet-800 focus:p-1"
                        type="number"
                        placeholder="0"
                        name="aporteI"
                        value={aporteI}
                        onChange={handleChange}
                    />

                    <span>{fondo}</span>
                </div>
                <div className="flex justify-between  p-2">
                    <label className="w-30" htmlFor="ayudaI">
                        Ayuda Iglesias
                    </label>

                    <input
                        className="flex  border-2 border-violet-700 rounded-md focus:outline-violet-800 focus:p-1"
                        type="number"
                        placeholder="0"
                        name="ayudaI"
                        value={ayudaI}
                        onChange={handleChange}
                    />

                    <span>{fondo}</span>
                </div>
                <div className="flex justify-between  p-2">
                    <label className="w-30" htmlFor="misiones">
                        Dpto Misiones
                    </label>

                    <input
                        className="flex  border-2 border-violet-700 rounded-md focus:outline-violet-800 focus:p-1"
                        type="number"
                        placeholder="0"
                        name="misiones"
                        value={misiones}
                        onChange={handleChange}
                    />

                    <span>{fondo}</span>
                </div>
                <div className="flex justify-between  p-2">
                    <label className="w-30" htmlFor="caballeros">
                        Damas y Caballeros
                    </label>

                    <input
                        className="flex  border-2 border-violet-700 rounded-md focus:outline-violet-800 focus:p-1"
                        type="number"
                        placeholder="0"
                        name="caballeros"
                        value={caballeros}
                        onChange={handleChange}
                    />

                    <span>{fondo}</span>
                </div>
                <div className="flex justify-between  p-2">
                    <label className="w-30" htmlFor="jovenes">
                        Jovenes
                    </label>

                    <input
                        className="flex  border-2 border-violet-700 rounded-md focus:outline-violet-800 focus:p-1"
                        type="number"
                        placeholder="0"
                        name="jovenes"
                        value={jovenes}
                        onChange={handleChange}
                    />

                    <span>{fondo}</span>
                </div>
                <div className="flex justify-between  p-2">
                    <label className="w-30" htmlFor="otros">
                        otros
                    </label>

                    <input
                        className="flex  border-2 border-violet-700 rounded-md focus:outline-violet-800 focus:p-1"
                        type="number"
                        placeholder="0"
                        name="otros"
                        value={otros}
                        onChange={handleChange}
                    />

                    <span>{fondo}</span>
                </div>

                {/* final */}
                <button
                    className="bg-violet-800 text-white border-2 border-violet-700 rounded-md "
                    onClick={handleAdd}
                >
                    Calcular
                </button>
            </form>
            <SalarioNomina />
        </>
    );
};
