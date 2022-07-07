//1
const EXPECTED_MINUTES_IN_OVEN=40
console.log("1", EXPECTED_MINUTES_IN_OVEN)

//2
const REMAINING_MINUTES_IN_OVEN=(TIME)=>{
  return EXPECTED_MINUTES_IN_OVEN-TIME
}
const RMIN=REMAINING_MINUTES_IN_OVEN(30)
  console.log("2", RMIN)

//3
const numberoflayers=2
const preparationTimeInMinutes=(numberoflayers)=>{
  return 2*numberoflayers
}
const NOL=preparationTimeInMinutes(2)
console.log("3", NOL)

//4
const actualMinutesInOven=20
const totalTimeInMinutes=(numberoflayers,actualMinutesInOven)=>{
return numberoflayers*3+actualMinutesInOven
}
const TTM=totalTimeInMinutes(2,20)
console.log("4", TTM)