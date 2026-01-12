import {pickurusuRecipe} from '../pickurusuRecipe.js';
import { Link } from "react-router-dom";

export function PickurusuRecipe()
{

    return(
    pickurusuRecipe.map((pickurusuRecipe)=>{
    return(
        <div key={pickurusuRecipe.id} >
            <h2>Pickurusu recipe</h2>
            <ul >
                <li>Bottle: {pickurusuRecipe.bottle}</li>
                <li>Water need {pickurusuRecipe.water} bottle finish</li>
                <li>Piro: {pickurusuRecipe.piro} </li>
                <li>Patta: {pickurusuRecipe.patta}</li>
                <li>Sugar: {pickurusuRecipe.sugar}</li>
            </ul>
            <Link to="/">Home</Link>

        </div>
    )
    })
    )
}