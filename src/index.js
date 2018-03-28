import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import Clocks from './Clocks';
import * as numbers from './numbers';

const Wrapper = styled.div`
  font-family: Roboto, sans-serif;
  font-weight: 400;
  text-align: center;
  width: 921px;
  height: 500px;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
`;

const Title = styled.h1`
  font-weight: 700;
  margin-top: 50px;
  margin-bottom: 0;
`;

const SubTitle = styled.h2`
  font-weight: 400;
  font-size: 1.2em;
`;

const Text = styled.p`
  dont-weight: 300;
`;

class App extends React.Component {
  constructor(props) {
    super(props);

    let now = new Date();

    this.initialState = {
      time: {
        hour: now
          .getHours()
          .toString()
          .padStart(2, '0'),
        minute: now
          .getMinutes()
          .toString()
          .padStart(2, '0'),
        second: now
          .getSeconds()
          .toString()
          .padStart(2, '0')
      }
    };

    this.state = { ...this.initialState };
  }

  componentDidMount() {
    let interval = setInterval(() => {
      let now = new Date();
      this.setState(prevState => ({
        time: {
          hour: now
            .getHours()
            .toString()
            .padStart(2, '0'),
          minute: now
            .getMinutes()
            .toString()
            .padStart(2, '0'),
          second: now
            .getSeconds()
            .toString()
            .padStart(2, '0')
        }
      }));
    }, 1000);
    this.setState(prevState => ({
      interval: interval
    }));
  }

  componentWillUnmount() {
    clearInterval(this.state.interval);
  }

  render() {
    return (
      <Wrapper>
        <Title>A digital analog clock</Title>
        <SubTitle>
          <span>Inspired by </span>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.youtube.com/watch?v=ExkVIQ60ClM"
          >
            A Million Times
          </a>
          <span>.</span>
        </SubTitle>
        <Clocks time={this.state.time} />
        <Text>
          <span>Built by </span>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://twitter.com/pwsbutcher"
          >
            @pwsbutcher
          </a>
          <span> on </span>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://codesandbox.io/s/n0mnp0r9lj"
          >
            CodeSandbox
          </a>
          <span> with React and Styled Components</span>
        </Text>
      </Wrapper>
    );
  }
}

ReactDOM.render(
  <App style={{ height: '100%' }} />,
  document.getElementById('root')
);
