import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { filterByAll, filterByBrand, filterByDescription, filterByName, getProducts } from './app/feature/product/productsSlice';
import Pagination from './components/Pagination';
import Productlist from './components/Productlist';

function App() {
  const products = useSelector((state) => state.products.products);
  const limitnum = useSelector((state) => state.limit.limit);
  const [datas, setDatas] = useState([]);     // 상품 개수
  const [limit, setLimit] = useState(limitnum);      // 페이지에사 보이는 상품의 개수
  const [page, setPage] = useState(1);        // 현재 페이지 번호
  const [searcfInfo, setSearchInfo] = useState("");

  function search() {
    const searchInfos = document.getElementById('search').value;
    let categorySelect = document.getElementById("category");
    var valueNum = categorySelect.options[document.getElementById("category").selectedIndex].value;
    setSearchInfo(searchInfos);

    if (valueNum === "상품명") 
      dispatch(filterByName(searcfInfo))
    else if (valueNum === "브랜드") 
      dispatch(filterByBrand(searcfInfo))
    else if (valueNum === "상품내용") 
      dispatch(filterByDescription(searcfInfo))
    else if (valueNum === "전체") 
      dispatch(filterByAll(searcfInfo))
  }

  function enterkey() {
    if (window.event.keyCode === 13) {
      search()
    }
  }

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);
  
  useEffect(() => {
    setDatas(products);
    setLimit(limitnum);
  }, [products, limitnum]);

  return (
    <div className='wrapper'>
      <div className='search1'>
        <p>상품 검색</p>
      </div>
      <div className='search2'>
        <p>검색</p>
        <select id="category">
          <option value="전체">전체</option>
          <option value="상품명">상품명</option>
          <option value="브랜드">브랜드</option>
          <option value="상품내용">상품내용</option>
        </select>
        <input id='search' onKeyUp={enterkey} placeholder='입력하세요...' />
        <button onClick={search}>조회</button>
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
