import React, { useState } from 'react'
import AddCategory from './AddCategory'
import Gifts from './Gifts'

const GiftExpertApp = () => {

    const [category, setCategory] = useState(['perú']);

    const addCategory = (newCategory) => {
        setCategory((prev)=>[newCategory,...prev]);
    };

    return (
        <>
            <h2 className="giftExpertApp__title">GiftExpertApp</h2>
            <AddCategory addCategory={ addCategory }/>
            <Gifts category={ category }/>
        </>
    )

};

export default GiftExpertApp;
