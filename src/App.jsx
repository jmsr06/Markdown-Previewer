import { useEffect, useState } from 'react'
import Preview from './components/Preview'
import './Styles/App.scss'
import _raw from './assets/initialText.txt'
import Editor from './components/Editor'

function App() {
  const [text, setText] = useState('')
  useEffect(() => {
    fetch(_raw)
      .then(r => r.text())
      .then(text => { setText(text) });
  }, [])
  return (
    <div className='App'>
      <h1 className='title'>Markdown Previewer</h1>
      <div className="container">
        <Editor text={text} setText={setText} />
        <Preview text={text} />
      </div>
    </div>
  )
}

export default App
