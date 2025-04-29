import { useState, useEffect } from 'react';
import GreenTips from './components/GreenTips';
import { db } from './firebase';
import './App.css';

function App() {
  const [isInitialized, setIsInitialized] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const initializeApp = async () => {
      try {
        // Test Firestore connection
        await db.app.name;
        setIsInitialized(true);
      } catch (err) {
        console.error('Failed to initialize Firebase:', err);
        setError(err.message);
      }
    };

    initializeApp();
  }, []);

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-red-50">
        <div className="text-center p-8">
          <h1 className="text-2xl font-bold text-red-600 mb-4">Error Initializing App</h1>
          <p className="text-gray-700">{error}</p>
        </div>
      </div>
    );
  }

  if (!isInitialized) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-green-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Initializing application...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="App min-h-screen bg-white">
      <GreenTips />
    </div>
  );
}

export default App;
