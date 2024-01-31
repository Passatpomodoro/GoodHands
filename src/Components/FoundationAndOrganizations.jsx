import React, { useState, useEffect } from 'react';
import { supabase } from '/src/Utils/supabase.js';

export default function FoundationAndOrganizations() {
    const [data, setData] = useState([]);
    const [sortType, setSortType] = useState('Fundacja');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const { data, error } = await supabase
                    .from('Table')
                    .select('*')
                    .eq('Type', sortType)  // Dodaj warunek, aby pobierać tylko dane z danym typem
                    .order('Type');

                if (error) {
                    throw new Error(`Request failed with error: ${error.message}`);
                }

                setData(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [sortType]);  // Dodaj sortType do zależności useEffect, aby ponownie pobrać dane przy zmianie sortowania

    const handleSort = async (type) => {
        try {
            let order = { ascending: true }; // Domyślne sortowanie rosnące

            if (type === sortType) {
                // Jeśli kliknięto przycisk o aktualnie wybranym typie, zmień kierunek sortowania
                order.ascending = !order.ascending;
            }

            const { data, error } = await supabase
                .from('Table')
                .select('*')
                .eq('Type', type)  // Dodaj warunek, aby pobierać tylko dane z danym typem
                .order('Type', order);

            if (error) {
                throw new Error(`Request failed with error: ${error.message}`);
            }

            setData(data);
            setSortType(type);
        } catch (error) {
            console.error('Error sorting data:', error);
        }
    };

    return (
        <>
            <div className="foundation-and-organizations" id="foundation-and-organizations">
                <div className="foundation-and-organizations-table-title">
                    <h1>Komu pomagamy?</h1>
                    <img className="login-container-img" src="/src/assets/Decoration.svg" />
                    <div className="foundation-and-organizations-buttons">
                        <button className={sortType === 'Fundacja' ? 'active' : ''} onClick={() => handleSort('Fundacja')}>
                            Fundacjom
                        </button>
                        <button className={sortType === 'Organizacja pozarządowa' ? 'active' : ''} onClick={() => handleSort('Organizacja pozarządowa')}>
                            Organizacjom pozarządowym
                        </button>
                        <button className={sortType === 'Lokalna zbiórka' ? 'active' : ''} onClick={() => handleSort('Lokalna zbiórka')}>
                            Lokalnym zbiórkom
                        </button>
                    </div>
                    <h2>W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują.</h2>
                </div>
                <ul className="home-foundation-list">
                    {data &&
                        data.map((item) => (
                            <li key={item.id}>
                                <div className="home-list">
                                    <div className="home-list-elements">
                                        <h3>{item.Name}</h3>
                                        <p>{item.Mission}</p>
                                    </div>
                                    <div className="home-list-element">
                                        <p>{item.What}</p>
                                    </div>
                                </div>
                            </li>
                        ))}
                </ul>
                <div>
                    <button className={sortType === 'Fundacja' ? 'active' : ''} onClick={() => handleSort('Fundacja')}>
                        1
                    </button>
                    <button className={sortType === 'Organizacja pozarządowa' ? 'active' : ''} onClick={() => handleSort('Organizacja pozarządowa')}>
                        2
                    </button>
                    <button className={sortType === 'Lokalna zbiórka' ? 'active' : ''} onClick={() => handleSort('Lokalna zbiórka')}>
                        3
                    </button>
                </div>
            </div>
        </>
    );
}
