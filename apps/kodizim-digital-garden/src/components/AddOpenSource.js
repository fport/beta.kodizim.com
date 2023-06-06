import styles from "./DigitalGarden.module.css"

function AddOpenSource({ setIsModalOpen }) {

    const handleOutsideClick = (e) => {
        if (e.target.classList.contains(styles.modal)) {
            setIsModalOpen(false)
        }
    }

    return (
        <div className={styles.modal} onClick={handleOutsideClick}>
            <div className={styles.modalContent}>
                <div className={styles.closeIcon}>X</div>
                <iframe
                    src="https://docs.google.com/forms/d/e/1FAIpQLSdhSI779ztqpGf3jjKKJHYMpa8mGpBs9nkyONtIp2BN3_mzoQ/viewform?embedded=true"
                    width="640" height="721" frameBorder="0" marginHeight="0" marginWidth="0">Yükleniyor…
                </iframe>
                <button onClick={() => setIsModalOpen(false)}>Close Modal</button>
            </div>
        </div>
    );
}

export default AddOpenSource;
