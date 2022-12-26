import './Pagination.css';

export default function Pagination({ total, limit, page, setPage }) {
    // 총 페이지 개수
    const numPages = Math.ceil(total / limit);

    return (
        <>
            <nav className='nav'>
                {/* 이전 페이지 */}
                <button className='button' onClick={() => setPage(page - 1)} disabled={page === 1}>&lt;</button>
                {/* 페이지들 */}
                {Array(numPages).fill().map((_, i) => (
                    <button className='button'  key={i + 1} onClick={() => setPage(i + 1)} aria-current={page === i + 1 ? "page" : null}>
                    {i + 1}
                    </button>
                ))}
                {/* 다음 페이지 */}
                <button className='button'  onClick={() => setPage(page + 1)} disabled={page === numPages}>&gt;</button>
            </nav>
        </>
    );
}