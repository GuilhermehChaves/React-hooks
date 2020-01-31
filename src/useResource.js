import { useState, useEffect } from 'react';
import axios from 'axios';

const useResouces = (resource) => {
    const [resources, setResources] = useState([]);

    //Monitora a variável do array e executa a função quando ela é alterada
    useEffect(() => {
       (async resource => {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/${resource}`
       ); 
       setResources(response.data);
       })(resource);

    }, [resource]);

    return resources;
}

export default useResouces;