import React from 'react'
import GifGridItem from './GifGridItem'
import useFetchGift from '../hooks/useFetchGift'

const GiftGrid = ({category}) => {

    const {data, loading} = useFetchGift({category});

    // const [image, setImage] = useState([]);
    // //debemos hacer la petición ajax

    // const url = `https://api.giphy.com/v1/gifs/search?api_key=iDiRfCRYb5UcUSHG5Zj5eUffzIbB61fZ&q=${category}&limit=10`;

    // useEffect(() => {
    //     //similar al componentDidMount de los componentes de clases,
    //     //se ejecuta una única vez depués de que el componente
    //     //se renderize
    //     fetch(url)
    //     .then(response=>{
    //         return response.json();
    //     })
    //     .then(data=>{
    //         console.log(data);
    //         const gifs  = data.data.map(img =>{
    //             return {
    //                 id: img.id,
    //                 title: img.title,
    //                 url: img.images?.downsized_medium.url
    //             };
    //         })
    //         setImage(gifs)
    //     })
    // }, [])

   
    return (
        <>
            <li className="giftExpertApp__item">
                <p>{loading?"Cargando...":""}</p>
                <section className="giftExpertApp__category">
                    <h1 className="giftExpertApp__title"> { category }</h1>
                    <ol className="card card--m-col-2 card--md-col-3 card--d-col-4 card--dl-col-5">
                        { 
                            data.map( (gif) => (
                                <GifGridItem 
                                    key={ gif.id }
                                    { ...gif }
                                />
                            ))
                        }
                    </ol>
                </section>
            </li>
        </>
    )

};

export default GiftGrid;