import Navbar from "./components/navbar";
import PlayerInfo from "./components/playerinfo"

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <PlayerInfo/>
      </main>
    </>
  );
}
