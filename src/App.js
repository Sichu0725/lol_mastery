import './App.css';
import { useState } from 'react';
import styled from 'styled-components'
import Champion from './Champion';

const Input = styled.input`
  width:300px
`
const Button = styled.button`
  width:200px
`

function App() {
  const [text, setText] = useState("");
  const [data, setData] = useState([])

  const getProduct = async () => {
    await fetch("https://kr.api.riotgames.com/lol/summoner/v4/summoners/by-name/" + text +"?api_key=RGAPI-96ce0fa8-4fca-4aa2-86b7-2df2bd61f134").catch(err => alert("비 정상적인 입력입니다.\n"+ err +"\n(사용자의 문제가 없을 시 운영자에게 연락해주세요.)"))
    .then((res) => res.json())
    .then(data =>  fetch(`https://kr.api.riotgames.com/lol/champion-mastery/v4/champion-masteries/by-summoner/${data.id}?api_key=RGAPI-96ce0fa8-4fca-4aa2-86b7-2df2bd61f134`)).then(res => res.json()).then(data => setData(data)).catch(err=> console.log(err))
  }
  const onChange = (e) => {
    setText(e.target.value);
  }


  return (
    <div className="App">
      <Input type="text" value={text} onChange={onChange}></Input>
      <Button onClick={() => getProduct()}>검색</Button>
      <p style={{
        color:"#ccc",
        margin:"0",
        padding:"0",
        position:"fixed",
        bottom:"0",
        display:"block",
        width:"100%",
        textAlign:"center"
      }}>
        챔피언 정보 클릭시 op.gg로 이동됩니담<br/>
        copyright &copy; 2022 최홍찬 & 장휴선
      </p>
      <h1>소환사명: {text}</h1> 
      <Champion champions={data} />
    </div>
  );
}

export default App;
