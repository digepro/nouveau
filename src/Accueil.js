import React, { useState, useEffect, useContext } from 'react';
import Welcome from './Welcome'
class Accueil extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            
        }
    }
    render()
    {
        return(
            <div>
                <Welcome/>
            </div>
        )
    }
}
export default Accueil;