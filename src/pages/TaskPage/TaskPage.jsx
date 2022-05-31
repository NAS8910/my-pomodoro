import React from "react";
import { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import { FaEdit } from "react-icons/fa";
import { AiFillDelete, AiOutlineClose } from "react-icons/ai";
import { useAuthContext } from "../../context/auth-context";
import { useTaskContext } from "../../context/task-context";

const TaskPage = () => {
  const { auth } = useAuthContext();

  const { tasks, createTask } = useTaskContext();

  const [taskData, setTaskData] = useState({
    title: "",
    description: "",
    time: "",
  });

  const addTaskHandler = () => {
    setTaskData({
      title: "",
      description: "",
      time: "",
    });
    setShowAddTaskModal(false);
    createTask(taskData);
  };

  const [showAddTaskModal, setShowAddTaskModal] = useState(false);

  return (
    <div className="TaskPage">
      <Navbar />

      {showAddTaskModal && (
        <div className="addTaskModalBackground h-screen w-screen fixed flex justify-center items-center z-10">
          <div className="addTaskModalContainer rounded-xl p-4 mb-56 bg-serene-white">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                addTaskHandler();
              }}
              className="flex flex-col gap-4"
            >
              <button
                className="ml-auto text-2xl text-serene-yellow"
                onClick={() => setShowAddTaskModal(false)}
              >
                <AiOutlineClose />
              </button>
              <input
                className="border-2 border-serene-yellow px-4 py-2 rounded-xl font-medium"
                onChange={(e) =>
                  setTaskData({ ...taskData, title: e.target.value })
                }
                value={taskData.title}
                required
                type="text"
                name=""
                id=""
                placeholder="Add Title"
              />
              <textarea
                className="border-2 border-serene-yellow px-4 py-2 rounded-xl font-medium"
                onChange={(e) =>
                  setTaskData({ ...taskData, description: e.target.value })
                }
                value={taskData.description}
                required
                name=""
                id=""
                cols="20"
                rows="6"
                placeholder="Add Description"
              ></textarea>
              <input
                className="border-2 border-serene-yellow px-4 py-2 rounded-xl font-medium"
                onChange={(e) =>
                  setTaskData({ ...taskData, time: e.target.value })
                }
                value={taskData.time}
                required
                type="number"
                name=""
                id=""
                placeholder="Add Time in Minutes"
                min={0}
              />
              <div className="form-buttons-container flex items-center justify-around">
                <button
                  onClick={() => {
                    setShowAddTaskModal(false);
                    setTaskData({
                      title: "",
                      description: "",
                      time: "",
                    });
                  }}
                  className="border-2 border-serene-yellow text-serene-yellow font-semibold rounded-xl px-4 py-2"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="border-2 border-serene-yellow bg-serene-yellow font-medium text-serene-white rounded-xl px-8 py-2"
                >
                  Add
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
      <div
        className={`task-container rounded-lg bg-serene-red-light my-4 mx-12 p-12 ${
          showAddTaskModal ? "blur-sm" : null
        }`}
      >
        <h1 className="text-2xl font-semibold text-left ml-12 text-serene-white">
          Welcome back, {auth.user.firstName}!
        </h1>
        <p className="text-normal font-normal text-left ml-12 text-serene-white mt-1">
          You have {tasks.length} tasks for today, All the Best!
        </p>

        <div className="task-list-container p-4 bg-serene-white rounded-xl my-8 mx-12">
          <div className="flex justify-between mt-4 mb-4 items-center">
            <p className="text-normal text-serene-yellow font-bold text-left ml-24">
              To-Do List
            </p>
            <button
              onClick={() => setShowAddTaskModal(true)}
              className="mr-24 text-2xl rounded-full px-4 py-1 bg-serene-yellow text-serene-white"
            >
              +
            </button>
          </div>
          <div className="task-list flex flex-col gap-6 items-center">
            {tasks.map((task) => {
              return (
                <div className="single-task-container flex items-center border-dashed border-2 border-serene-yellow py-4 px-8 rounded-lg cursor-pointer hover:border-solid w-4/5">
                  <div className="task-title-container flex items-center">
                    <input
                      type="checkbox"
                      name=""
                      id=""
                      className="w-4 h-4 text-serene-yellow"
                    />
                    <p className="font-bold text-serene-yellow ml-2">
                      {task.title}
                    </p>
                  </div>
                  <div className="task-action-buttons flex gap-8 ml-auto">
                    <button className="text-2xl text-serene-yellow">
                      <FaEdit />
                    </button>
                    <button className="text-2xl text-serene-yellow">
                      <AiFillDelete />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskPage;
