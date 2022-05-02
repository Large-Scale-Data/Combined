import React, { useState } from "react";
import { Data } from "../../Data";

  export const FilterCountries = ({countries, setData}) => {
    const filterCountry = (curcat) => {
      const newItem = Data.filter((newVal) => {
        return newVal.region === curcat;
      });
      setData(newItem);
    };

    return <div div style={{display:'flex', padding:'10px', flexDirection:'column'}}>
      <b> Filter by countries </b>
      <div style={{ display: 'flex', flexDirection: 'column'}}>
      { countries.map(country =>
          <label style={{ display: 'flex' }}>
            <div>{country}</div>
            <input type="checkbox" onClick={()=> filterCountry(country)}></input>
          </label>
        )
      }
      </div>
    </div>
  }
  
  