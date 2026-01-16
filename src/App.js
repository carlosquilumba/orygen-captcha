
import React, { useState } from 'react';
import './App.css';

import CaptchaFrondorr from './CaptchaFrondorr';

function App() {
  const [captchaResult, setCaptchaResult] = useState(null);
  const [error, setError] = useState('');

  const handleCaptcha = (success) => {
    if (success) {
      setCaptchaResult(true);
      setError('');
    } else {
      setCaptchaResult(false);
      setError('No resolviste el captcha. Intenta de nuevo o pide ayuda.');
    }
  };

  return (
    <div className="App">
      {captchaResult === true ? (
        <div>
          <h1>¡Lo resolviste!</h1>
        </div>
      ) : (
        <div>
          <h1>Orygen</h1>
          <CaptchaFrondorr onValidate={handleCaptcha} />
          {error && <p style={{ color: 'red' }}>{error}</p>}
        </div>
      )}
    </div>
  );
}

export default App;
