import React, { useState, useEffect } from 'react';
import './Main.css';
import ig from '../assets/owner/instagram.png';
import twitter from '../assets/owner/twitter.png';
import more from '../assets/owner/more.png';


const Main = ({ selectedApe, apeListData }) => {
    const [activeApe, setActiveApe] = useState(apeListData[0]);

    useEffect(() => {
        setActiveApe(apeListData[selectedApe])
    }, [apeListData, selectedApe])

    return (
        <div className='main'>
            <div className="mainContent">
                <div className="apeHighlight">
                    <div className="apeContainer">
                        <img className='selectedApe' src={activeApe.image_original_url} alt="" />
                    </div>
                </div>
                <div className="apeDetails">
                    <div className="title">
                        {activeApe.name}
                        <span className="itemNumber">¤# {activeApe.token_id}</span>
                    </div>
                <div className="owner">
                    <div className="ownerImageContainer">
                        <img src={activeApe.owner.profile_img_url} alt="" />
                    </div>
                    <div className="ownerDetails">
                        <div className="ownerNameAndHandle">
                            <div>{activeApe.owner.address}</div>
                            <div className='ownerHandle'>@GhaliDrissi</div>
                        </div>
                    </div>
                    <div className="ownerLink">
                        <img src={ig} alt="" />
                    </div>
                    <div className="ownerLink">
                        <img src={twitter} alt="" />
                    </div>
                    <div className="ownerLink">
                        <img src={more} alt="" />
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Main
