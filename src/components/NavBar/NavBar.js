import styles from './NavBar.module.scss';
import Container from '../Container/Container';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
      <nav className={styles.navbar}>
        <Container className={styles.nav__container}>
          <div className={styles.nav__wrapper}>
            <div className={styles.nav__icon}>
                <a href="/"><i className="fa fa-tasks"></i></a>
            </div>
            <div className={styles.nav__menu}>
              <ul>
                <li><NavLink
                  className={({ isActive }) => isActive ?
                  styles.linkActive : undefined}
                  to="/">Home</NavLink>
                </li>
                <li><NavLink
                  className={({ isActive }) => isActive ?
                  styles.linkActive : undefined}
                  to="/about">About</NavLink>
                </li>
                <li><NavLink
                  className={({ isActive }) => isActive ?
                  styles.linkActive : undefined}
                  to="/favorite">Favorite</NavLink>
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </nav>  
    )
}

export default NavBar;