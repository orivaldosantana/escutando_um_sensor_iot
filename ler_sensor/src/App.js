import React from 'react';

import { Connector } from 'mqtt-react-hooks';


import './App.css'

export default function App() {
  return (
    <div>

      <Connector brokerUrl="ws://157.230.89.7:1884"  >

      </Connector>
    </div>
  );
}