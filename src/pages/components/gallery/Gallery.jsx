import styles from './gallery.module.css'

export default function Gallery () {
    return (
            <>
                <section id="gallery" className={styles.gallery}>
                <div className={styles.container}>
                    <h2>Galeria de Fotos</h2>
                    <img src="images/heading-ic.png" alt="Galeria de Fotos"/>

                    <div className={styles.galleryWrapper}>
                        <div>
                            <img src="images/gallery-img1.png" alt="Galeria"/>
                        </div>
                        <div>
                            <img src="images/gallery-img2.png" alt="Galeria"/>
                        </div>
                        <div>
                            <img src="images/gallery-img3.png" alt="Galeria"/>
                        </div>
                        <div>
                            <img src="images/gallery-img5.png" alt="Galeria"/>
                        </div>
                        <div>
                            <img src="images/gallery-img6.png" alt="Galeria"/>
                        </div>
                        <div>
                            <img src="images/gallery-img7.png" alt="Galeria"/>
                        </div>
                    </div>
                </div>
            </section>
            </>

    )
}