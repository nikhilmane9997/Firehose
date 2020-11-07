import React, { useState } from "react";
import Data from "./Receiving.json";
export default function Try() {



    const [checker, setchecker] = useState(false) // parent checkbox
    const [childChecker, setchildChecker] = useState(false)
    const [checks, setchecks] = useState({
      isChecked : false,
    }) // child checkbox
    const [text, settext] = useState({
      isTyped: "",
    })
    const [visible, setvisible] = useState(false)




    const childCheckers = (e, index) => {
      console.log(e.target.name," ", index)
            // setchildChecker(e.target.value)
            setchecks({[e.target.name]: e.target.value})
    }


    const handle = (e) => {
        settext({isTyped: e.target.value})
    }






  return (
    <div>
      <table style={{ border: '2px solid black' }}>
        <thead style={{ border: '2px solid black' }}>
          <tr style={{ border: '2px solid black' }}>
            <th style={{ border: '2px solid black' }}>
            <input type="checkbox"  checked={checker} onChange={handle} onClick={()=>{
                      setchecker(true)
                      setchecks({isChecked:true})
                    }}/>
            </th>
            <th style={{ border: '2px solid black' }}>one</th>
            <th style={{ border: '2px solid black' }}>Two</th>
            <th style={{ border: '2px solid black' }}>Three</th>
          </tr>
        </thead>
        <tbody style={{ border: '2px solid black' }}>
         
         
         
          {Data.orders[0].tracking_units.map((values, index) => {
            return (
              <>
                <tr style={{ border: '2px solid black' }}>
                  <td style={{ border: '2px solid black' }}>
                    <input type="checkbox"  checked={checks.isChecked} name="checkbox" value={index} onClick={(e)=>{
                      childCheckers(e, index)
                    }}/>
                  </td>
                  <td style={{ border: '2px solid black' }}>One</td>
                  <td style={{ border: '2px solid black' }}>{}{checks.isChecked  === true ? text.isTyped : console.log("Failed")}</td>
                  <td style={{ border: '2px solid black' }}>{text.isTyped}</td>
                </tr>
              </>
            );
          })}



        </tbody>
      </table>
      <input type="textbox" name="two" placeholder="TWO" value={text.isTyped} onChange={(e)=>{
          handle(e)
      }} value={text.isTyped}/>
          <button>Submit</button>
    </div>
  );
}