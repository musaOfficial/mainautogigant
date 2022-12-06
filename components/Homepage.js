import classes from './Homepage.module.css';


function Homepage(){
    return (
        <>
            {/* Create components in the home folder: components/home/yourcomponent */}
            <div className={classes.container}>
                <div className={`${classes.contentcontainer} w-10/12 lg:w-full max-w-ag-container md:!w-full mx-auto flex lg:flex-col bg-white p-6`}>
                    Put your code here
                </div>
            </div>
        </>
    )
}

export default Homepage;