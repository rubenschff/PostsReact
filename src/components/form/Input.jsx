import styles from './Input.module.css'

export default function Input({type, text, name, placeHolder, handleOnChange, value, multiple}){
    return(
        <div className={styles.formControl}>
            <label htmlFor={name}>{text}:</label>
            <input
                type={type}
                name={name}
                id={name}
                placeholder={placeHolder}
                onChange={handleOnChange}
                value={value}
                {...(multiple ? {multiple} : '')} //se vier multiplos arquivos mostra, caso contrario fica vazio
            />
        </div>
    )
}