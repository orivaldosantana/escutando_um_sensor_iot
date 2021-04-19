import React from 'react'

import { useSubscription, useMqttState } from 'mqtt-react-hooks'

import './SensorStatus.css'

export default function SensorStatus() {
    const { message } = useSubscription(['sensor02/test']);
    const { connectionStatus } = useMqttState();

    return (
        <div className="Card">
            <div className="Title">
                <h3> Sensor Status </h3>
            </div>
            <div className="Content" >
                <p> <strong>Topic: </strong> {message && message.topic} </p>
                <p> <strong>Message: </strong> {message && message.message} </p>
                <p> <strong>Connction: </strong> {connectionStatus} </p>
            </div>
        </div>
    )
}