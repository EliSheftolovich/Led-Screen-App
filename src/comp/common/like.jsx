import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faHeart, faCircle, faHeartbeat, faBatteryEmpty, faScrewdriver, faCheckCircle, faChartArea, faForward } from '@fortawesome/free-solid-svg-icons'


const Like = (props) => {

        return ( 
            <FontAwesomeIcon icon={!props.liked ? faHeart : faCircle} onClick={props.onClick}
             style={{cursor:"pointer"}}/>
         );

}

export default Like;