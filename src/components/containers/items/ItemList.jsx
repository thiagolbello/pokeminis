import { Box } from '@mui/material';
import React from 'react'
import Item from './Item';

const ItemList = ({ details }) => {

    return (
        <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', margin: '2em' }}>
            {details.map((details) => (
                <Item key={details.id} details={details}/>
            ))}
        </Box>

    );
}

export default ItemList