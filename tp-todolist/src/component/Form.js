import {Component} from "react";
var uuid = require('uuid');

export default class Form extends Component {
    setCards = this.props.setCards;

    constructor (props) {
        super(props);

        this.state = {
            title: "",
            message: ""
        }

        this.handleSubmit = this.handleSubmit.bind(this);
    }
        
    render() {
        return (
            <form className="form" onSubmit={this.handleSubmit}>
                <input type="text" className="form-inputs form-title" placeholder="Titre" onChange={this.getTitle}/>
                <textarea rows="3" className="form-inputs form-msg" placeholder="Message" onChange={this.getMessage}/>
                <button type={"submit"} className="form-btn">C'est parti</button>
            </form>
        )
    }

    getTitle = (e) => {
        this.setState({title: e.target.value});
    }
    getMessage = (e) => {
        this.setState({message: e.target.value});
    }
    
    handleSubmit(event) {
        event.preventDefault();
        if (this.state.title && this.state.message) {
            const newItem = {
                id: uuid.v1(),
                titre: this.state.title,
                message: this.state.message
            };
            this.setCards(prev => [...prev, newItem]);
            document.querySelector('#erreur-msg').textContent = "";
        } else {
            document.querySelector('#erreur-msg').textContent = "veuillez completer le formulaire";
        }
    }

}
