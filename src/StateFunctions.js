import React, {useContext} from 'react';
import UserContext from './UserContext';

const { videoIdState, setVideoId, dataState, updateDataState, metadataState, setMetadata, addMetadataFlag, setAssetState, assetState, scheduleState, setScheduleState, setDisabledState  } = useContext(UserContext);

const StateFunctions = () =>{
const updateMetadataAssetRender = () => {
    let pageAsset = [];
    let metadataAsset = []
    let metadataTemp = {}
    console.log('editAsset = ' + videoIdState);
    dataState.videoAssets.forEach((data) => {
      if(data.videoId === videoIdState) {
        data.pubPointAssetsByVideoId.forEach((a) => {
          pageAsset.push(a);
          metadataTemp = a.pubPointMetadata;
          metadataTemp.platform = a.publishPoint;
          metadataAsset.push(metadataTemp);
          
          
        })
        
        setAssetState(pageAsset);
        setMetadata(metadataAsset)
      }
    });
}
return updateMetadataAssetRender
}
export default StateFunctions;