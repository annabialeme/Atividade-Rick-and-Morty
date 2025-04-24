import styles from "../styles/CharacterCard.module.css";

export default function CharacterCard({ character, onClick }) {
    return (
        <div className={styles.card} onClick={onClick}>
            <h3 className={styles.title}>{character.name}</h3>
            <img src={character.image} alt={character.name} className={styles.avatar} />
            <p className={styles.status}>{character.status} </p>
            <p className={styles.species}>{character.species}</p>
        </div>
    );
}