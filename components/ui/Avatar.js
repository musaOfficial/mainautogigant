import classes from './Avatar.module.css'
import Image from 'next/image';
function Avatar(props){
    return (
        <div className={classes.avatar}>
            <img className={classes.img} src={props.path} alt="Avatar" layout="fill"/>
        </div>
    )
}

export default Avatar;