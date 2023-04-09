import './App.css';
import Header from './components/Header/Header'
import PostItem from './components/PostItems/Postitems';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="Post__list">
      <PostItem />
    </div>
      
    </div>
    
  );
}

export default App;
