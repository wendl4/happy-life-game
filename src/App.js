import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Input from 'react-bootstrap/'
import { HashRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';

import oponents from './oponents.png';
import mapa1 from './mapa1.png';
import mapa2 from './mapa2.png';
import skull from './skull.png';


const CodePage = () => {
  const navigate = useNavigate();

  const [inputValues, setInputValues] = useState(Array(5).fill(''));

  const handleChange = (index, event) => {
    const newInputValues = [...inputValues];
    newInputValues[index] = event.target.value;
    setInputValues(newInputValues);
  };

  const correctCodes = [
    '37874', '33601', '74672', '30224', '17127'
  ]

  const handleConfirm = () => {
    if (inputValues.join('') == correctCodes.join('')) {
      alert("Success!");
      navigate('/level1');
    }
    else {
      alert(`Invalid codes!`);
    }
  };


  return (
    <div class="menu">
      <h1 class="game-name"> Happy life </h1>
      {inputValues.map((value, index) => (
        <div key={index} class="code-input">
          <input
            type="text"
            value={value}
            onChange={(event) => handleChange(index, event)}
            placeholder={`Code ${index + 1}`}
          />
        </div>
      ))}
      
      <Button onClick={handleConfirm}>Ďalej</Button>
      <h1 class="game-name"> Game </h1>
    </div>
  );
};

const Level1Page = () => {
  const navigate = useNavigate();

  const handleL1Confirm = () => {
    navigate('/level2');
  }

  return (
    <div class="menu">
      <h1 class="game-name"> Vitaj v hre! </h1>
      <div class="p30t">
        <h2 class="game-text"> START -> PARK NA RAČKU</h2>
        <div class="game-text">
          Hľadaj peniažky, zbieraj peniažky!
        </div>
        <br></br>
        <div class="game-text">
          Pravidlá pochopíš, <br></br> spoznáš protihráčov.
        </div>
        <br></br>
      </div>
      <Button onClick={handleL1Confirm}>Ďalej</Button>
    </div>
  );
};

const Level2Page = () => {
  const navigate = useNavigate();

  const handleL2Confirm = () => {
    navigate('/level3');
  }

  const [inputValues, setInputValues] = useState(Array(5).fill(''));

  const handleChange = (index, event) => {
    const newInputValues = [...inputValues];
    newInputValues[index] = event.target.value;
    setInputValues(newInputValues);
  };

  return (
    <div class="menu">
      <h1 class="game-name"> Zadaj počty peniažkov </h1>
      {inputValues.map((value, index) => (
        <div key={index} class="code-input">
          <input
            type="text"
            value={value}
            onChange={(event) => handleChange(index, event)}
            placeholder={`${index + 1}`}
          />
        </div>
      ))}
      <div class="p30t">
        <Button onClick={handleL2Confirm}>Ďalej</Button>
      </div>
    </div>
  );
};


const Level3Page = () => {
  const navigate = useNavigate();

  const handleL3Confirm = () => {
    navigate('/level4');
  }

  return (
    <div class="menu">
      <h1 class="game-name"> TVOJI PROTIHRÁČI </h1>
      <div class="p30t">
      <img class="oponents-image" src={oponents} alt="Oponents" />
      </div>
      <Button onClick={handleL3Confirm}>Ďalej</Button>
    </div>
  );
};

const Level4Page = () => {
  const navigate = useNavigate();

  const handleL4Confirm = () => {
    navigate('/level5');
  }

  return (
    <div class="menu">
      <div class="p30t">
        <div class="game-text">
          Hľadaj peniažky, zbieraj peniažky!
        </div>
        <br></br>
        <img class="oponents-image" src={mapa1} alt="mapa1" />
      </div>
      <br></br>
      <Button onClick={handleL4Confirm}>Ďalej</Button>
    </div>
  );
};

const Level5Page = () => {
  const navigate = useNavigate();

  const handleL5Confirm = () => {
    navigate('/level6');
  }

  const [inputValues, setInputValues] = useState(Array(5).fill(''));

  const handleChange = (index, event) => {
    const newInputValues = [...inputValues];
    newInputValues[index] = event.target.value;
    setInputValues(newInputValues);
  };

  return (
    <div class="menu">
      <h1 class="game-name"> Zadaj počty peniažkov </h1>
      {inputValues.map((value, index) => (
        <div key={index} class="code-input">
          <input
            type="text"
            value={value}
            onChange={(event) => handleChange(index, event)}
            placeholder={`${index + 1}`}
          />
        </div>
      ))}
      <div class="p30t">
        <Button onClick={handleL5Confirm}>Ďalej</Button>
      </div>
    </div>
  );
};



const Level6Page = () => {
  const navigate = useNavigate();

  const handleL6Confirm = () => {
    navigate('/level7');
  }

  return (
    <div class="menu alert-menu">
      <h1 class="game-name"> POZOR! </h1>
      <div class="p30t">
        <h2 class="game-text"> PORUŠENIE PRAVIDIEL!!!</h2>
        <div class="game-text">
          AI ťa vidí!
        </div>
        <br></br>
      </div>
      <Button onClick={handleL6Confirm}>Ďalej</Button>
    </div>
  );
};





const Level7Page = () => {
  const navigate = useNavigate();

  const handleL7Confirm = () => {
    navigate('/level8');
  }

  return (
    <div class="menu">
      <div>
      <h1 class="game-name"> Hľadaj peniažky, <br></br>zbieraj peniažky! </h1>
        <div class="game-text">
          V ZOO Bratislava!
        </div>
        <br></br>
        <img class="oponents-image" src={mapa2} alt="mapa2" />
      </div>
      <br></br>
      <Button onClick={handleL7Confirm}>Ďalej</Button>
    </div>
  );
};


const Level8Page = () => {
  const navigate = useNavigate();

  const handleL8Confirm = () => {
    navigate('/level9');
  }

  const [inputValues, setInputValues] = useState(Array(5).fill(''));

  const handleChange = (index, event) => {
    const newInputValues = [...inputValues];
    newInputValues[index] = event.target.value;
    setInputValues(newInputValues);
  };

  return (
    <div class="menu">
      <h1 class="game-name"> Zadaj počty peniažkov </h1>
      {inputValues.map((value, index) => (
        <div key={index} class="code-input">
          <input
            type="text"
            value={value}
            onChange={(event) => handleChange(index, event)}
            placeholder={`${index + 1}`}
          />
        </div>
      ))}
      <div class="p30t">
        <Button onClick={handleL8Confirm}>Ďalej</Button>
      </div>
    </div>
  );
};



const Level9Page = () => {
  const navigate = useNavigate();

  const handleL9Confirm = () => {
    navigate('/level10');
  }

  return (
    <div class="menu alert-menu">
      <h1 class="game-name"> POSLEDNÁ VÝSTRAHA! </h1>
      <img class="oponents-image skull-image" src={skull} alt="lebka" />
        <h2 class="game-name"> NEKONTAKTUJ PROTIHRÁČOV!!!</h2>
        <br></br>
      <Button onClick={handleL9Confirm}>Ďalej</Button>
    </div>
  );
};


const Level10Page = () => {
  const navigate = useNavigate();

  const handleL11Confirm = () => {
    navigate('/level11');
  }

  return (
    <div class="menu">
      <div>
      <h1 class="game-name"> Hľadaj peniažky, <br></br>zbieraj peniažky! </h1>
        <div class="game-text">
          Na kúpalisku Rača - Krasňany
        </div>
        <br></br>
      </div>
      <br></br> 
      <Button>Ďalej</Button>
    </div>
  );
};



function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<CodePage />} />
        <Route path="/level1" element={<Level1Page />} />
        <Route path="/level2" element={<Level2Page />} />
        <Route path="/level3" element={<Level3Page />} />
        <Route path="/level4" element={<Level4Page />} />
        <Route path="/level5" element={<Level5Page />} />
        <Route path="/level6" element={<Level6Page />} />
        <Route path="/level7" element={<Level7Page />} />
        <Route path="/level8" element={<Level8Page />} />
        <Route path="/level9" element={<Level9Page />} />
        <Route path="/level10" element={<Level10Page />} />
      </Routes>
    </Router>
  );
}

export default App;
