import React from 'react';
import styled from 'styled-components';
import * as numbers from './numbers';
import Clock from './Clock';

const StyledClockDelimiter = styled.div`
  width: calc(
     (2 * ${props => props.theme.clockRadius}) +
      ${props => props.theme.clockPadding}
  );
  display: grid;
  grid-template-columns: repeat(2, ${props => props.theme.clockRadius});
  grid-gap: ${props => props.theme.clockPadding};
`;

class ClockDelimiter extends React.Component {
  render() {
    return (
      <StyledClockDelimiter>
        {numbers.delimiter.map((el, i, arr) => <Clock key={i} hands={el} />)}
      </StyledClockDelimiter>
    );
  }
}
export default ClockDelimiter;
