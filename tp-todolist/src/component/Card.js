export default function Card({props, setCardState, setCardDelete}) {
    return (
        <div id={"card-"+props.id} className="card" style={{maxWidth: '400px'}}>
            <h5 className="card-title">{props.titre}</h5>
            <p className="card-text">{props.message}</p>
            <button className="card-btn" onClick={() => setCardDelete(props.id)}> Delete</button>
            <button id={"card-btn-"+props.id} className="card-btn" onClick={() => setCardState(props.id)}>Done</button>
        </div>
    )
}
