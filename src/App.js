import logo from './logo.svg';
import './App.css';
import { useState, useEffect, useRef } from 'react';

function App() {

  const [height, setHeight] = useState();
  const [weight, setWeight] = useState();
  const [bmiStatus, setBmiStatus] = useState('');
  const [moreOrLess, setMoreOrLess] = useState('늘려야 / 빼야');
  const [moreOrLess2, setMoreOrLess2] = useState('+/-');
  const [pigBox, setPigBox] = useState();
  const [moreValue, setMoreValue] = useState(0);

  const originalHeight = useRef(0);
  const originalWeight = useRef(0);
  const originalPigBox = useRef(0);
  const originalBMIValue = useRef(0);

  const minOrMaxValue = [
    {
      id: 1,
      min: -1,
      max: 15.99
    },
    {
      id: 2,
      min: 16,
      max: 16.99
    },
    {
      id: 3,
      min: 17,
      max: 18.49
    },
    {
      id: 4,
      min: 18.5,
      max: 24.99
    },
    {
      id: 5,
      min: 25,
      max: 29.99
    },
    {
      id: 6,
      min: 30,
      max: 34.99
    },
    {
      id: 7,
      min: 35,
      max: 39.99
    },
    {
      id: 8,
      min: 40,
      max: -1
    }
  ]

  useEffect(() => {
    if (height != undefined && weight != undefined) {
      var statusF = document.getElementById('status');
      var bmiValue = weight / ((height / 100) * (height / 100));
      if (bmiValue < 16) {
        setBmiStatus('심한 마름');
        setPigBox(1);
      }
      else if (bmiValue < 17) {
        setBmiStatus('많이 마름');
        setPigBox(2);
      }
      else if (bmiValue < 18.5) {
        setBmiStatus('조금 마름');
        setPigBox(3);
      }
      else if (bmiValue < 25) {
        setBmiStatus('보통 체중');
        setPigBox(4);
      }
      else if (bmiValue < 30) {
        setBmiStatus('약간 과체중');
        setPigBox(5);
      }
      else if (bmiValue < 35) {
        setBmiStatus('비만');
        setPigBox(6);
      }
      else if (bmiValue < 40) {
        setBmiStatus('심한 비만');
        setPigBox(7);
      }
      else {
        setBmiStatus('아주 심한 비만');
        setPigBox(8);
      }
      document.getElementById('status').innerHTML = bmiStatus;
      originalHeight.current = height;
      originalWeight.current = weight;
      originalPigBox.current = pigBox;
      originalBMIValue.current = bmiValue;
    }
  }, [height, weight, bmiStatus]);

  function leftClicked() {
    if (pigBox > 1) {
      setPigBox(pigBox - 1)
    }
  }

  function rightClicked() {
    if (pigBox < 8) {
      setPigBox(pigBox + 1)
    }
  }

  useEffect(() => {
    if (height !== undefined && weight !== undefined) {
      if (pigBox < originalPigBox.current) {
        const newMoreValue = Math.ceil((originalBMIValue.current - minOrMaxValue[pigBox - 1].max) * originalHeight.current * originalHeight.current / 10000);
        setMoreOrLess('빼야');
        setMoreOrLess2('-');
        setMoreValue(newMoreValue);
      } else if (pigBox > originalPigBox.current) {
        const newMoreValue = Math.ceil((minOrMaxValue[pigBox - 1].min - originalBMIValue.current) * originalHeight.current * originalHeight.current / 10000);
        setMoreOrLess('늘려야');
        setMoreOrLess2('+');
        setMoreValue(newMoreValue);
      } else {
        setMoreValue(0);
      }
    }
  }, [pigBox]);

  return (
    <div className="App">
      <div className="container">
        <div id="header">
          <h1 id="headerTitle"> BMI 변화 계산기 </h1>
        </div>
        <div id="websiteDescription">
          <p id="webDescription"> 어서 오세요! </p>
          <p id="webDescription2"> 키가 지금과 똑같을 때 몇 kg까지 빼야/늘려야 BMI 전/다음 단계로 넘어갈 수 있을까 계산해주는 웹사이트입니다.</p>
        </div>
        <div id="inputForms">
          <input id="heightR" className="inputFormsClass" type="number" placeholder="키 (cm)" onChange={(h) => setHeight(h.target.value)} />
          <input id="weightR" className="inputFormsClass" type="number" placeholder="몸무게 (kg)" onChange={(w) => setWeight(w.target.value)} />
        </div>
        <div id="currentStatus">
          <h3> 현재 상태는? </h3>
          <p id="status"> </p>
        </div>
        <div id="colorBox">
          <div id="colorBox1">
            <div>
              <p className="colorBoxP"> 심한 마름 </p>
            </div>
            <div className="colorBoxUnder" id="colorBox1Under">
              {pigBox === 1 && <img src="../pig.png" alt="돼지" className="pigClass" />}
            </div>
          </div>
          <div id="colorBox2">
            <div>
              <p className="colorBoxP"> 많이 마름 </p>
            </div>
            <div className="colorBoxUnder" id="colorBox2Under">
              {pigBox === 2 && <img src="../pig.png" alt="돼지" className="pigClass" />}
            </div>
          </div>
          <div id="colorBox3">
            <div>
              <p className="colorBoxP"> 조금 마름 </p>
            </div>
            <div className="colorBoxUnder" id="colorBox3Under">
              {pigBox === 3 && <img src="../pig.png" alt="돼지" className="pigClass" />}
            </div>
          </div>
          <div id="colorBox4">
            <div>
              <p className="colorBoxP"> 보통 체중 </p>
            </div>
            <div className="colorBoxUnder" id="colorBox4Under">
              {pigBox === 4 && <img src="../pig.png" alt="돼지" className="pigClass" />}
            </div>
          </div>
          <div id="colorBox5">
            <div>
              <p className="colorBoxP"> 약간 과체중 </p>
            </div>
            <div className="colorBoxUnder" id="colorBox5Under">
              {pigBox === 5 && <img src="../pig.png" alt="돼지" className="pigClass" />}
            </div>
          </div>
          <div id="colorBox6">
            <div>
              <p className="colorBoxP"> 비만 </p>
            </div>
            <div className="colorBoxUnder" id="colorBox6Under">
              {pigBox === 6 && <img src="../pig.png" alt="돼지" className="pigClass" />}
            </div>
          </div>
          <div id="colorBox7">
            <div>
              <p className="colorBoxP"> 심한 비만 </p>
            </div>
            <div className="colorBoxUnder" id="colorBox7Under">
              {pigBox === 7 && <img src="../pig.png" alt="돼지" className="pigClass" />}
            </div>
          </div>
          <div id="colorBox8">
            <div>
              <p className="colorBoxP"> 아주 심한 비만 </p>
            </div>
            <div className="colorBoxUnder" id="colorBox8Under">
              {pigBox === 8 && <img src="../pig.png" alt="돼지" className="pigClass" />}
            </div>
          </div>
        </div>
        <div id="directionButtons">
          <button id="leftTriangle" onClick={leftClicked}>
          </button>
          <button id="leftSquare" onClick={leftClicked}>
          </button>
          <div id="centerBox">
            <p id="centerBoxP"> 해당 단계가 되려면 최소 {moreValue}kg를 더 {moreOrLess} 합니다. </p>
            <p id="centerBoxPSmall"> {moreOrLess2}{moreValue}kg </p>
          </div>
          <button id="rightSquare" onClick={rightClicked}>
          </button>
          <button id="rightTriangle" onClick={rightClicked}>
          </button>
        </div>
        <p id="who"> BMI 계산은 WHO(세계보건기구)의 기준을 따르고 있습니다. 해당 단계까지 가야하는 몸무게 차이의 소수점은 올림되어 정수로 표시됩니다. </p>
      </div>
      <div id="footer">
        <p> © 2025 함승주. All rights reserved. </p>
      </div>
    </div>
  );
}

export default App;