import { useDispatch } from 'react-redux';
import './Pagination.css';
import { limitActions } from "../app/feature/product/productsSlice";

export default function Pagination({ total, limit, page, setPage }) {
    // 총 페이지 개수
    const numPages = Math.ceil(total / limit);
    const dispatch = useDispatch();

    function changeNum() {
        // dispatch(limitActions.changeLimit({limit: 20}));
        let categorySelect = document.getElementById("rows");
        var valueNum = categorySelect.options[document.getElementById("rows").selectedIndex].value;
        dispatch(limitActions.changeLimit({limit: valueNum}))
    }
    
    return (
        <>
            <nav className='nav'>
                <div className='pages'>
                    <p>페이지 당 행 : </p>
                    <select id="rows" onChange={changeNum}>
                        <option value="10">10</option>
                        <option value="20">20</option>
                        <option value="50">50</option>
                    </select>
                </div>
                {/* 이전 페이지 */}
                <button className='button' onClick={() => setPage(page - 1)} disabled={page === 1}>&lt;</button>
                {/* 페이지들 */}
                {Array(numPages).fill().map((_, i) => (
                    <button className='button'  key={i + 1} onClick={() => setPage(i + 1)} aria-current={page === i + 1 ? "page" : null}>
                    {i + 1}
                    </button>
                ))}
                {/* 다음 페이지 */}
                <button className='button' onClick={() => setPage(page + 1)} disabled={page === numPages}>&gt;</button>
            </nav>
        </>
    );
}