import Card from "../components/Card";
import customData from "../data.json";
import '../bootstrap.min.css'

function Home() {
  const currentTimestamp = Date.now();
  const cards = customData.data;

  return (
    <div className="container d-flex justify-content-center">
      <div className="row" >
        {cards.map((card) => (
          <Card
            key={card.id}
            title={card.title}
            doDateTimestamp={Date.parse(card.doDate)}
            currentTimestamp={currentTimestamp}
            message={card.message}
          />
        ))}
      </div>
    </div>
  );
}
export default Home;
