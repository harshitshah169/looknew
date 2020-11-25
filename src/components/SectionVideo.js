import React from 'react';
import video from '../images/shoes-video.mp4'

class SectionVideo extends React.Component {
    render(){
        return (
            <div className="hero">
                <video id="video" className="video" autoplay='true' muted='true' loop='true'>
                    <source src={video} type="video/mp4" />
                        Your browser does not support video
                </video>
            </div>
        )
    }
}

export default SectionVideo;