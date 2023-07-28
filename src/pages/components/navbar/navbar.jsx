import styles from './navbar.module.css'

export default function Navbar () {
    return (
        <>  
            <section className={styles.navbar}>
                <header className={styles.header}>
                    <nav className={styles.nav}>
                        <ul>
                            <li>
                                <a href="#home">home</a>
                            </li>
                            <li>
                                <a href="#about">sobre</a>
                            </li>
                            <li>
                                <a href="#services">serviços</a>
                            </li>
                            <li><img src="images/logo.png" alt="Barber Shop" className={styles.logo}></img></li>
                            <li>
                                <a href="#appointment">agendamento</a>
                            </li>
                            <li>
                                <a href="#gallery">galeria</a>  
                            </li>
                            <li>
                                <a href="#location">localização</a>
                            </li>
                        </ul>
                    </nav>
                </header>
        </section>
    </> 
    )
}