import './App.css'
import Mainroutes from './routes/Mainroutes';

function App() {

  console.log(import.meta.env.VITE_API_KEY);

  return (
    <>
      <div>nav bar here</div>
      <Mainroutes />
    </>
  )
}

export default App
