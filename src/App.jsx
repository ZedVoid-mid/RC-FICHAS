



import { useState } from "react";
import Card from "./Cards";

const cards = [
  { name: "Dragão de Cobalto", type: "Criatura", attack: 7, defense: 5 },
  { name: "Guardiã das Marés", type: "Criatura", attack: 4, defense: 8 },
  { name: "Mago das pedras", type: "Criatura", attack: 8, defense: 5 },
  { name: "BOSS Cliker", type: "Criatura", attack: 9, defense: 8 },
  { name: "Runner", type: "Criatura", attack: 5, defense: 6 }
];

function App() {
  const [tipo, setTipo] = useState("Todas");
  const [pesquisa, setPesquisa] = useState("");
  const [cartaSorteada, setCartaSorteada] = useState(null);
  const [ordemAtaque, setOrdemAtaque] = useState(false);

  const cartasFiltradas = cards.filter((card) => {
    const correspondeTipo =
      tipo === "Todas" || card.type === tipo;

    const correspondePesquisa =
      card.name.toLowerCase().includes(pesquisa.toLowerCase());

    return correspondeTipo && correspondePesquisa;
  });

  const cartasOrdenadas = [...cartasFiltradas].sort((a, b) =>
    ordemAtaque ? b.attack - a.attack : a.attack - b.attack
  );

  function sortearCarta() {
    const indice = Math.floor(Math.random() * cards.length);
    setCartaSorteada(cards[indice]);
  }

  return (
    <main>
      <h1>A minha coleção de cartas</h1>

      <p>Tenho {cards.length} cartas</p>

      <div>
        <button onClick={() => setTipo("Todas")}>
          Todas
        </button>

        <button onClick={() => setTipo("Criatura")}>
          Só criaturas
        </button>

        <button onClick={() => setTipo("Feitiço")}>
          Só feitiços
        </button>
      </div>

      <p>Cartas à vista: {cartasFiltradas.length}</p>

      <input
        type="text"
        placeholder="Pesquisar carta..."
        value={pesquisa}
        onChange={(e) => setPesquisa(e.target.value)}
      />

      <div>
        <button onClick={sortearCarta}>
          Carta à sorte
        </button>

        <button onClick={() => setOrdemAtaque(!ordemAtaque)}>
          Ordenar por ataque
          {ordemAtaque
            ? " (maior para menor)"
            : " (menor para maior)"}
        </button>
      </div>

      {cartaSorteada && (
        <section>
          <h2>Carta sorteada</h2>
          <Card card={cartaSorteada} />
        </section>
      )}

      <section>
        {cartasOrdenadas.map((card) => (
          <Card key={card.name} card={card} />
        ))}
      </section>
    </main>
  );
}

export default App;





