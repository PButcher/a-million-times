import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import theme from './theme';
import ClockGroup from './ClockGroup';
import ClockDelimiter from './ClockDelimiter';

const StyledClocks = styled.div`
  width: calc(
     (28 * ${props => props.theme.clockRadius}) + (27 *
          ${props => props.theme.clockPadding})
  );
  margin: 50px auto;
  display: grid;
  grid-template-columns: repeat(14, 66px);
`;

class Clocks extends React.Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <StyledClocks>
          <ClockGroup value={this.props.time.hour[0]} />
          <ClockGroup value={this.props.time.hour[1]} />
          <ClockDelimiter />
          <ClockGroup value={this.props.time.minute[0]} />
          <ClockGroup value={this.props.time.minute[1]} />
          <ClockDelimiter />
          <ClockGroup value={this.props.time.second[0]} />
          <ClockGroup value={this.props.time.second[1]} />
        </StyledClocks>
      </ThemeProvider>
    );
  }
}

export default Clocks;
