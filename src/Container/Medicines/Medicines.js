import React from 'react';
import List from '../../Components/List/List';

function Medicines({data}) {

    return (
        <div>
            <List data = {data}/>
        </div>
    );
}

export default Medicines;