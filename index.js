const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(record){
 let result = record.find(function(e) {if(e.result === 'W'){return e['year']}})
 //or let result = record.find( record => record.result === "W" )
 return !!result ? result.year : undefined
}
