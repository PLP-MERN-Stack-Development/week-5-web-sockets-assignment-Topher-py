import { useEffect } from 'react';
import socket from './socket';

function App() {
  useEffect(() => {
    socket.on('connect', () => {
      console.log('🟢 Connected to server:', socket.id);
    });

    return () => socket.disconnect();
  }, []);

  return (
    <div className="App">
      <h1>Real-Time Chat</h1>
    </div>
  );
}

export default App;
