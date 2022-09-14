import React from 'react';
import icon from '../images/location_icon.png';

export default function Card(props){
    return(
        <div>
            <div className='sectionCard'>

                {/* <img className='imageUrl' src={`../image/${props.newArray.imageUrl}`} /> */}
                <img className='imageUrl' src={props.newArray.imageUrl} />
                


                <div className='sectionTxt'>

                    <span className='firstSpan'>
                        <img className='locationIcon' src={icon} />
                        <div className='location'>{props.newArray.location}</div>
                        <a className='googleMaps' href={props.newArray.googleMapsUrl}>View on Google maps</a>
                    </span>

                    <h1 className='title'>{props.newArray.title}</h1>
                   

                    <span className='firstSpan'>
                        <div className='startDate'>{props.newArray.startDate}&nbsp;- &nbsp; </div>
                        <div className='endDate'> {props.newArray.endDate}</div>
                    </span>

                    <div className='description'>{props.newArray.description}</div>
                </div>
        
            </div>
        </div>
    )
}