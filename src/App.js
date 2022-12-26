import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { getProducts } from './app/feature/product/productsSlice';
import Pagination from './components/Pagination';
import Productlist from './components/Productlist';

function App() {
  const products = useSelector((state) => state.products.products);
  const [datas, setDatas] = useState([]);     // 상품 개수
  const [limit, setLimit] = useState(10);      // 페이지에사 보이는 상품의 개수
  const [page, setPage] = useState(1);        // 현재 페이지 번호
  
  useEffect(() => {
    setDatas(products);
  }, [products]);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  

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

      <h4 className='total'>검색된 데이터 : {datas.length}건</h4>

      <div className='content'>
        <div>상품번호</div>
        <div>상품명</div>
        <div>브랜드</div>
        <div>상품내용</div>
        <div>가격</div>
        <div>평점</div>
        <div>재고</div>
      </div>

      <Productlist limit={limit} page={page} />
      <Pagination total={datas.length} limit={limit} page={page} setPage={setPage} />
    </div>
  )
}

export default App;
