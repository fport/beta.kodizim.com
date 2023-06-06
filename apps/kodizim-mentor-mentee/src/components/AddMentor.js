import styles from "./Layout.module.css"

function AddMentor({ setIsModalOpen }) {

    const handleOutsideClick = (e) => {
        if (e.target.classList.contains(styles.mModal)) {
            setIsModalOpen(false)
        }
    }

    return (
        <div className={styles.mModal} onClick={handleOutsideClick}>
            <div className={styles.mModalContent}>
                <div>X</div>
                <iframe
                    src="https://docs.google.com/forms/d/e/1FAIpQLScBVFXdKKF2lqtobb9NY8XPLsRWariV-U_CfOQPP29_QZTt-Q/viewform?embedded=true"
                    width="640" height="1272" frameBorder="0" marginHeight="0" marginWidth="0">Yükleniyor…
                </iframe>
                <button onClick={() => setIsModalOpen(false)}>Close Modal</button>
            </div>
        </div>
    );
}

export default AddMentor;
