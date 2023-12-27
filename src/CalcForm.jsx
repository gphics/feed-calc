

function CalcForm({ dispatcher, state, submitHandler }) {
    function handler(e) {
        const { name, value } = e.target
        dispatcher("upd-state", { name, value })
    }
    
    return (
        <form onSubmit={submitHandler} className="calc-form">
            
            <h3 className="form-head">Farm input calcultion form</h3>
            {/* all about seed start */}
            <h4 className="sect-heading">Seed</h4>
            <div className="each-input-holder">
                <label htmlFor="seedName">seed name <span>*</span> </label>
                <select onChange={handler}
                    className="form-select" name="seedName" id="">
                    <option value="rice">rice</option>
                    <option value="cowpea">cowpea</option>
                    <option value="maize">maize</option>
                    <option value="millet">millet</option>
                    <option value="sorghum">sorghum</option>
                </select>
            </div>
            <div className="each-input-holder">
                <label htmlFor="seedSize">seed size per kg <span>*</span> </label>
                <input name="seedSize" type="number" required  value={state.seedSize.value} onChange={handler} />
            </div>
            <div className="each-input-holder">
                <label htmlFor="seedPrice">seed price per kg (Naira) </label>
                <input name="seedPrice" type="number" value={state.seedPrice.value} onChange={handler} />
            </div>
            {/* all about seed end */}
            {/* all about land start */}
            <h4 className="sect-heading">Land</h4>
            <div className="each-input-holder">
                <label htmlFor="landSize">land size(acre) <span>*</span> </label>
                <input name="landSize" type="number" required value={state.landSize.value} onChange={handler} />
            </div>
            <div className="each-input-holder">
                <label htmlFor="landPrice">land price per acre (Naira)  </label>
                <input name="landPrice" type="number" value={state.landPrice.value} onChange={handler} />
            </div>
            {/* all about land end */}
            {/* all about fertilizer start */}
            <h4 className="sect-heading">Fertilizer and Herbicide</h4>
            <div className="each-input-holder">
                <label htmlFor="fertilizerName">Fertilizer name <span>*</span>  </label>
                <input name="fertilizerName" type="text" required value={state.fertilizerName.value} onChange={handler} />
            </div>
            <div className="each-input-holder">
                <label htmlFor="fertilizerSize">Fertilizer size (kg) <span>*</span> </label>
                <input name="fertilizerSize" type="number" required value={state.fertilizerSize.value} onChange={handler} />
            </div>
            <div className="each-input-holder">
                <label htmlFor="fertilizePrice">Fertilizer price per kg (Naira)  </label>
                <input name="fertilizerPrice" type="number" value={state.fertilizerPrice.value} onChange={handler} />
            </div>
            <div className="each-input-holder">
                <label htmlFor="herbicidePrice">Herbicide price (Naira) <span>*</span> </label>
                <input name="herbicidePrice" required type="number" value={state.herbicidePrice.value} onChange={handler} />
            </div>
            {/* all about fertilizer end*/}

            <button className="calc-btn" onClick={submitHandler} type="submit">Calculate</button>
        </form>
    )
}




export default CalcForm