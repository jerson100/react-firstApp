import React from 'react'

const GifGridItem = ({id, title, url}) => {

    return (
        <>
            <li className="card__item fade-in">
                <article className="card__article">
                    <header className="card__header">
                        <img
                            src={url}
                            name={title}
                            alt={title}
                            className="card__img"
                        />
                    </header>
                    <footer className="card__footer">
                        <h1 className="card__title">
                            {title}
                        </h1>
                    </footer>
                </article>
            </li>
        </>
    )

}

export default GifGridItem;