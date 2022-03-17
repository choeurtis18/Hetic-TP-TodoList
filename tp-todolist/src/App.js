import logo from './logo.svg';
import './App.css';
import Card from './component/Card';
import Form from './component/Form';
import { useState } from 'react';

function App() {

  const [cards, setCards] = useState([
    {
      id: 1,
      titre: "C'est une belle image",
      message: "Des trucs à raconter, je ne sais pas encore trop quoi mais ça se fera"
    },
  ]);
    
  return (
    <div className="container">
      <h1 className="container-title">Ajouter des choses</h1>
      <span id="erreur-msg" style={{color: '#FF0000'}}></span>
      <Form setCards={setCards}/>

      <div className="card-container">
        <h2 className="card-container-title">Vos tasks</h2>
        {cards.map((card) => (
          <Card titre={card.titre} message={card.message} id={card.id} key={card.id}/>
        ))}
      </div>
    </div>
  );
}

export default App;
