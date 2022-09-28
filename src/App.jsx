import { useState } from 'react';
import './App.css';
import TodoBoard from './components/TodoBoard.jsx';

/*
  [개발 전 필독!]
  리액트는 컴포넌트의 집합!
  모든걸 하나하나 나눠서 컴포넌트화시키자(유지보수와 개발을 위해)
  한 페이지에 다 때려넣는게 아님
  그래서 개발 전 무엇을 컴포넌트화 시킬지 생각해보자
  (이건 주관적인 문제)
  하지만 리액트의 매력은 재활용!
  반복되는 것은 반드시 컴포넌트화!
*/

/* 
  [개발 필요 기능]
  1. 인풋창과 버튼이 있다
  2. 인풋창에 값을 입력하고 버튼을 클릭 시 아이템 추가된다
  3. 삭제 버튼을 누르면 아이템 삭제가 가능하다
*/
export default function App() {

  const [inputValue, setInputValue] = useState('');
  const [todoList, setTodoList] = useState([]);

  const addItem = () => {
    console.log('im hereerere!", inputValue', inputValue);
    setTodoList([...todoList, inputValue]);
  }

  /*
    todoList를 TodoBoard로 전달해야하는데 어떻게 전달하나?
    => 이럴 때 props를 쓴다!!    
  */

  // setInputValue = (event) => {
  //     //event.target.value
  // };

  return (
    <main>
      <input type="text" onChange={(event) => setInputValue(event.target.value)} value={inputValue} />
      <button onClick={addItem}>추가</button>

      <TodoBoard todoList={todoList} />
    </main>
  );

}
