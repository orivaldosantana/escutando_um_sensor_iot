import React from 'react';


import { Connector } from 'mqtt-react-hooks';
import SensorStatus from './components/SensorStatus';


import './App.css'

export default function App() {
  return (
    <div>

      <Connector brokerUrl="ws://157.230.89.7:1884" options={{ keepalive: 0 }} >
        <SensorStatus />
      </Connector>
    </div>
  );
}