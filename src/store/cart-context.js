import React from 'react';

const CreateContext = React.createContext({
    items: [],
    totalAmount: 0,
    addItem: [],
    removeItem: (id) => {}
});

export default CreateContext;