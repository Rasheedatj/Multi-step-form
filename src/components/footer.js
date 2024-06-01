import { Link } from 'react-router-dom';

export default function Footer({ nextPage, prevPage }) {
  return (
    <footer style={{ display: 'flex', justifyContent: 'space-between' }}>
      <Link to={prevPage}>
        <button
          style={{
            backgroundColor: 'transparent',
            color: 'hsl(231, 11%, 63%)',
          }}
        >
          Prev
        </button>
      </Link>
      <Link to={nextPage}>
        <button
          style={{
            backgroundColor: 'hsl(213, 96%, 18%)',
            color: 'hsl(0, 0%, 100%)',
          }}
        >
          Next
        </button>
      </Link>
    </footer>
  );
}
