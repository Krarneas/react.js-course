import PropTypes from 'prop-types'
//DEPRECATED - not advised to be used
//propTypes = a mechanism that ensures that the passed value is the correct data type
//            age: PropTypes.number

//defaultProps = default value for props in the case they are not passed from the parent component
//               in other words an alt text or default value
//               name: "Guest"

function Student({name = 'Guest', age = 0, isStudent = false}){ //needs a props paramater, props is a java object, set here is the default values since defaultProps are now deprecated

    return(
        <div className="student">
            <p className="name">Name: {name}</p>
            <p className="age">Age: {age}</p>
            <p className="isStudent"> Student: {isStudent ? "Yes":"No"}</p>
        </div>
    );
}

//usually for data type checking
Student.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    isStudent: PropTypes.bool,
}

// //default values
// Student.defaultProps = {
//     name: 'Guest',
//     age: 0,
//     isStudent: false,
// }
export default Student