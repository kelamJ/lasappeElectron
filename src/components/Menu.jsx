import { NavLink } from 'react-router-dom';

export default function Menu() {
    return (
        <div className="menu">
            <ul>
                <li><NavLink to={"/"} className={({ isActive }) => (isActive ? "activeLink" : undefined)}>Accueil</NavLink></li>
                <li><NavLink to={"/cat-add"} className={({ isActive }) => (isActive ? "activeLink" : undefined)}>Catégories</NavLink></li>
                <li><NavLink to={"/pro-add"} className={({ isActive }) => (isActive ? "activeLink" : undefined)}>Produits</NavLink></li>
            </ul>
        </div>
    )
}