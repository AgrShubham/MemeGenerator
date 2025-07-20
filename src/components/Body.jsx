import React from "react"
import memesData from "../memesData"




export default function Body(){

    const [meme, setMeme]= React.useState(
        {
            topText:"",
            bottomText:"",
            randomImage:"http://i.imgflip.com/1bij.jpg"
        }
    )

    const [allMemeImages, setAllMemeImages]= React.useState(memesData)

function getMemeImage()
{
    const memesArray= allMemeImages.data.memes
    const randomMeme= Math.floor(Math.random() * memesArray.length)
    const url= memesArray[randomMeme].url
    setMeme(prevMeme => ({
        ...prevMeme,
        randomImage: url
    })
    )
}

    return(
        <main>
        <div className="form">
            <input 
            className="input"
            type="text" 
            placeholder="Top Text" 
            />
            <input 
            className="input"
            type="text" 
            placeholder="Bottom Text"
            />
            <button 
            onClick={getMemeImage} 
            className="button">
                Get me a new meme image 🖼️
            </button>

            <div className="meme-container">
                <img 
                className="meme-image" 
                src={meme.randomImage} 
                alt="Your meme shows here" />
            </div>
        </div>
        </main>
    )
}