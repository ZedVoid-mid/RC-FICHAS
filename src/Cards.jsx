
function Card({ card }) {
  return (
    <div>
      <h2>{card.name}</h2>
      <p>Tipo: {card.type}</p>
      <p>Ataque: {card.attack}</p>
      <p>Defesa: {card.defense}</p>

      {card.attack >= 6 && <strong>Forte</strong>}

      <hr />
    </div>
  );
}

export default Card;