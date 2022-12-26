import React from 'react';
import { Counter } from './features/counter/Counter';
import './App.css';
import Productlist from './components/Productlist';

function App() {
  return (
    <div className='wrapper'>
      <div className='search1'>
        <p>상품 검색</p>
      </div>
      <div className='search2'>
        <p>검색</p>
        <select name="category">
          <option value="">전체</option>
          <option value="상품번호">상품번호</option>
          <option value="상품명">상품명</option>
          <option value="브랜드">브랜드</option>
          <option value="상품내용">상품내용</option>
        </select>
        <input placeholder='입력하세요...' />
        <button>조회</button>
      </div>

      <h4 className='total'>검색된 데이터 : 건</h4>

      <div className='content'>
        <div>상품번호</div>
        <div>상품명</div>
        <div>브랜드</div>
        <div>상품내용</div>
        <div>가격</div>
        <div>평점</div>
        <div>재고</div>
      </div>
      <Productlist />
      <div className='navigation'>1</div>
      <Counter />
    </div>
  )
}

export default App;
