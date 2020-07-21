import React,{useState} from 'react'

const AddCategory = ({addCategory}) => {
    
    const [search, setSearch] = useState('');

    const keyUp = (e) => {
        setSearch(e.target.value);
    };

    const submit = (e) => {
        e.preventDefault();
        addCategory(search);
    };

    return (
        <form className="giftExpertApp__form" onSubmit={ submit }>
            <input 
                type="text" 
                className="giftExpertApp__search" 
                onChange= {keyUp} 
                value={ search } 
            />
            <p>{ search }</p>
        </form>  
    )

};

export default AddCategory;