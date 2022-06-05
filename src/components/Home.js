import classes from "./Home.module.css"
import {FaLongArrowAltRight} from "react-icons/fa";

import {useState} from "react";

function Home() {
    const [functionNumber, setFunctionNumber] = useState();
    const [result, setResult] = useState();
    const [inputValue, setInputValue] = useState();
    const [error, setError] = useState();


    const handleChange = (e) => {
        setError();
        setInputValue(e.target.value);
    }

    const handleCalculate = (functionNumber) => {
        switch (functionNumber) {
            case 1:
                setResult(inputValue * 3);
                break
            case 2:
                setResult(inputValue * inputValue);
                break
            case 3:
                if (inputValue < 0) {
                    setError("Errore, per questa funzione l'input non può essere negativo");
                } else {
                    setResult(Math.sqrt(inputValue));
                }
                break
            case 4:
                if (inputValue == 0) {
                    setError("Errore, per questa funzione l'input non può essere uguale a zero");
                } else {
                    setResult(1 / inputValue);
                }
                break
            default:
                setError("Errore, devi prima selezionare una funzione");

        }
    }

    return (
        <>
            <div className={"p-2"}>
                <div className={"d-flex"}>
                    <div className="form-check m-2">
                        <input onChange={() => setFunctionNumber(1)} className="form-check-input" type="radio"
                               name="exampleRadios" id="exampleRadios2"
                               value="option2"/>
                        <label className="form-check-label" htmlFor="exampleRadios2">
                            1
                        </label>
                    </div>
                    <div className="form-check m-2">
                        <input onChange={() => setFunctionNumber(2)} className="form-check-input" type="radio"
                               name="exampleRadios" id="exampleRadios2"
                               value="option2"/>
                        <label className="form-check-label" htmlFor="exampleRadios2">
                            2
                        </label>
                    </div>
                    <div className="form-check m-2">
                        <input onChange={() => setFunctionNumber(3)} className="form-check-input" type="radio"
                               name="exampleRadios" id="exampleRadios2"
                               value="option2"/>
                        <label className="form-check-label" htmlFor="exampleRadios2">
                            3
                        </label>
                    </div>
                    <div className="form-check m-2">
                        <input onChange={() => setFunctionNumber(4)} className="form-check-input" type="radio"
                               name="exampleRadios" id="exampleRadios2"
                               value="option2"/>
                        <label className="form-check-label" htmlFor="exampleRadios2">
                            4
                        </label>
                    </div>
                </div>

                <div
                    className={`mt-2 d-flex flex-wrap flex-sm-nowrap align-items-center justify-content-center  rounded ${classes.box} p-5`}>
                    <div>
                        <input type={"number"} onChange={(e) => handleChange(e)} value={inputValue}
                               className={`form-control ${classes.inputValue}`}/>
                        <h4 className={"text-center mt-3 text-white text-nowrap"}>Inserire un numero</h4>
                    </div>
                    <div className={` ${classes.calc} `}>
                        <div className={"text-center d-none d-sm-block"}>
                            <FaLongArrowAltRight color={"white"} size={50}/>
                        </div>
                        <button onClick={() => handleCalculate(functionNumber)} className={"btn btn-dark "}>Cliccare
                        </button>
                    </div>
                    <div className={""}>
                        <input disabled value={result} className={`form-control ${classes.inputValue}`}/>
                        <h4 className={"text-center mt-3 text-white"}>Risultato</h4>
                    </div>

                </div>


            </div>
            {error &&
                <div style={{top: 0}}
                     className={"d-flex align-items-center justify-content-center position-absolute w-100"}>
                    <div className={"d-inline-flex bg-danger p-2 mt-2 rounded text-white"}>
                        <h4>{error}</h4>
                    </div>
                </div>
            }
        </>
    )
}

export default Home