interface Item {
    id: number;
    name: string;
    calories: number;
}

interface ListProps{
    items?: Item[];  //optional to set for default properties
    category?: string;
}

export default function List({
    items = [],
    category = "Uncategorized"
    }: ListProps){

    // const fruits = [{id: 1, name: "apple", calories: 95},
    //                 {id: 2, name: "orange", calories: 45},
    //                 {id: 3, name: "banana", calories: 105},];

    //fruits.sort((a, b) => a.name.localeCompare(b.name));//alphabetical

    //fruits.sort((a, b) => a.calories - b.calories); //numberic (least to greatest)

                                                //unique id for each element to avoid data conflict
    const itemList = items.map(item => <li key={item.id}><b>{item.name}</b>: &nbsp; {item.calories}</li>)

    return (
        <>
            <h3>{category}</h3>
            <ol>{itemList}</ol>
        </>
    );
}

