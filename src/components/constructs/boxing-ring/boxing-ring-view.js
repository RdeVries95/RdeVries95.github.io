import React, { useState } from "react";
import useCountDown from "react-countdown-hook";

import {
  Ring,
  Counter,
  Opponent,
  StyledColumn,
  StyledRow,
  Row,
} from "./boxing-ring-style";

import Timer from "../timer/timer-view";

import opponent from "../../../assets/images/opponents.jpg";

const initialTime = 30 * 1000;
const interval = 1000;

const BoxingRing = () => {
  const [horizontalPositionOne, setHorizontalPositionOne] = useState("");
  const [horizontalPositionTwo, setHorizontalPositionTwo] = useState("");
  const [horizontalPositionThree, setHorizontalPositionThree] = useState("");
  const [score, setScore] = useState(0);

  const [timeLeft, start] = useCountDown(initialTime, interval);

  const startMatch = () => {
    setScore(0);
    start()
    let seconds = 30;
    function countdown() {
      if (seconds === 0) {
        clearTimeout(timerId);
        setHorizontalPositionOne("");
        setHorizontalPositionTwo("");
        setHorizontalPositionThree("");
      } else {
        setHorizontalPositionOne("");
        setHorizontalPositionTwo("");
        setHorizontalPositionThree("");
        let randomOpponent = Math.floor(Math.random() * 3) + 1;
        if (randomOpponent === 1) {
          setHorizontalPositionOne(`${Math.floor(Math.random() * 80) + 1}%`);
        }
        if (randomOpponent === 2) {
          setHorizontalPositionTwo(`${Math.floor(Math.random() * 80) + 1}%`);
        }
        if (randomOpponent === 3) {
          setHorizontalPositionThree(`${Math.floor(Math.random() * 80) + 1}%`);
        }
        seconds--;
      }
    }
    const timerId = setInterval(countdown, 1000);
  };

  return (
    <StyledRow>
      <StyledColumn>
        <Counter>Time: {timeLeft/1000}</Counter>
        <Counter>Points: {score}</Counter>
        <Counter
          state
          onClick={() => {
            startMatch();
          }}
        >
          Start match
        </Counter>
      </StyledColumn>
      <Ring>
        <Row>
          <Opponent
            onClick={() => {
              setScore(score + 1);
            }}
            margin={horizontalPositionOne}
            src={opponent}
          />
        </Row>
        <Row>
          <Opponent
            onClick={() => {
              setScore(score + 1);
            }}
            margin={horizontalPositionTwo}
            src={opponent}
          />
        </Row>
        <Row>
          <Opponent
            onClick={() => {
              setScore(score + 1);
            }}
            margin={horizontalPositionThree}
            src={opponent}
          />
        </Row>
      </Ring>
    </StyledRow>
  );
};

export default BoxingRing;
