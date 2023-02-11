function ControlledCheckbox({ value, onUpdate, label }){
    const [value, setValue] = useState();
    const handleChange = e => {
        setValue(e => !e);
        onUpdate(value);
    }
    return (
        <div className='flex items-center'>
            <div className={classes.weiss} onClick={() => setValue(d => !d)}>
            {value == true && <Check className={classes.blackcheck} />}
            </div>
            <span className={classes.typlabel}>{label}</span>
      </div>
    )
}

export default ControlledCheckbox;