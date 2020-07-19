//Globális scope
const NAME = "Géza";

//Lokális scope
{
    const NAME = "Mari";
    console.log(NAME);
}
console.log(NAME);