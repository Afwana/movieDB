import './App.css';
import Home from './components/Home'

function App() {
  return (
    <>
      <div className='w-100 d-flex justify-content-center'>
        {/* give an heading to page */}
        <div className='fs-3 fw-bolder text-center mt-3 text-dark'> The Movie Database </div>
      </div>
      <div className='mt-3'>
        {/* add component Home to display movies */}
        <Home/>
      </div>
    </>
  );
}

export default App;
