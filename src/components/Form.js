import React from 'react'

const Form = props => {
    
    return (
        <div>

            {props.errorMessage == 'error' ? error() : delErr()}
            <div className='formBox'>
                <form className='form-st' onSubmit={props.loadweather}>
                    <input type='text' className='form-control' name='city' placeholder='Enter city' maxlength="15"/>
                    <button className='getWeather'>Get weather</button>
                    
                </form>
                
            </div>
            <div className='weatherDescript'>For example: London, Tallinn, Kiev</div>
        </div>
    )
     
}

function error () {
    return (
        <div className='error'>City not found</div>
    )
}

function delErr() {
    let err = document.querySelector('error')
    if (err) {err.remove()}

}

export default Form