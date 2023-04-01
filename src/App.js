import './App.css';
import VideoComponent from './pages/VideoComponent';

function App() {
  return (
    <div className="App">
      <div className='app-videos'>
        <VideoComponent />
        <VideoComponent />
        <VideoComponent />
        <VideoComponent />
      </div>
    </div>
  );
}

export default App;
