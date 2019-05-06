import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { LazyLog } from 'react-lazylog';
import styled from 'styled-components'
const Container = styled.div`
  height: 100vh;
  width: 100%;
`;

function Index() {
  return <h2>Home</h2>;
  // TODO add home with info about kfr-ci

  //api.kfr-ci.com
  //bot.kfr-ci.com
}

function About() {
  return <h2>About</h2>;
  // TODO handle status page
  // Boton verde o rojo
}

function Users({ match }) {
  const { user, repo, branch, file } = match.params;
  const url = `https://storage.googleapis.com/kfr-ci-pipelines/${user}/${repo}/${branch}/${file}`
  console.log(match);
  return <Container>
    <LazyLog url={url} height="auto" />
  </Container>

}

function App() {
  return (
    <Router>
      <Route path="/" exact component={Index} />
      <Route path="/about/" component={About} />
      <Route path="/logs/:user/:repo/:branch/:file/" component={Users} />
    </Router>
  );
}

export default App;