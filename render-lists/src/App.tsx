import List from './List.tsx'

export default function App() {
  const fruits = [{id: 1, name: "apple", calories: 95},
                  {id: 2, name: "orange", calories: 45},
                  {id: 3, name: "banana", calories: 105},];
        
  const members = [{id: 1, name: "Solon", calories: 20},
                  {id: 2, name: "Charles", calories: 20},
                  {id: 3, name: "Faye", calories: 19},
                  {id: 4, name: "Eve", calories: 19},
                  {id: 5, name: "Michael", calories: 18}
                  ];

  //it would be better if the list are catered to certain situations
  //for this example- it is foods and their calories
  //we have fruits, vegetables, fast food for categories

  return(
    <>
      <List items={fruits} category="Fruits"/>
      <List items={members} category="Members"/>
    </>
  
  );
}

