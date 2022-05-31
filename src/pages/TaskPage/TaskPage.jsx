import React from "react";
import { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import { FaEdit } from "react-icons/fa";
import { AiFillDelete, AiOutlineClose } from "react-icons/ai";
import { useAuthContext } from "../../context/auth-context";
import { useTaskContext } from "../../context/task-context";

const TaskPage = () => {
  const { auth } = useAuthContext();

  const { tasks, createTask, deleteTask, editTask } = useTaskContext();

  const [taskData, setTaskData] = useState({
    title: "",
    description: "",
    time: "",
    isDone: false,
  });

  const [isEditingTask, setIsEditingTask] = useState({
    editing: false,
    editingTaskId: "",
  });

  const addTaskHandler = () => {
    setTaskData({
      title: "",
      description: "",
      time: "",
      isDone: false,
    });
    setShowAddTaskModal(false);

    isEditingTask.editing
      ? editTask(isEditingTask.editingTaskId, taskData)
      : createTask(taskData);
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
                className="ml-auto text-2xl text-serene-red"
                onClick={() => setShowAddTaskModal(false)}
              >
                <AiOutlineClose />
              </button>
              <input
                className="border-2 border-serene-red-light px-4 py-2 rounded-xl font-medium"
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
                className="border-2 border-serene-red-light px-4 py-2 rounded-xl font-medium"
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
                className="border-2 border-serene-red-light px-4 py-2 rounded-xl font-medium"
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
                      isDone: false,
                    });
                  }}
                  className="border-2 border-serene-red-light text-serene-red font-semibold rounded-xl px-4 py-2"
                >
                  Cancel
                </button>
                {isEditingTask.editing ? (
                  <button
                    type="submit"
                    className="add-task-button border-2 border-serene-red-light bg-serene-red-light font-medium text-serene-white rounded-xl px-8 py-2"
                  >
                    Save
                  </button>
                ) : (
                  <button
                    type="submit"
                    className="add-task-button border-2 border-serene-red-light bg-serene-red-light font-medium text-serene-white rounded-xl px-8 py-2"
                  >
                    Add
                  </button>
                )}
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

        <div className="task-list-container px-4 py-12 bg-serene-white rounded-xl my-8 mx-12">
          <div className="flex justify-between mb-4 items-center">
            <p className="text-normal text-serene-purple-800 font-bold text-left ml-24">
              My Tasks
            </p>
            <button
              onClick={() => {
                setShowAddTaskModal(true);
                setTaskData({
                  title: "",
                  description: "",
                  time: "",
                  isDone: false,
                });
                setIsEditingTask({
                  editing: false,
                  editingTaskId: "",
                });
              }}
              className="mr-24 text-2xl rounded-full px-4 py-1 bg-serene-red-light text-serene-white"
            >
              +
            </button>
          </div>
          <div className="task-list flex flex-col gap-6 items-center">
            {tasks.map((task) => {
              return (
                <div className="single-task-container flex items-center border-dashed border-2 border-serene-red-light py-4 px-8 rounded-lg cursor-pointer w-4/5">
                  <div className="task-title-container flex items-center">
                    <input
                      onChange={() => {
                        task.isDone = !task.isDone;
                        editTask(task._id, task);
                      }}
                      type="checkbox"
                      name=""
                      id=""
                      className="w-4 h-4"
                    />
                    <p
                      className={`font-bold text-serene-purple-800 ml-2 ${
                        task.isDone ? "line-through" : "no-underline"
                      }`}
                    >
                      {task.title}
                    </p>
                  </div>
                  <div className="task-action-buttons flex gap-8 ml-auto">
                    <button
                      onClick={() => {
                        setShowAddTaskModal(true);
                        setTaskData({
                          title: task.title,
                          description: task.description,
                          time: task.time,
                        });
                        setIsEditingTask({
                          editing: true,
                          editingTaskId: task._id,
                        });
                      }}
                      className="text-2xl text-serene-red-light"
                    >
                      <FaEdit />
                    </button>
                    <button
                      onClick={() => deleteTask(task._id)}
                      className="text-2xl text-serene-red-light"
                    >
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
