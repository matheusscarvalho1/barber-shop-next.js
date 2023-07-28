import Map from '../iframe/iframe'

import styles from './map.module.css'



export default function Mapa() {
    return (
            <>
            <section id="location" className={styles.location}>
                <div className={styles.container}>
                    <div className={styles.head}>
                        <div className={styles.info}>
                        <div className={styles.icon}>
                                <img src="images/map-img1.png" alt= "Localização"/>
                            </div>
                            <div className={styles.text}>
                                <span>Localização</span>
                                <span>Rua Matrix, 152</span>
                            </div>
                            </div>

                            <div className={styles.info}>
                            <div className={styles.icon}>
                                    <img src="images/map-img2.png" alt= "Localização"/>
                                </div>
                                <div className={styles.text}>
                                    <span>Telefone</span>
                                    <span>(65) 99999-9999</span>
                                </div>
                                </div>

                                <div className={styles.info}>
                                <div className={styles.icon}>
                                        <img src="images/map-img3.png" alt= "Localização"/>
                                    </div>
                                    <div className={styles.text}>
                                        <span>E-mail</span>
                                        <span>cantato@barbershop.com</span>
                                    </div>
                                    </div>


                                    <div className={styles.info}>
                                    <div className={styles.icon}>
                                            <img src="images/map-img4.png" alt= "Localização"/>
                                        </div>
                                        <div className={styles.text}>
                                            <span>Horário</span>
                                            <span>Seg. à Sex: 9AM às 17PM</span>
                                        </div>
                                        </div>
                        </div>
                        <div>

                        <Map />

                        </div>
                    </div>
        
            </section>

            <footer className={styles.footer}>
                © 2023 Barber Shop - Todos os direitos reservados
                    <p>Developed by Matheus Carvalho</p>
            </footer>
        
        </>

    )
}