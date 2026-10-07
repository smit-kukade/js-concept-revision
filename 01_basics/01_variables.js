const accountId = 12345
let accountEmail = "smit.kukade.tech@gmail.com"
var accountPassword = "12345678"
accountCity = "Amravati"

/*
Don't use var 
beacuse it won't work as expected in block scope and functions
ultimately it 
throws an error
*/

accountEmail = "smit.kukade.signup@gmail.com"
accountPassword = "87654321"
accountCity = "Bengluru"

console.table([accountId, accountEmail, accountPassword, accountCity])