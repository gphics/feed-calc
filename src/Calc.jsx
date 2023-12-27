import reducer from './reducer'
import Nav from './Nav'
import { useReducer, useState } from 'react'
import CalcForm from './CalcForm'
import ComputationInfo from './ComputationInfo'
import resultCalc from './helper/resultCalc'
import ResultInfo from './ResultInfo'
import { useEffect } from 'react'

const initialState = {
    seedName: {
        "value": "rice",
    },
    seedSize: {
        "value": 0,
    },
    seedPrice: {

        "value": 0
    },
    landSize: {
        value: 0
    },
    landPrice: {
        value: ""
    },
    fertilizerName: {
        "value": ""
    },
    fertilizerSize: {
        "value": 0
    },
    fertilizerPrice: {
        value: 0
    },
    herbicidePrice: {
        value: 0
    }

}
function Calc() {
    const [state, dispatch] = useReducer(reducer, initialState)
    const [showCompute, setShowCompute] = useState(false)
    const [finalResult, setFinalResult] = useState({})
    const [showResult, setShowResult] = useState(false)
    const StandarArr = [
        { name: 'name', input: "input", fertilizer: "fertilizer", output: "output" },
        { name: "rice", input: "3000kg", fertilizer: "200kg", output: "5000kg", },
        { name: "maize", input: "20000kg", fertilizer: "200kg", output: "35000kg", },
        { name: "cowpea", input: "1500kg", fertilizer: "200kg", output: "7500 kg", },
        { name: "sorghum", input: "750kg", fertilizer: "200kg", output: "1000kg", },
        { name: "millet", input: "450kg", fertilizer: "200kg", output: "1200kg", },
    ]
    function actDispatcher(actionType, payload) {
        dispatch({ type: actionType, payload })
    }

    const btnVal = showCompute ? "close" : "open"
    function overlayClick(e) {
        const overlay = document.querySelector(".result-info-overlay")
        if (overlay === e.target) setShowResult(false)
    }
    function submitHandler(e) {
        e.preventDefault()
        // console.log(state)
        // console.log(typeof (+state.fertilizerPrice.value))
        if (state.seedName.value === "rice") {
            const res = resultCalc({
                name: "rice",
                seedInput: state.seedSize.value,
                inputStandard: 3000,
                outputStandard: 5000,
                landSize: +state.landSize.value,
                landPrice: +state.landPrice.value || 0,
                fertilizerName: state.fertilizerName.value,
                fertilizerSize: +state.fertilizerSize.value,
                fertilizerPrice: +state.fertilizerPrice.value || 0,
                seedPrice: +state.seedPrice.value || 0,
            })
            if (!res) {
                alert("check through the inputed data once again")
                return;
            } else {
                setShowResult(true)
                setFinalResult(res)
            }
        }
        if (state.seedName.value === "maize") {
            const res = resultCalc({
                name: "rice",
                seedInput: state.seedSize.value,
                inputStandard: 20000,
                outputStandard: 35000,
                landSize: +state.landSize.value,
                landPrice: +state.landPrice.value || 0,
                fertilizerName: state.fertilizerName.value,
                fertilizerSize: +state.fertilizerSize.value,
                fertilizerPrice: +state.fertilizerPrice.value || 0,
                seedPrice: +state.seedPrice.value || 0,
            })
            if (!res) {
                alert("check through the inputed data once again")
                return;
            } else {
                setShowResult(true)
                setFinalResult(res)
            }
        }
        if (state.seedName.value === "cowpea") {
            const res = resultCalc({
                name: "rice",
                seedInput: state.seedSize.value,
                inputStandard: 1500,
                outputStandard: 7500,
                landSize: +state.landSize.value,
                landPrice: +state.landPrice.value || 0,
                fertilizerName: state.fertilizerName.value,
                fertilizerSize: +state.fertilizerSize.value,
                fertilizerPrice: +state.fertilizerPrice.value || 0,
                seedPrice: +state.seedPrice.value || 0,
            })
            if (!res) {
                alert("check through the inputed data once again")
                return;
            } else {
                setShowResult(true)
                setFinalResult(res)
            }
        }
        if (state.seedName.value === "sorghum") {
            const res = resultCalc({
                name: "rice",
                seedInput: state.seedSize.value,
                inputStandard: 3000,
                outputStandard: 5000,
                landSize: +state.landSize.value,
                landPrice: +state.landPrice.value || 0,
                fertilizerName: state.fertilizerName.value,
                fertilizerSize: +state.fertilizerSize.value,
                fertilizerPrice: +state.fertilizerPrice.value || 0,
                seedPrice: +state.seedPrice.value || 0,
            })
            if (!res) {
                alert("check through the inputed data once again")
                return;
            } else {
                setShowResult(true)
                setFinalResult(res)
            }
        }
        if (state.seedName.value === "millet") {
            const res = resultCalc({
                name: "rice",
                seedInput: state.seedSize.value,
                inputStandard: 450,
                outputStandard: 1200,
                landSize: +state.landSize.value,
                landPrice: +state.landPrice.value || 0,
                fertilizerName: state.fertilizerName.value,
                fertilizerSize: +state.fertilizerSize.value,
                fertilizerPrice: +state.fertilizerPrice.value || 0,
                seedPrice: +state.seedPrice.value || 0,
            })
            if (!res) {
                alert("check through the inputed data once again")
                return;
            } else {
                setShowResult(true)
                setFinalResult(res)
            }
        }
    }
    function computeBtnHandler(e) {
        setShowCompute((prev) => prev === true ? false : true)
    }

    useEffect(() => {
        console.log("king")
        alert("Dear user, make sure you check the computation table before using the website. Thank you")
    },[])

    return (
        <div className='calc-page'>
            <Nav />
            <aside className="compute-show-holder">
                <h4>click the button below to {btnVal} computation table</h4>
                <button onClick={computeBtnHandler} className='compute-show-btn'> {btnVal} </button>
            </aside>
            {showCompute ?
                <header className="form-header">
                    <h3>Computation table</h3>
                    <section className="computation-info-holder">
                        {StandarArr.map((elem, index) => <ComputationInfo key={index} {...elem} />)}
                    </section>
                    <p>Note: The computation table present the least amount of values required. The "*" means a particular field is required</p>
                </header>
                : ""}
            {/* <div className="calc-for-holder"></div> */}
            <CalcForm submitHandler={submitHandler} state={state} dispatcher={actDispatcher} />

            {showResult ? <ResultInfo overlayClick={overlayClick} {...finalResult} /> : ""}
        </div>
    )
}


export default Calc