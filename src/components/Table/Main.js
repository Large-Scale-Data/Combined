import React from "react";
export const TableComponent = ({ data, countires }) => {
  return <table style={{width:'100%', tableLayout:'fixed', color:'white'}}>
    <thead>
    <tr style={{background:'#16A085'}}>
      <th>Region</th>
      <th>Product Name</th>
      <th>Allergy</th>
    </tr>
    </thead>
    <tbody>
    { console.log(data) }
    {data.map((val, key) => {
        return (
          <tr key={key} style={{color:'black'}}>
            <td style={{color:'black'}}>{val.region}</td>
            <td style={{color:'black'}}>{val.product}</td>
            <td style={{color:'black'}}>{val.allergy}</td>
          </tr>
        )
      })}
    </tbody>
    </table>;
}
  