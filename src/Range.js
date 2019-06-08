import React, {Fragment} from 'react'

import './Range.css'

const Range = (props) => {
    const {id, min, max, value, name, onChange, label, measure} = props;
    return(
        <Fragment>
            <label htmlFor={name} className={'range__label'}>{label}</label>
            <span className={'range__limit'}>{min}</span>
            <input id={id}
                   className={'range__input'}
                   name={name}
                   type="range"
                   value={value}
                   onChange={onChange}
                   min = {min}
                   max = {max}/>
            <span className={'range__limit'}>{max}</span>
            <span className="range__value">{value} {measure}</span>
        </Fragment>
    )
}

export default Range

