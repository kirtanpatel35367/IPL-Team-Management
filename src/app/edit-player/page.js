import PlayerForm from '../components/playerForm';
import Navbar from '../components/navbar'

export default function Home() {
  return (
    <>
        <Navbar/>
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
                <PlayerForm/>
      </div>
    </>
  );
}
