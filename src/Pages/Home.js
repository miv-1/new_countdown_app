import Card from "../components/Card";
import customData from "../data.json";
import '../bootstrap.min.css'
import picture from "../images/image001.png";

function Home() {
  const currentTimestamp = Date.now();
  const cards = customData.data;

  return (
    <div>
    <div className="container d-flex justify-content-center">
      <div className="row" >
        {cards.map((card) => (
          <Card
            key={card.id}
            title={card.title}
            doDateTimestamp={Date.parse(card.doDate)}
            currentTimestamp={currentTimestamp}
            message={card.message}
            company={card.company}
            nextPosition={card.nextPosition}
          />
        ))}
      </div>

    </div>
        <div>
            <img src={picture} className="img-fluid" alt="meme"/>
        </div>
    </div>
  );
}
export default Home;
