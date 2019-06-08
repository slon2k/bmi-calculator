import React, {Fragment} from 'react'

const Range = (props) => {
    const {id, min, max, value, name, onChange, label} = props;
    return(
        <Fragment>
            <label htmlFor={name}><h5>{label}</h5></label>
            <span>{min}</span>
            <input id={id} name={name} type="range" value={value} onChange={onChange} min = {min} max = {max}/>
            <span>{max}</span>
            <span className="range-value"><strong>{value}</strong></span>
        </Fragment>
    )
}

export default Range

