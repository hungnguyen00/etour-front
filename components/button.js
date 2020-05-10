import styles from './button.module.scss'

export default function Button(props) {
    console.log('props: ',props)
    return (
        <button type="button" className={styles.error} onclick={props.onclick}>{props.title}</button>
    )
}