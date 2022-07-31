import styles from './Header.module.css';
import Logo from '../assets/Logo.svg';


export function Header(){
    return (
        <header className={styles.header}>
            <div>
                <img src={Logo}/>
            </div>
        </header>
    )
}