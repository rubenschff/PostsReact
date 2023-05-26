import styles from "./Input.module.css";


export default function TextArea({text, name, placeHolder, handleOnChange, value}){
    return(
        <div className={styles.formControl}>
            <label htmlFor={name}>{text}</label>
            <textarea
                name={name}
                value={value}
                placeholder={placeHolder}
                onChange={handleOnChange}
            ></textarea>
        </div>
    )
}