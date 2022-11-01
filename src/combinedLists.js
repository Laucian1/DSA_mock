const { januaryTotals, februaryTotals } = require("../src/data")

function combineMonthlyRainfallTotals(firstMonthTotals, secondMonthTotals) {
  // Write your solution to combine the Lists of Monthly Rainfall Totals here.
  // The correct result will not have duplicates and will appropriately add rainfall amounts from cities that appear in both lists.
  
  //Take both lists
  //Add each city to array, no duplicates
  //Combine rainfall if city appears in each list
  
  let endResult = firstMonthTotals.asArray()
  let secondMonth = secondMonthTotals.asArray()
  let compare = endResult.map(cityDetails => cityDetails.city)

  secondMonth.forEach(cityInQuestion => {
    const cityName = cityInQuestion.city
    if (compare.includes(cityName)) {
      chosenCity = endResult.find(cityObject => cityObject.city === cityName)
      chosenCity.rainfall += cityInQuestion.rainfall
      console.log("Chosen City", chosenCity)
    } else {
      endResult.push(cityInQuestion)
      console.log("Additional city", endResult)
    }
    
  })
  return endResult
}
//console.log("January", januaryTotals.asArray(), "February", februaryTotals.asArray())
console.log(combineMonthlyRainfallTotals(januaryTotals, februaryTotals))

module.exports = combineMonthlyRainfallTotals;
