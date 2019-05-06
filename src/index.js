import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { LazyLog } from 'react-lazylog/es5'
import styled from 'styled-components'

const Container = styled.div`
  height: 100vh;
  width: 100%;
`

function Index() {
  return (
    <div>
      <style
        dangerouslySetInnerHTML={{
          __html:
            "\n        .container {\n            font-family: 'Roboto', sans-serif;\n            position: relative;\n        }\n\n        .containercenter {\n            font-family: 'Roboto', sans-serif;\n            position: relative;\n            text-align: center;\n        }\n\n        .imagen {\n            margin-top: 10px;\n            font-family: 'Roboto', sans-serif;\n            position: relative;\n            text-align: center;\n            height: 700px;\n            width: auto;\n        }\n\n        .button {\n            margin-top: 50px;\n            border-radius: 25px;\n            background-color: #5682a3;\n            border: none;\n            color: white;\n            padding: 15px 32px;\n            text-align: center;\n            text-decoration: none;\n            display: inline-block;\n            font-size: 16px;\n\n        }\n    "
        }}
      />
      <div className="container">
        <a href="/" style={{ textDecoration: 'none' }}>
          <img src="/drawing.png" alt="kfr-ci" style={{ width: '200px' }} />
        </a>
      </div>
      <br />
      <br />
      <br />
      <br />
      <div className="containercenter">
        <button
          className="button"
          onClick={() => {
            window.location.href = 'https://t.me/kfr_cibot'
          }}
          href="https://t.me/kfr_cibot"
        >
          <b>Ir a Telegram</b>
        </button>
      </div>
      <br />
      <div className="imagen">
        <img
          src="/TravisCI.png"
          alt="kfr-ci"
          style={{ height: '100%', width: 'auto' }}
        />
      </div>
    </div>
  )
}

function Logs({ match }) {
  const { user, repo, branch, file } = match.params
  const url = `https://storage.googleapis.com/kfr-ci-pipelines/${user}/${repo}/${branch}/${file}`
  return (
    <Container>
      <LazyLog url={url} height="auto" />
    </Container>
  )
}

function App() {
  return (
    <Router>
      <Route path="/" exact component={Index} />
      <Route path="/logs/:user/:repo/:branch/:file/" component={Logs} />
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
