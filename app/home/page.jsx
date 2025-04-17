"use client";

import { useEffect, useState } from "react";
import CharacterCard from "../../components/CharacterCard";
import styles from "../home/Home.module.css"
import axios from "axios";


export default function Home() {
    const [search, setSearch] = useState("");
    const [characters, setCharacters] = useState([]);
    const [notFound, setNotFound] = useState(false);



    const fetchCharacters = async (name = "") => {
        setNotFound(false);
        try {
            const { data } = await axios.get(`https://rickandmortyapi.com/api/character/?name=${name}`);
            setCharacters(data.results);
        } catch {
            setCharacters([]);
            setNotFound(true);
        }
    }
    
    useEffect(() => {
        fetchCharacters();
    } 
);

return (
    <div className={styles.container} >
        <h1 className={styles.title}>Personagens de Rick and Morty</h1>
        <div className={styles.controls}>
            <input type = "text" placeholder="Buscar por nome" value={search} onChange={(e) => setSearch(e.target.value)} className={styles.input} />

            <button onClick={()  => fetchCharacters(search.trim())} className={styles.buttonSearch}>Buscar</button>

            <button onClick={() => {
                setSearch("");
                fetchCharacters();
            }} className={styles.buttonReset}>Resetar</button>
        </div>
        <div className={styles.grid}>
       {characters.map((char) => (
            <CharacterCard key={char.id} character={char} />
        ))}
    </div>
    </div>
);
}