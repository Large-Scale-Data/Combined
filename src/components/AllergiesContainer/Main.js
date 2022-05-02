import React, { useEffect, useState } from "react";
import { Data } from "../../Data";

export const AllergiesContainer = ({allergies, setData}) => {
  const [checked, setChecked] = useState(new Array(allergies.length).fill(false))
  const [filter, setFilter] = useState('none')

  const handleOnChange = (e, position, curcat) => {
    setChecked({ ...checked, [e.target.value]: e.target.checked });
    console.log('checked', checked)
  };

  return <div style={{display:'flex', padding:'10px', flexDirection:'column'}}>
    <b> Select Allergy To Avoid </b>
    { allergies.map((allergy, index) => {//TODO: this is where custom toggle component will go
        return <div key={index}>
          <input
            type="checkbox"
            id={`custom-checkbox-${index}`}
            name={allergy}
            value={allergy}
            checked={checked.allergy}
            onChange={(e) => handleOnChange(e, index, allergy)}
          />
          <label htmlFor={`custom-checkbox-${index}`}>{allergy}</label>
        </div>
      }
    )}
  </div>
}
  
  