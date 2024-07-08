const accountId=12321
let accountEmail="xyz@gmail.com"
var accountPassword="34528"
accountCity="Kuapur"
let accountState

// accountId=5  //Not Allowed becase already declared as const
console.log(accountId);

/*
prefer not to use 
var because of issue of block and funtional scope.
*/

accountEmail="vds@gmail.com"
accountPassword="234323"
accountCity="benguluru"

console.table([accountEmail,accountPassword,accountCity,accountState])