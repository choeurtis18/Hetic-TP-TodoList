import {Component} from "react";

export default class Card extends Component {
    id = this.props.id;
    titre = this.props.titre;
    message = this.props.message;
    etat = "unvalid";

    constructor (props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleValid = this.handleValid.bind(this);
    }

    render () {
        return (
            <div id={"card-"+this.id} className="card" style={{maxWidth: '400px'}}>
                <h5 className="card-title">{this.titre}</h5>
                <p className="card-text">{this.message}</p>
                <button className="card-btn" onClick={this.handleSubmit}>Delete</button>
                <button id={"card-btn-"+this.id} className="card-btn" onClick={this.handleValid}>Done</button>
            </div>
        )
    }

    handleSubmit(event) {
        event.preventDefault();
        document.querySelector("#card-"+this.id).remove();
    }

    handleValid(event) {
        event.preventDefault();

        if (this.etat === "unvalid") {
            this.etat = "valid";
            document.querySelector("#card-"+this.id).classList.add("valid");
            document.querySelector("#card-btn-"+this.id).textContent = "Cancel";

        } else {
            this.etat = "unvalid";
            document.querySelector("#card-"+this.id).classList.remove("valid");
            document.querySelector("#card-btn-"+this.id).textContent = "Done";
        }
        
    }
    
}
