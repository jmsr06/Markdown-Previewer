import React from 'react'

const Editor = ({text, setText}) => {
    const handleChange = (e) => {
        setText(e.target.value)
      }
    return (
        <div className='editor'>
            <div className='header'>
                <span>Markdown</span>
            </div>
            <textarea value={text} onChange={handleChange} id='editor'>
            </textarea>
        </div>
    )
}

export default Editor
