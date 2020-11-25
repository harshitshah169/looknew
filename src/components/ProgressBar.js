import React, { useEffect } from 'react';
import useStorage from '../hooks/useStorage';


const ProgressBar = ({file, setFile, productType, productPrice}) => {
    const { url, progress } = useStorage({file, productType, productPrice});
    console.log(progress, url);
    useEffect(() => {
        if(url){
            setFile(null);

        }
    }, [url, setFile]);

    return (
        <div>
            <div className="progress-bar" style={{width: progress + '%'}}>
            </div>
            <p style={{marginTop: '5px'}}>{Math.round(progress)}%</p>
        </div>
    )
}

export default ProgressBar;