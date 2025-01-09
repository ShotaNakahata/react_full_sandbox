import React from "react";
import { calculateInvestmentResults } from "../util/investment";

function Result({ userInput }) {
  console.log(userInput);
  const resultData = calculateInvestmentResults(userInput);
  console.log(resultData);
  return <div>Result</div>;
}

export default Result;
