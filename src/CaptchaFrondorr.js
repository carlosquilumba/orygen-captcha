import React, { useState } from 'react';

// Captcha Frondorr: Selecciona la imagen correcta
const images = [
  { src: 'https://placekitten.com/100/100', correct: true },
  { src: 'https://placekitten.com/101/100', correct: false },
  { src: 'https://placekitten.com/102/100', correct: false }
];

function CaptchaFrondorr({ onValidate }) {
  const [selected, setSelected] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selected === null) return;
    onValidate(images[selected].correct);
  };

  return (
    <form onSubmit={handleSubmit}>
      <p>Selecciona el gato que está mirando al frente:</p>
      <div style={{ display: 'flex', gap: '10px' }}>
        {images.map((img, idx) => (
          <label key={idx}>
            <input
              type="radio"
              name="captcha"
              value={idx}
              checked={selected === idx}
              onChange={() => setSelected(idx)}
            />
            <img src={img.src} alt={`captcha-${idx}`} style={{ width: 100, height: 100, border: selected === idx ? '2px solid blue' : '2px solid gray' }} />
          </label>
        ))}
      </div>
      <button type="submit" style={{ marginTop: '10px' }}>Validar</button>
    </form>
  );
}

export default CaptchaFrondorr;
