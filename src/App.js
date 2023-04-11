import Card from './components/Card';
import nft from "./nft"

function App() {
  return (
    <main>
      {nft.map((nft) => {
        return (
          <Card
            key={nft.key}
            name={nft.name}
            description={nft.description}
            price={nft.price}
            time={nft.time}
            creator={nft.creator}
            nftImage={nft.nftImage}
          />
        )
      })}
    </main>
  );
}

export default App;
