import React from 'react';

function App() {

  const [caption, setCaption] = React.useState('');

  function fetchCaption() {
    fetch("https://api.adviceslip.com/advice")
      .then((response) => {
        // console.log(response)
        return response.json()
      })
      .then(json => {
        console.log(json)
        const captionData = json.slip.advice
        setCaption(captionData)
      })
  }

  React.useEffect(() => {
    // alert('New Caption Updated')
  }, [caption])


  return (
    <div style={{ textAlign: 'center' }}>
      <h1> Captions Generator </h1>
      <button onClick={fetchCaption}>
        Click me
      </button>
      <h2>{caption}</h2>
    </div>
  )
}

export default App;