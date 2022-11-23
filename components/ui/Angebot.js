import classes from './Angebot.module.css';
function Angebot(props){
        var preis = props.price;
        var title =  props.title;
        var adNo = props.adNo;
        var start = props.start;
        var end = props.end;
        var imgSrc = props.imgSrc;

    return (
        <div className={classes.container}>
            {preis} Hello
        </div>
    )
}

export default Angebot;