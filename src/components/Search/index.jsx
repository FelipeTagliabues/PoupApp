import styles from './search.module.css'
import {IconSearch} from '../Icons/incon'

export const Search = (props) =>{

    return(
        <div className={styles.container}>
            <IconSearch/>
            <input className={styles.input} {...props}/>
        </div>
    )
}