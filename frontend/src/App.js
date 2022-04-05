// useState : useState 를 사용하기 위해 react 라이브러리에서 가져옴
// useEffect : useState를 사용하기 위해 react 라이브러리에서 가져옴
import React,{useState, useEffect} from 'react'
import axios from 'axios';
import logo from './logo.svg';
import './App.css';

function App() {

  // db에 저장된 값을 가져와 화면에 보여주기 전 이 State에 넣어둠
  const [lists,setLists] = useState([])

  // input 박스에 입력한 값이 이 State에 들어감
  const [value,setValue] = useState("")

  useEffect(()=>{
    // 여기서 db에 있는 값을 가져옴.
    axios.get('/api/values')
      .then(response => {
        console.log('response',response.data)
        setLists(response.data)
      })
  },[])

  // input box에 입력하면 onChangeEvent가 발생할 때 마다 value 값 셋팅
  const changeHandler = (event) =>{
    setValue(event.currentTarget.value)
  }

  // input box에 입력한 값이 db에 저장되고 그 후에 화면에 표출도 시켜준다.
  const submitHandler = (event) => {
    event.preventDefault(); 
    axios.post('/api/value',
      {value:value})
      .then(response=>{
        if(response.data.success){
          console.log('response.data',response.data)
          setLists([...lists,response.data]);
          setValue("");
        }else{
          alert("값을 db에 넣는데 실패했습니다.");
        }
      })
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="container">
          {lists && lists.map((list,index)=>(
            <li key={index}>{list.value}</li>
          ))}
          <br />

          <form className="example" onSubmit={submitHandler}>
            <input
              type="text"
              placeholder="입력해 주세요 ..."
              onChange={changeHandler}
              // input의 value를 State의 value 로 컨트롤
              value={value}
            />
            <button type="submit">확인</button>
          </form>
        </div>
      </header>
    </div>
  );
}

export default App;
