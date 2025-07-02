import PropTypes from 'prop-types'
//propTypes = a mechanism that ensures that the passed value is the correct data type
//            age: PropTypes.number



function Student(props){ //needs a props paramater, props is a java object

    return(
        <div className="student">
            <p className="name">Name: {props.name}</p>
            <p className="age">Age: {props.age}</p>
            <p className="isStudent"> Student: {props.isStudent ? "Yes":"No"}</p>
        </div>
    );
}

//usually for data type checking
Student.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    isStudent: PropTypes.bool,
}
export default Student