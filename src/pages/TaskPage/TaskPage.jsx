import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import { FaEdit } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";

const TaskPage = () => {
  return (
    <div className="TaskPage">
      <Navbar />

      <div className="task-container rounded-lg bg-serene-red-light my-4 mx-12 p-12">
        <h1 className="text-2xl font-semibold text-left ml-12 text-serene-white">
          Welcome back, Adarsh!
        </h1>
        <p className="text-normal font-normal text-left ml-12 text-serene-white mt-1">
          You have 4 tasks for today, All the Best!
        </p>

        <div className="task-list-container p-4 bg-serene-white rounded-xl my-8 mx-12">
          <div className="flex justify-between mt-4 mb-4 items-center">
            <p className="text-normal font-bold text-left ml-24">To-Do List</p>
            <button className="mr-24 text-2xl rounded-full px-2 bg-serene-red-light text-serene-white">
              +
            </button>
          </div>
          <div className="task-list flex flex-col gap-6">
            <div className="single-task-container flex">
              <div className="task-title-container flex items-center ml-48">
                <input type="checkbox" name="" id="" className="" />
                <label htmlFor="task1" className="font-semibold ml-2">
                  Math Homework
                </label>
              </div>
              <div className="task-action-buttons flex gap-8 ml-auto mr-48">
                <button className="text-2xl text-serene-red-light">
                  <FaEdit />
                </button>
                <button className="text-2xl text-serene-red-light">
                  <AiFillDelete />
                </button>
              </div>
            </div>
            <div className="single-task-container flex">
              <div className="task-title-container flex items-center ml-48">
                <input type="checkbox" name="" id="" className="" />
                <label htmlFor="task1" className="font-semibold ml-2">
                  Viva Preparation
                </label>
              </div>
              <div className="task-action-buttons flex gap-8 ml-auto mr-48">
                <button className="text-2xl text-serene-red-light">
                  <FaEdit />
                </button>
                <button className="text-2xl text-serene-red-light">
                  <AiFillDelete />
                </button>
              </div>
            </div>
            <div className="single-task-container flex">
              <div className="task-title-container flex items-center ml-48">
                <input type="checkbox" name="" id="" className="" />
                <label htmlFor="task1" className="font-semibold ml-2">
                  College Assignments
                </label>
              </div>
              <div className="task-action-buttons flex gap-8 ml-auto mr-48">
                <button className="text-2xl text-serene-red-light">
                  <FaEdit />
                </button>
                <button className="text-2xl text-serene-red-light">
                  <AiFillDelete />
                </button>
              </div>
            </div>
            <div className="single-task-container flex">
              <div className="task-title-container flex items-center ml-48">
                <input type="checkbox" name="" id="" className="" />
                <label htmlFor="task1" className="font-semibold ml-2">
                  neoG Work
                </label>
              </div>
              <div className="task-action-buttons flex gap-8 ml-auto mr-48">
                <button className="text-2xl text-serene-red-light">
                  <FaEdit />
                </button>
                <button className="text-2xl text-serene-red-light">
                  <AiFillDelete />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskPage;
