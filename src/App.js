import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';

function App() {

  const [height, setHeight] = useState();
  const [weight, setWeight] = useState();
  const [bmiStatus, setBmiStatus] = useState('');
  const [maxOrMin, setMaxOrMin] = useState('최소 / 최대');
  const [diffWeight, setDiffWeight] = useState();
  const [moreOrLess, setMoreOrLess] = useState('늘려야 / 빼야');

  function consoleFunction() {
    console.log(height);
    console.log(weight);
  }
  consoleFunction();

  useEffect(() => {
    if (height != undefined && weight != undefined) {
      var statusF = document.getElementById('status');
      var bmiValue = weight / ((height / 100) * (height / 100));
      console.log(bmiValue);
      if (bmiValue < 16) {
        setBmiStatus('심한 마름');
      }
      else if (bmiValue < 17) {
        setBmiStatus('많이 마름');
      }
      else if (bmiValue < 18.5) {
        setBmiStatus('조금 마름');
      }
      else if (bmiValue < 25) {
        setBmiStatus('보통 체중');
      }
      else if (bmiValue < 30) {
        setBmiStatus('약간 과체중')
      }
      else if (bmiValue < 35) {
        setBmiStatus('비만');
      }
      else if (bmiValue < 40) {
        setBmiStatus('심한 비만');
      }
      else {
        setBmiStatus('아주 심한 비만');
      }
      document.getElementById('status').innerHTML = bmiStatus;
    }
  }, [height, weight, bmiStatus]);

  return (
    <div className="App">
      <div className="container">
        <div id="header">
          <h1 id="headerTitle"> BMI 변화 계산기 </h1>
        </div>
        <div id="websiteDescription">
          <p> 어서 오세요! 키가 지금과 똑같을 때 몇 kg까지 빼야/늘려야 BMI 전/다음 단계로 넘어갈 수 있을까 계산해주는 웹사이트입니다.</p>
        </div>
        <div id="inputForms">
          <input id="heightR" type="number" placeholder="키(cm)" onChange={(h) => setHeight(h.target.value)} />
          <input id="weightR" type="number" placeholder="몸무게(kg)" onChange={(w) => setWeight(w.target.value)} />
          <button type="submit"> 입력 제출 </button>
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
            </div>
          </div>
          <div id="colorBox2">
            <div>
              <p className="colorBoxP"> 많이 마름 </p>
            </div>
            <div className="colorBoxUnder" id="colorBox2Under">
            </div>
          </div>
          <div id="colorBox3">
            <div>
              <p className="colorBoxP"> 조금 마름 </p>
            </div>
            <div className="colorBoxUnder" id="colorBox3Under">
            </div>
          </div>
          <div id="colorBox4">
            <div>
              <p className="colorBoxP"> 보통 체중 </p>
            </div>
            <div className="colorBoxUnder" id="colorBox4Under">
            </div>
          </div>
          <div id="colorBox5">
            <div>
              <p className="colorBoxP"> 약간 과체중 </p>
            </div>
            <div className="colorBoxUnder" id="colorBox5Under">
            </div>
          </div>
          <div id="colorBox6">
            <div>
              <p className="colorBoxP"> 비만 </p>
            </div>
            <div className="colorBoxUnder" id="colorBox6Under">
            </div>
          </div>
          <div id="colorBox7">
            <div>
              <p className="colorBoxP"> 심한 비만 </p>
            </div>
            <div className="colorBoxUnder" id="colorBox7Under">
            </div>
          </div>
          <div id="colorBox8">
            <div>
              <p className="colorBoxP"> 아주 심한 비만 </p>
            </div>
            <div className="colorBoxUnder" id="colorBox8Under">
            </div>
          </div>
        </div>
        <div id="directionButtons">
          <div id="leftButton">
            <div id="leftTriangle">
            </div>
            <div id="leftSquare">
            </div>
          </div>
          <div id="centerBox">
            <p> 해당 단계가 되려면 {maxOrMin} {diffWeight}kg를 더 {moreOrLess} 합니다. </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
