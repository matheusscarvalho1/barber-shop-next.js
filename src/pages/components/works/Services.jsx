import styles from './services.module.css'

export default function Services () {
    return (
        <>
            <section id="services" className={styles.services}>
            <div className={styles.container}>
            <h2>Nossos Serviços</h2>
            <img src="images/heading-ic.png" alt="Serviços"/>

            <div className={styles.boxes}>
                <div className={styles.box}>
                    <img src="images/classic-cut.png" alt="Classic Cut"/>
                    <h4> Lorem Ipsum</h4>
                    <img src="images/head-line-ic.png" alt="Separador"/>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem doloremque sit voluptatum esse numquam amet repudiandae perspiciatis non, obcaecati veritatis mollitia fuga totam deserunt repellat iste ea, nobis aperiam tempora!
                    </p>
                </div>


                <div className={styles.box}>
                    <img src="images/clipper-cut.png" alt="Clipper Cut"/>
                    <h4> Lorem Ipsum</h4>
                    <img src="images/head-line-ic.png" alt="Separador"/>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem doloremque sit voluptatum esse numquam amet repudiandae perspiciatis non, obcaecati veritatis mollitia fuga totam deserunt repellat iste ea, nobis aperiam tempora!
                    </p>
                </div>

                <div className={styles.box}>
                    <img src="images/razoe-shaver.png" alt="Razor"/>
                    <h4> Lorem Ipsum</h4>
                    <img src="images/head-line-ic.png" alt="Separador"/>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem doloremque sit voluptatum esse numquam amet repudiandae perspiciatis non, obcaecati veritatis mollitia fuga totam deserunt repellat iste ea, nobis aperiam tempora!
                    </p>
                </div>
            
            </div>
        </div>
        </section>
    </>
    )
}