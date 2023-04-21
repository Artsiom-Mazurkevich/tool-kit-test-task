import React, { FC } from "react";
import { Card } from "@nextui-org/react";

export const StargazerCount: FC<{countStars: number}> = ({countStars}) => {

  return (
    <div style={{display: "flex", alignItems: 'center', whiteSpace: "nowrap"}}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={20} height={20}>
        <path d="M0 0h24v24H0z" fill="none" />
        <path d="M12 17.27l-5.45 3.28 1.64-5.98L3.56 9.72l6.05-.44L12 3l2.39 6.28 6.05.44-4.63 4.26 1.64 5.98L12 17.27z" fill={'#FAAF00'} />
      </svg>
      <div style={{marginLeft: "5px"}}>Stars <span style={{ marginLeft: "3px" , backgroundColor: '#d8d9dc', padding: "0 5px", borderRadius: "8px"}}>{countStars}</span>
      </div>
  </div>
  )};

