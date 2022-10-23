function combineMonthlyRainfallTotals(firstMonthTotals, secondMonthTotals) {
  // Write your solution to combine the Lists of Monthly Rainfall Totals here.
  // The correct result will not have duplicates and will appropriately add rainfall amounts from cities that appear in both lists.
  
  //Take both lists
  //Add each city to array, no duplicates
  //Combine rainfall if city appears in each list
  
  let endResult = firstMonthTotals.asArray()
  let secondMonth = secondMonthTotals.asArray()
  let compare = endResult.map(cityDetails => cityDetails.city)
  console.log(compare)

  secondMonth.forEach(cityInQuestion => {
    const cityName = cityInQuestion.name
    if (compare.includes(cityName)) {
      endResult[cityName].rainfall += cityInQuestion.rainfall
    } else {
      endResult.push(cityInQuestion)
    }
    
  })
  console.log("endResult", endResult)
  return endResult
}

module.exports = combineMonthlyRainfallTotals;
