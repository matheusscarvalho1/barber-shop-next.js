import styles from './about.module.css'

export default function About () {
    return (
        <>
            <div id="about" className={styles.about}>
                <div className={styles.container}>
                    <div className={styles.timing}>
                        <div className={styles.overlay}>
                            <img src="images/classic-cut.png" alt="Horários" className={styles.iconcut}/>
                            <h3>Horários</h3>
                                <div className={styles.text}>
                                    <h4> Segunda à Sexta </h4>
                                    <span>09:00 AM - 17:00 PM</span>
                                </div>
                                <div className={styles.text}>
                                    <h4> Sábado </h4>
                                    <span>09:00 AM - 14:00 PM</span>
                                </div>
                                <div className={styles.text}>
                                    <h4> Domingo </h4>
                                    <span>Fechado</span>
                                </div>
                                <br/>
                            <img src="images/loc-ic.png" alt="Localização"/>
                            <span>Rua Matrix, 152</span>
                            <br/>
                            <img src="images/phone-ic.png" alt="Descrição da imagem"/>
                            <span>(65) 99999-9999</span>
                        </div>
                    </div>
                    <div className={styles.experience}>
                        <span>Uma história única</span>
                        <h2>52 anos de experiência</h2>
                    
                            <div className={styles.text}>
                                    <div>
                                    <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem aliquam quae itaque natus distinctio blanditiis porro, rerum animi? Maxime, asperiores omnis accusantium eius consequatur atque natus! Doloribus esse delectus dolorum!
                                    </p>

                                    <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem aliquam quae itaque natus distinctio blanditiis porro, rerum animi? Maxime, asperiores omnis accusantium eius consequatur atque natus! Doloribus esse delectus dolorum!
                                    </p>
                                    </div>

                                <img src="images/shave-brush.jpg" alt="52 anos de experiência"/>
                            </div>
                    </div>
            </div>
        </div>
        </>
    )
}
