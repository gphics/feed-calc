

export default function ComputationInfo({ name, input, output, fertilizer }) {
    return <div className="each-computation-info">
        <h5> {name} </h5>
        <h5> {input} </h5>
        <h5> {fertilizer} </h5>
        <h5> {output} </h5>
    </div>
}