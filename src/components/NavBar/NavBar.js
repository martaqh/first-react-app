import styles from './NavBar.module.scss';
import Container from '../Container/Container';


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
                <li>
                <a href="/">Home</a>
                </li>
                <li>
                <a href="/About">About</a>
                </li>
                <li>
                <a href="/Favorite">Favorite</a>
                </li>  
            </ul>
            </div>
          </div>
          
          
        </Container>
      </nav>
            
    )
}

export default NavBar;