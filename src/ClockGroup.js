import React from 'react';
import styled from 'styled-components';
import * as numbers from './numbers';
import Clock from './Clock';

const StyledClockGroup = styled.div`
  width: calc(
     (4 * ${props => props.theme.clockRadius}) + (3 *
          ${props => props.theme.clockPadding})
  );
  display: grid;
  grid-template-columns: repeat(4, ${props => props.theme.clockRadius});
  grid-gap: ${props => props.theme.clockPadding};
  grid-column: span 2;
`;

class ClockGroup extends React.Component {
  render() {
    return (
      <StyledClockGroup>
        {numbers.numbers[this.props.value].handMap.map((el, i, arr) => (
          <Clock key={i} hands={el} />
        ))}
      </StyledClockGroup>
    );
  }
}

export default ClockGroup;
