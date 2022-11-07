// create your App component here
import React, {useState, useEffect} from "react";

function App () {

    const [dogImage, setDogImage] = useState('');

    useEffect(()=> {
        fetch("https://dog.ceo/api/breeds/image/random")
        .then((res)=>res.json())
        .then((dog)=>setDogImage(dog.message))
            
        }, [])
        
            
    return (
        <div>
            Hello
            Here is a dog image:
            <p>Loading...</p>
            <img src={dogImage} alt="A Random Dog"></img>
        </div>
    )
}

export default App;