import { v4 as uuid } from 'uuid';
import { useEffect, useState } from 'react';
import Card from './Card';



export default function Form() 
{
    var [cardsData, setCard] = useState([]);
    var nbDone = 0;

    const addCard = (e) => {
        e.preventDefault();
        if (e.target.title.value && e.target.message.value) {
            if (cardsData.length-1 - nbDone > 5) {
                document.querySelector('#erreur-msg').textContent = "Finis d'abord tes taks avant en ajouter une nouvelle !";
            } else {
                const newItem = {
                    id: uuid(),
                    titre: e.target.title.value,
                    message: e.target.message.value,
                    state: false
                };
                setCard(prev => [...prev, newItem]);
                document.querySelector('#erreur-msg').textContent = "";
            }
        } else {
            document.querySelector('#erreur-msg').textContent = "veuillez completer le formulaire";
        }
    }

    const updateCardSate = (id) => {
        cardsData.filter((card, index) => {
            if(card.id === id) {
                if(card.state === false) {
                    cardsData[index].state = true;
                    nbDone += 1;
                    document.querySelector("#card-"+id).classList.add("valid");
                    document.querySelector("#card-btn-"+id).textContent = "Cancel";
                } else {
                    cardsData[index].state = false;
                    nbDone -= 1;
                    document.querySelector("#card-"+id).classList.remove("valid");
                    document.querySelector("#card-btn-"+id).textContent = "Done";
                }
            }
            return true;
        })
    }

    const deleteCard = (id) => {
        cardsData.filter((card, index) => {
            if(card.id === id) {
                cardsData.splice(index, 1);
                document.querySelector("#card-"+id).remove();
            }
            return true;
        })
    }

    return (
        <>
            <form className="form" onSubmit={addCard}>
                <span id="erreur-msg" style={{color: '#FF0000'}}></span>
                <input type="text" className="form-inputs form-title" name="title" placeholder="Titre"/>
                <textarea rows="3" className="form-inputs form-msg" name="message" placeholder="Message"/>
                <button type={"submit"} className="form-btn">C'est parti</button>
            </form>
            <div className="card-container">
                <h2 className="card-container-title">Vos tasks</h2>
                {cardsData.map((card) => (
                    <Card props={card} key={card.id} setCardState={updateCardSate} setCardDelete={deleteCard}/>
                ))}
            </div>
        </>
    )

}
