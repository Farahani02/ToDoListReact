import 'bootstrap/dist/css/bootstrap.min.css';

import React from "react";



const InputComponent = (props) => {
    // console.log(props.data);

    const [newItem, setNewItem] = React.useState('')
    // console.log(newItem)

    const handleAdd = (e) => {
        e.preventDefault();
        props.updater([...props.data, { id: props.data.length + 1, title: newItem }])
    
    }
    return (
        <form  className='my-3 text-start'>
            <input className='p-2' type="text" value={newItem} onChange={(e) => { setNewItem(e.target.value) }} />
            <button className='btn btn-success rounded-4 mx-3 p-3' onClick={ (e) => { handleAdd(e) } }>Add</button>
        </form>
    )
}

export default InputComponent;