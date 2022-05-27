import styles from './NavBar.module.scss';
import Container from '../Container/Container';
import { Link } from 'react-router-dom';


const NavBar = () => {
    return (
      <nav className={styles.navbar}>
        <Container className={styles.nav__container}>
          <div className={styles.nav__wrapper}>
            <div className={styles.nav__icon}>
                <a href="/"><i class="fa fa-tasks"></i></a>
            </div>
            <div className={styles.nav__menu}>
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/favorite">Favorite</Link></li>
                <li><Link to="/about">About</Link></li>
              </ul>
            </div>
          </div>
          
          
        </Container>
      </nav>
            
    )
}

export default NavBar;