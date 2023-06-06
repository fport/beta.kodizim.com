import React, {useState, useEffect} from "react";
import styles from "./Layout.module.css";
import AddMentee from "./AddMentee";

export default function MenteePage() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [events, setEvents] = useState([]);
    const [search, setSearch] = useState("");

    const fetchEvents = async () => {
        const response = await fetch("http://localhost:8080/api/v1/public/Mentee");
        const data = await response.json();
        setEvents(data.data);
    };

    useEffect(() => {
        fetchEvents();
    }, []);

    const filteredEvents = events?.filter((event) =>
        event.name.toLowerCase().includes(search.toLowerCase())
    );

    const handleSetIsModalOpen = (value) => {
        setIsModalOpen(value);
        fetchEvents();
    }

    return (
        <>
            {isModalOpen && <AddMentee setIsModalOpen={handleSetIsModalOpen}/>}
        <div className={styles.container}>
            <h1 className={styles.title}>Mentee Listesi</h1>
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
                    <div className={styles.tableColumn}>Email</div>
                    <div className={styles.tableColumn}>İsim Soyisim</div>
                    <div className={styles.tableColumn}>GitHub</div>
                    <div className={styles.tableColumn}>Linkedin</div>
                    <div className={styles.tableColumn}>Beklenti</div>
                </div>
                {filteredEvents.map((event, index) => (
                    <div key={index} className={styles.tableRow}>
                        <div className={styles.tableColumn}>{event?.email}</div>
                        <div className={styles.tableColumn}>{event?.name}</div>
                        <div className={styles.tableColumn}>
                            <a target="_blank"
                               rel="noreferrer"
                               href={event["github-url"]}>
                                GitHub Linki
                            </a>
                        </div>
                        <div className={styles.tableColumn}>
                            <a target="_blank"
                               rel="noreferrer"
                               href={event["linkedin-url"]}>
                                Linkedin Linki
                            </a>
                        </div>
                        <div className={styles.tableColumn}>{event?.profession}</div>
                    </div>
                ))}
            </div>
        </div>
            </>
    );
};
