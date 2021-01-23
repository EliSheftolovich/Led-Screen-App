import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeartBroken, faHeart } from '@fortawesome/free-solid-svg-icons'





const Like = (props) => {

        const brokenHeart= faHeartBroken;
        const heart= faHeart;
        let icon = brokenHeart;
        if (!props.liked) icon = heart;
        
        return ( 
            <FontAwesomeIcon icon={icon} onClick={props.onClick}
             style={{cursor:"pointer"}}/>
         );

}

export default Like;