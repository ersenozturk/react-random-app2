import './App.css';
import ImgHeader from './components/header/ImgHeader';
// import useFetch from './customHook/useFetch';


function App() {

  // const {data, loading, error} = useFetch("https://randomuser.me/api/")
  // console.log(data);

  return (
    <div className="App">
      <h1>Custom Hook</h1>
      <ImgHeader/>
    </div>
  );

}

export default App;
