import React, {useState, useEffect} from "react";
import styles from "./Freelance.module.css";
import AddFreelance from "./AddFreelance";

export default function FreelancePage() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [events, setEvents] = useState([]);
    const [search, setSearch] = useState("");

    const fetchEvents = async () => {
        const response = await fetch("http://localhost:8080/api/v1/public/freelance-jobs");
        const data = await response.json();
        setEvents(data.data);
    };

    useEffect(() => {
        fetchEvents();
    }, []);

    const filteredEvents = events.filter((event) =>
        event.title.toLowerCase().includes(search.toLowerCase())
    );

    const handleSetIsModalOpen = (value) => {
        setIsModalOpen(value);
        fetchEvents();
    }

    return (
        <>
            {isModalOpen && <AddFreelance setIsModalOpen={handleSetIsModalOpen}/>}
            <div className={styles.container}>
                <h1 className={styles.title}>Freelance İşler</h1>
                <div className={styles.toolbar}>
                    <input
                        className={styles.searchBar}
                        type="text"
                        placeholder="Search..."
                        onChange={(e) => setSearch(e.target.value)}
                    />
                    <button className={styles.addButton} onClick={() => setIsModalOpen(true)}>Ekle</button>
                </div>
                <div className={styles.table}>
                    <div className={styles.tableHeader}>
                        <div className={styles.tableColumn}>Başlık</div>
                        <div className={styles.tableColumn}>Açıklama</div>
                        <div className={styles.tableColumn}>İş Veren Maili</div>
                    </div>
                    {filteredEvents.map((event, index) => (
                        <div key={index} className={styles.tableRow}>
                            <div className={styles.tableColumn}>{event.title}</div>
                            <div className={styles.tableColumn}>{event.description}</div>
                            <div className={styles.tableColumn}>{event.email}</div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};
