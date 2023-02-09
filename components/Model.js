import classes from './Model.module.css';
import { useRouter } from 'next/router';

function Model(){

    const router = useRouter();
    const { pageProperties } = router.query;

    console.log(pageProperties);

    return (
        <div className="bg-theme-gray-10 overflow-hidden lg:px-6 md:!px-0">
            <div className={` ${classes.contentcontainer} relative w-10/12 lg:w-full max-w-ag-container md:!w-full mx-auto flex lg:flex-col bg-white p-6`}>

            </div>
        </div>
    )
}

export default Model;