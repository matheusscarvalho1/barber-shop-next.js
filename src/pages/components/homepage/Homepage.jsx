import styles from './homepage.module.css'

import Navbar from '@/pages/components/navbar/navbar'
import Content from '@/pages/components/navbar/navbar'

export default function Homepage () {
    return (
        <>
                <div className={styles.home}>
                <Navbar />
                    <div className={styles.banner}>
                        <span className={styles.slogan1}>Profissionalismo e Excelência</span>
                        <h1> Barber Shop</h1>
                        <span className={styles.slogan2}>O melhor lugar para cuidar do seu estilo.</span>
                        <img src="images/much-img.png" alt="Descrição da imagem"/>
                    </div>
                </div>    
        </>
    )
}