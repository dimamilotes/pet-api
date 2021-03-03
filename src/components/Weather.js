import React from 'react'



const Weather = (props) => {

    const icon = `http://openweathermap.org/img/wn/${props.icon}@2x.png`;

    function changeBg() {
        let bgweather = document.querySelector('.bgweather')
        if (props.weatherMain == 'Clouds') {        
            bgweather.style.background = '#778899'
            bgweather.style.color = '#ffffff'
        
        }
        else if (props.weatherMain == 'Clear'){        
            bgweather.style.background = '#1c92d2'
            bgweather.style.background = '-webkit-linear-gradient(to bottom, #f2fcfe, #1c92d2)';
            bgweather.style.background = 'linear-gradient(to bottom, #f2fcfe, #1c92d2)';
            bgweather.style.color = '#000'
        }
        else if (props.weatherMain == 'Rain'){        
            bgweather.style.background = '#4B79A1'
            bgweather.style.background = '-webkit-linear-gradient(to top, #283E51, #4B79A1);';
            bgweather.style.background = 'linear-gradient(to top, #283E51, #4B79A1)';
            bgweather.style.color = '#ffffff'
        }
    }

    
    
    return (

      <div className='weatherInfo'>
         {props.weatherMain == 'Clouds' ? ( 

            <div className="cloud">
                <img src="img/cloud1.png" className="cl"/>
                <img src="img/cloud2.png" className="cl-2"/>
                <img src="img/cloud5.png" className="cl-5"/>
            </div> 
           
        ) : null}
            {props.weatherMain == 'Clear' ? (<div className="sunny"></div> ) : null}
            
            <h1>{props.city} </h1>
          
            {props.icon ? (<div><img className='weatherIcon' src={icon}/></div>) : null}
          
            {props.celsius ? (<div className='temperature'>{props.celsius}&deg;</div>) : null}
            {minMaxTemp(props.temp_min, props.temp_max)}
            <div>{props.description}</div>
            {changeBg()}
      </div>  
    )
}


function minMaxTemp(min, max) {
    if (min && max){
            return (
        <div className='minmax'>
            <div className='minmaxPart'>Min temp {min}&deg;</div>
            <div className='minmaxPart'>Max temp {max}&deg;</div>
        </div>
    )}
}
export default Weather