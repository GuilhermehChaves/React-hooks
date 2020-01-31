import React, { useState } from 'react';
import ResourceList from './ResourceList';

const App = () => {

        const [resource, setResouce] = useState('posts');

        return(
            <div>
                <div>
                    <button onClick={() => setResouce('posts')}>Post</button>
                    <button onClick={() => setResouce('todos')} >Todos</button>
                </div>
                    <ResourceList resource={resource}/>
            </div>
        );
}

export default App;