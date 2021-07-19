import React from "react";
import { AppContext } from "../App/AppProvider";

export default function ({firstVisit}){
  return(
    <AppContext.Consumer>
      {({firstVisit})=>
        firstVisit?<div>Welcome,Please select crypto</div>:null
      }
    </AppContext.Consumer>
  )
}