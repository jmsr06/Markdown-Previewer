import React from 'react'
import Markdown from 'marked-react';

const Preview = ({ text }) => {
    return (
        <div className='preview' >
            <div className='header'>
                <span>Preview</span>
            </div>
            <div className='text' id="preview">
                <Markdown>{text}</Markdown>
            </div>
        </div>
    )
}

export default Preview
