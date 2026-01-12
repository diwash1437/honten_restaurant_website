import { Link } from "react-router-dom"
export function VegetableSoupOrder()
{
    return(
    <>
    <Link to="/">Home</Link>
    <h3>Vegetable Soup Order Set</h3>
    <ul>
        <li>Mushroom(shimaji): 2pack</li>
        <li>Carrot: 3piece</li>
        <li>Onion: 1pack</li>
        <li>Cabbage: Half</li>
    </ul>
    </>
    )
}