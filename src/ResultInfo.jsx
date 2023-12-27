export default function ResultInfo({
    name,
    fertilizerName,
    totalInputCost,
    totalOutputCost,
    profit,
    landInputPrice,
    fertilizerInputPrice,
    herbicideInputPrice,
    seedInputPrice,
    overlayClick
}) {
    return <section className="result-info-overlay" onClick={overlayClick}>
        <div className="result-info">


            <article className="input-info">
                <h2>Input Information</h2>

                <h4>seed name: {name}   </h4>
                <h4>fertilizer name: {fertilizerName}</h4>
                <h4>land input price(Naira): {landInputPrice}</h4>
                <h4>fertilizer input price(Naira) {fertilizerInputPrice} </h4>
                <h4> herbicide input price(Naira) : {herbicideInputPrice} </h4>
                <h4>seed input price(Naira): {seedInputPrice} </h4>
                <h4>total input cost(Naira): {totalInputCost}</h4>

            </article>
            <article className="output-info">
                <h2>Output Information</h2>

                <h4> total output price(Naira): {totalOutputCost} </h4>
                <h4> profit(Naira): {profit} </h4>


            </article>
        </div>
    </section>
}