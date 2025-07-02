//needs a props paramater, props is a java object

function Student(props){

    return(
        <div className="student">
            <p className="name">Name: {props.name}</p>
            <p className="age">Age: {props.age}</p>
            <p className="isStudent"> Student: {props.isStudent ? "Yes":"No"}</p>
        </div>
    );
}

export default Student