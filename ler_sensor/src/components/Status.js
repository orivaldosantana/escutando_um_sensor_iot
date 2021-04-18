import React from 'react';

import { useMqttState } from 'mqtt-react-hooks';

export default function Status() {

    /*
    * Status list
    * - Offline
    * - Connected
    * - Reconnecting
    * - Closed
    * - Error: printed in console too
    */
    const { connectionStatus } = useMqttState();

    return (
        <h1>{`Status: ${connectionStatus}`}</h1>
    );
}