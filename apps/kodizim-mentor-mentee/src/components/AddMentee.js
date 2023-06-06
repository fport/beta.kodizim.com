import styles from "./Layout.module.css"

function AddMentee({ setIsModalOpen }) {

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
                    src="https://docs.google.com/forms/d/e/1FAIpQLScEWHDFNw6GQK6r5NFj9aB-4dyAuZ0fHlqdF2qyim3TsTMb7Q/viewform?embedded=true"
                    width="640" height="1330" frameBorder="0" marginHeight="0" marginWidth="0">Yükleniyor…
                </iframe>
                <button onClick={() => setIsModalOpen(false)}>Close Modal</button>
            </div>
        </div>
    );
}

export default AddMentee;
