const record = [
    {year: "2018", result: "L"},
    {year: "2017", result: "W"},
    {year: "2016", result: "N/A"}
    //...
  ]
  let y 
function superbowlWin(record) {
 
 y = record.find( ({ result }) => result === 'W' )
if  (y != undefined){
    return y.year
} else
return y
}

console.log(superbowlWin(record))