import axios from 'axios';
import React, { useEffect, useState, useRef } from 'react'
import Order from './components/table/Order';
import Table from './components/table/Table';

function App() {

  return (
    <div className="App" >
      <Table columns={['00:00', '01:00', '02:00', '03:00']} rows={[1, 2, 3, 4, 5]} />
      <Order/>
    </div>
  );
}

export default App;
