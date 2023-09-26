import { Link } from 'react-router-dom';

export default function NavigationLinks({ onClick }) {
  return (
    <nav className="flex flex-col md:flex-row items-center gap-10 font-semibold text-xs">
      <Link to="/products" onClick={onClick}>
        NEW
      </Link>
      <Link to="/products" onClick={onClick}>
        SHOES
      </Link>
      <Link to="/products" onClick={onClick}>
        SALE
      </Link>
      <Link to="/products" onClick={onClick}>
        EXPOLE BELLO
      </Link>
    </nav>
  );
}
