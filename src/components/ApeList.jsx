import React from 'react'
import CollectionCard from './CollectionCard'
import './ApeList.css';

const ApeList = ({ apeListData, setSelectedApe }) => {
    return (
        <div className='apeList'>
            {apeListData.map((ape) => (
                <div onClick={() => {setSelectedApe(ape.token_id)}}>
                <CollectionCard 
                    key={ape.token_id}
                    id={ape.token_id}
                    name={ape.name}
                    traits={ape.traits}
                    image={ape.image_original_url}
                />
                </div>
            ))}
        </div>
    )
}

export default ApeList
