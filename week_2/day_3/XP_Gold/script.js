//Exercise 1: Building Management
/*
Console.log the number of levels in the building.
Console.log how many apartments are on levels 1 and 3.
Console.log the name of the second tenant and the number of rooms he has in his apartment.
Check if the sum of Sarah and David’s rent is bigger than Dan’s rent.
If it is than increase Dan’s rent.
*/

let building = {
    numberLevels : 4,
    numberOfAptByLevel : {
        "1": 3,
        "2": 4,
        "3": 9,
        "4": 2,
    },
    nameOfTenants : ["Sarah", "Dan", "David"],
    numberOfRoomsAndRent:  {
        "Sarah": [3, 990],
        "Dan":  [4, 1000],
        "David": [1, 500],
    },
}
