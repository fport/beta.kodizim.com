import styles from "./Freelance.module.css"

function AddFreelance({ setIsModalOpen }) {

    const handleOutsideClick = (e) => {
        if (e.target.classList.contains(styles.fModal)) {
            setIsModalOpen(false)
        }
    }

    return (
        <div className={styles.fModal} onClick={handleOutsideClick}>
            <div className={styles.fModalContent}>
                <div>X</div>
                <iframe
                    src="https://docs.google.com/forms/d/e/1FAIpQLSckHL-nKH7G68nFh8KhObuEW6gWHd1JsQdVVdHpm6JUT37fWA/viewform?embedded=true"
                    width="640" height="781" frameBorder="0" marginHeight="0" marginWidth="0">Yükleniyor…
                </iframe>
                <button onClick={() => setIsModalOpen(false)}>Close Modal</button>
            </div>
        </div>
    );
}

export default AddFreelance;
