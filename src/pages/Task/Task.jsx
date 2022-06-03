import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { FaPlayCircle, FaPauseCircle } from "react-icons/fa";
import { VscDebugRestart } from "react-icons/vsc";
import { useTaskContext } from "../../context/task-context";
import BreakTimer from "../../components/Navbar/BreakTimer/BreakTimer";

const Task = () => {
  const { taskId } = useParams();

  const { tasks } = useTaskContext();

  const findTask = tasks.find((task) => task._id === taskId);

  const [myTask, setMyTask] = useState(findTask);

  const [time, setTime] = useState(Number(myTask.time) * 60);
  const [currentTime, setCurrentTime] = useState(time);
  const [isPaused, setIsPaused] = useState(true);
  const [isBreak, setIsBreak] = useState(false);

  const remainingTime = (seconds) => {
    const remainingMinutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${remainingMinutes}m : ${remainingSeconds}s`;
  };

  useEffect(() => {
    if (!isPaused) {
      const intervalId = setInterval(() => {
        if (currentTime > 0) {
          setCurrentTime((second) => second - 1);
        }
      }, 1000);
      return () => clearInterval(intervalId);
    }
  }, [currentTime, isPaused]);

  return (
    <div className="Task">
      <Navbar />

      <div className="task-container bg-serene-red-light px-24 pt-16 pb-16 mx-8 my-4">
        <div className="my-task-container grid grid-cols-2 rounded-2xl bg-serene-white border-serene-yellow">
          <div className="task-timer-container px-4 pt-16 pb-4 flex flex-col items-center">
            {isBreak ? (
              <BreakTimer
                time={time}
                setCurrentTime={setCurrentTime}
                setIsPaused={setIsPaused}
                isBreak={isBreak}
                setIsBreak={setIsBreak}
                remainingTime={remainingTime}
              />
            ) : (
              <div className="flex flex-col items-center">
                <div className="timer-container w-2/3">
                  <CircularProgressbar
                    value={currentTime}
                    maxValue={time}
                    minValue={0}
                    text={remainingTime(currentTime)}
                    styles={buildStyles({
                      pathColor: "#ca4b74",
                      textColor: "#ca4b74",
                      textSize: "10px",
                    })}
                  />
                </div>
                <div className="timer-play-buttons-container flex gap-8 items-center mt-8">
                  {isPaused ? (
                    <button
                      onClick={() => setIsPaused(false)}
                      className="text-5xl text-serene-red"
                    >
                      <FaPlayCircle />
                    </button>
                  ) : (
                    <button
                      onClick={() => setIsPaused(true)}
                      className="text-5xl text-serene-red"
                    >
                      <FaPauseCircle />
                    </button>
                  )}
                  <button
                    onClick={() => {
                      setIsPaused(true);
                      setCurrentTime(time);
                    }}
                    className="text-xl bg-serene-red text-serene-white px-3 py-3 rounded-full"
                  >
                    <VscDebugRestart />
                  </button>
                </div>
                <div className="restart-btn-container mt-4">
                  {isBreak ? (
                    <button
                      onClick={() => setIsBreak(false)}
                      className=" font-semibold rounded-lg px-5 py-2 border-2 border-serene-red text-serene-red"
                    >
                      Work
                    </button>
                  ) : (
                    <button
                      onClick={() => setIsBreak(true)}
                      className=" font-semibold rounded-lg px-5 py-2 border-2 border-serene-red text-serene-red"
                    >
                      Break
                    </button>
                  )}
                </div>
              </div>
            )}
          </div>
          <div className="task-details-container px-4 pt-16 pb-4">
            <p className="task-title text-3xl font-bold text-left">
              {myTask.title}
            </p>
            <p className="task-description-container text-lg font-medium text-left mt-4">
              {myTask.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Task;
