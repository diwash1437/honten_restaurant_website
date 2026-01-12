import { useState } from "react";
function NameChangeTry()
{
    const [inputValue, setInputValue]=useState('');
     const [afterSaveName, setAfterSaveName]=useState('');

    function handleTypingInput(e)
    {
        setInputValue(e.target.value);
    }
    function handleAfterSaveInput(e)
    {
        console.log(e.key);
        if(e.key ==='Enter')
        {
            setAfterSaveName(inputValue);
            setInputValue('');
        }
       
    }

    return(
        <>
        <input type="text" 
        placeholder="Enter your name" 
        value={inputValue} 
        onChange={handleTypingInput}
        onKeyDown={handleAfterSaveInput}
        />

        <p>Place: {afterSaveName}</p>
        
        </>
    )

}

export default NameChangeTry;
