import {useState, useEffect} from "react";
import styles from "./DigitalGarden.module.css";
import AddOpenSource from "@/components/AddOpenSource";

const DigitalGarden = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [projects, setProjects] = useState([]);
    const [search, setSearch] = useState("");

    const fetchProjects = async () => {
        const response = await fetch("https://api.github.com/users/kodizim/repos");
        const data = await response.json();
        setProjects(data);
    };

    useEffect(() => {
        fetchProjects();
    }, []);

    const filteredProjects = projects.filter((project) => project.name.toLowerCase().includes(search.toLowerCase()));

    const handleSetIsModalOpen = (value) => {
        setIsModalOpen(value);
        fetchEvents();
    }

    return (
        <>
            {isModalOpen && <AddOpenSource setIsModalOpen={handleSetIsModalOpen}/>}
            <div className={styles.container}>
                <h1 className={styles.title}>Digital Garden</h1>
                <div className={styles.toolbar}>
                    <input
                        className={styles.searchBar}
                        type="text"
                        placeholder="Search..."
                        onChange={(e) => setSearch(e.target.value)}
                    />
                    <button className={styles.addButton} onClick={() => window.open("https://github.com/kodizim")}>Proje
                        Ekle
                    </button>
                </div>
                <div className={styles.grid}>
                    {filteredProjects?.map((project) => (<div className={`${styles.project}`} key={project.id}>
                            <div className={`${styles.card}`}>
                                <div className={`${styles.cardHeader}`}>
                                    <h5 className={`${styles.cardTitle}`}>{project.name}</h5>
                                    <span className={`${styles.stars}`}>
                  ⭐ {project.stargazers_count}
                </span>
                                </div>
                                <div className={`${styles.cardBody}`}>
                                    <p className={`${styles.cardText}`}>{project.description}</p>
                                    <div className={`${styles.info}`}>
                  <span className={`${styles.issues}`}>
                    🐞 {project.open_issues_count} Issues
                  </span>
                                        <span className={`${styles.contributors}`}>
                    👥 {project.contributors_url.length} Contributors
                  </span>
                                    </div>
                                    <a
                                        className={`${styles.cardLink}`}
                                        href={project.html_url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        View on GitHub
                                    </a>
                                </div>
                            </div>
                        </div>))}
                </div>
            </div>
        </>
    );
};

export default DigitalGarden;
