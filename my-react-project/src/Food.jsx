function Food(){

    const food1 = "Spaghetti";
    const food2 = "Ice Cream";
    
    return(
        <ul>
            <li>Choco Float</li>
            <li>{food1}</li>
            <li>{food2.toUpperCase()}</li>
        </ul>
    );
}
export default Food