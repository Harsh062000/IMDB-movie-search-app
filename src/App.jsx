import './App.css'
import NavBar from './components/NavBar/NavBar';
import Mainroutes from './routes/Mainroutes';

function App() {

  console.log(import.meta.env.VITE_API_KEY);

  return (
    <>
      <NavBar />
      <Mainroutes />
    </>
  )
}

export default App
