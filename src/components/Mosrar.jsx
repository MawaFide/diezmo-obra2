import { UseCalc } from "../hooks/UseCalc";

export const Mosrar = () => {
    const { resultado, handleResult } = UseCalc();

    return (
        <>
            <h1>Resultdados</h1>
            <hr />
            <h1>{resultado}</h1>
            <h1>{}</h1>
            <h1>{}</h1>

            <button onClick={ handleResult}>uno</button>
            <button onClick={() => handleSumarValue2(2)}>dos</button>
            <button onClick={() => handleSumarValue3(3)}>tres</button>
        </>
    );
};
