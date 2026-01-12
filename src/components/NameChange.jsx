import { useState } from "react";

function NameChange()
{
      // this holds the current input value (typing)
    const [name, setNameChange]=useState("");
    // / this holds the saved name after clicking
    const [saveName, setSavedName]=useState([]);
    // function nameChange(){
    //    setNameChange('diwash')
    // }

      // update input as user types
    function handleFunction(e)
    {
        setNameChange(e.target.value)
    }

    // save input to savedName when clicking Add
    function handleAddFunction()
    {
        // setSavedName(name); only one item at a time
        //now want to save it in array
          // add the new name to the array
        setSavedName([...saveName, name]);
        setNameChange(""); // optional: clear input
    }
    return(
    <>
    {/* <input type="text" name="" id="" /> */}
    <p>diwash</p>
    <input type="text" name="" id="" value={name} onChange={handleFunction}/>
    <button onClick={handleAddFunction}>Add</button>
    <p>name: {name}</p>
    <p>name: {saveName}</p>
    </>
    )
}


// 🔑 How it works
// State	Updates when
// inputValue	On every keystroke
// savedName	Only when clicking Add
export default NameChange;