import {useState,useEffect} from 'react'
import getGifs from '../helpers/fetchGift'

function useFetchGift({category}) {
    
    const [image, setImage] = useState({
        data:[],
        loading:true
    });

    useEffect(() => {
        getGifs(category).then(data=>{
            setImage({
               data,
               loading:false
            })
        });
    }, [category])

    return image;

}

export default useFetchGift
