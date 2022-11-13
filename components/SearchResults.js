import classes from './SearchResults.module.css';
import Image from 'next/image';
function SearchResults(){

    return (
        <div className={classes.container}>
            <div className={`${classes.contentcontainer} relative w-10/12 lg:w-full max-w-ag-container md:!w-full mx-auto flex lg:flex-col bg-white p-6`}>
                <div className={classes.topimg}>
                    <Image src={'/images/reg-car.png'} layout='fill' />
                </div>
                
            </div>
        </div>
    )
}

export default SearchResults;