import styles from './Button.module.css'
// STYLING REACT COMPONENTS WITH CSS
// 1. External
// 2. Modules
// 3. Inline

function Button(){

    //inline css
    const styles = {
        backgroundColor:"hsl(200, 100%, 50%)",
        color: "white",
        padding: "10px 20px",
        borderRadius: "5px",
        border: "none",
        cursor: "pointer",
    }

    return(
        //module css
        //<button className={styles.button}>Click Me</button>

        <button className={styles}>Click Me</button>
    );
}

export default Button