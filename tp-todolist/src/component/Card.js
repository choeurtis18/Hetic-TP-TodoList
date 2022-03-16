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
            <div id={"card-"+this.id} className="card mb-5 mx-auto" style={{maxWidth: '400px'}}>
                <div className="card-body">
                    <h5 className="card-title">{this.titre}</h5>
                    <p className="card-text">{this.message}</p>
                    <form className="my-5 text-center" onSubmit={this.handleSubmit}>
                        <button type={"submit"} className="btn btn-danger">Delete</button>
                    </form>
                    <form className="my-5 text-center" onSubmit={this.handleValid}>
                        <button id={"card-btn-"+this.id} type={"submit"} className="btn btn-primary">Done</button>
                    </form>
                </div> 
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
            document.querySelector("#card-"+this.id).style.backgroundColor = "#00FF00";
            document.querySelector("#card-btn-"+this.id).textContent = "Cancel";

        } else {
            this.etat = "unvalid";
            document.querySelector("#card-"+this.id).style.backgroundColor = "#FFFFFF";
            document.querySelector("#card-btn-"+this.id).textContent = "Done";
        }
        
    }
    
}
