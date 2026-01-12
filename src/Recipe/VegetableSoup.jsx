import { Link } from "react-router-dom"
export function VegetableSoup()
{
    return(
        
        <div className="vegetable-container">
        <Link to="/">Home</Link>
        <h3>vegetable Recipe</h3>
        <div>
        <ul>
            <li>Mushroom (japanese name:- simeji)</li>
            <li>Cabage :- half cut</li>
            <li>Carrot :- small cut on cube</li>
            <li>Onion :- 1pack(4piece)</li>
        </ul>
        </div>
        <div>
            <span>How to make </span>
            <ul>
                <li>1st. water till the end of miso soup and put suji meat</li>
                <li>Boil boil mid fire for sort period of time and then put it wash on wash place</li>
                <li>Again put water like miso soup and put all the meat inside and boil in mid till it feel its okay</li>
                <li>Put onion cut one and after sometime put carrot and after some time mushroom and at last put cabbage all are cut</li>
                <li>last put all the meat with soup in vegetable and put many salt and paper and that rice make masala</li>
                <li>Boil boil and taste if it okay keep it</li>
            </ul>
        </div>
 
        </div>

        
    )
}