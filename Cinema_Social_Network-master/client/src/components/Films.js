import React, {useState, useEffect} from 'react';
import Axios from 'axios';
import { link } from 'react-router-dom';


function Films() {

    const [films, setfilms] = useState([]);
    /*
    useEffect(() => {
        fetchfilms();
    }, []);*/
    useEffect(() => {
        Axios
            .get("http://localhost:3001/films")
            .then(response => {
                setfilms(response.data);
            });
    }, []);

    /*
    const fetchfilms = async () => {
        const data = await fetch('http://localhost:3001/films');
        const films = await data.json();
        console.log(films);
        setfilms(films);
    };*/

    return (
        <div>
            {JSON.stringify(films)}
        </div>
        );
}
export default Films;

