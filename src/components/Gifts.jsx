import React from 'react'
import GiftGrid from './GiftGrid'

const Gifts = ({ category }) => {
    
    return (
        <>
            <ol className="giftExpertApp__list">
                {
                    category.map(c => (
                            <GiftGrid 
                                key={c} 
                                category={c}
                            />
                        )
                    )
                }
            </ol>
        </>
    )

};

export default Gifts;