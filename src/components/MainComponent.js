import { Fragment } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

import InputComponent from "./InputComponent";



const MainComponent = (props) => {
    // console.log(props);
    return (

        <Fragment className='container '>

            <InputComponent updater={props.stateUpdater} data={props.sampleData}/>
<p className='text-start'>To Do List:</p>
            <ul className='list-style-type-none bg-light p-3 border border-2 shadow-sm overflow-auto text-nowrap  col-md-3 '>
                {props.sampleData.map(el => <li className='list-unstyled text-start' key={el.id}><a href="#" className='text-decoration-none text-danger'>{el.title}</a></li>)}
            </ul>
        </Fragment>

    )

}

export default MainComponent;