import { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import axios from 'axios';
import ApeList from './components/ApeList';
import Main from './components/Main';

function App() {
  const [apeListData, setApeListData] = useState([]);
  const [selectedApe, setSelectedApe] = useState(0);

  useEffect(() => {
    const getMyNfts = async () => {
      const openSeaData = await axios.get('https://testnets-api.opensea.io/assets?order_direction=asc&asset_contract_address=0x941C506308c29beF60fF665b1DC4871365893ACB')
      console.log(openSeaData.data.assets)
      setApeListData(openSeaData.data.assets);
    }
    return getMyNfts();
  }, [])

  return (
    <div className='app'>
      <Header />
      {apeListData.length > 0 && (
      <>
        <Main apeListData={apeListData} selectedApe={selectedApe}/>
        <ApeList apeListData={apeListData} setSelectedApe={setSelectedApe}/>
      </>
      )}
      
    </div>
  );
}

export default App;
