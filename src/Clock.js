import React from 'react';
import styled from 'styled-components';

const StyledClock = styled.div`
  position: relative;
  width: ${props => props.theme.clockRadius};
  height: ${props => props.theme.clockRadius};
  border: solid 1px ${props => props.theme.colours.frame};
  border-radius: 50%;
  box-sizing: border-box;
`;

const HourHand = styled.div`
  position: absolute;
  top: 5px;
  left: 13px;
  width: ${props => props.theme.hourHandWidth};
  height: ${props => props.theme.hourHandHeight};
  transform-origin: 1px ${props => props.theme.hourHandHeight};
  transform: rotateZ(${props => props.rotation});
  background-color: ${props => props.theme.colours.hand};
  transition: transform 0.7s ease-in-out;
`;

const MinuteHand = styled.div`
  position: absolute;
  top: 2px;
  left: 13px;
  width: ${props => props.theme.minuteHandWidth};
  height: ${props => props.theme.minuteHandHeight};
  transform-origin: 1px ${props => props.theme.minuteHandHeight};
  transform: rotateZ(${props => props.rotation});
  background-color: ${props => props.theme.colours.hand};
  transition: transform 0.7s ease-in-out;
`;

const Pin = styled.div`
  position: absolute;
  top: 13px;
  left: 13px;
  width: 2px;
  height: 2px;
  border-radius: 50%;
  background-color: ${props => props.theme.colours.pin};
`;

class Clock extends React.Component {
  render() {
    return (
      <StyledClock>
        <HourHand rotation={this.props.hands[0] + 'deg'} />
        <MinuteHand rotation={this.props.hands[1] + 'deg'} />
        <Pin />
      </StyledClock>
    );
  }
}

export default Clock;
