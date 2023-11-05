import React from "react";
import login from "./login";

const membership = () => {
  return (
    <div class="flex md:max-xl:flex">
      <div class="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700 mt-12 ml-4">
        <h5 class="mb-4 text-xl font-medium text-gray-500 dark:text-gray-400">
          Monthly plan
        </h5>
        <div class="flex items-baseline text-gray-900 dark:text-white">
          <span class="text-4xl font-semibold">₹</span>
          <span class="text-4xl font-bold tracking-tight ml-1">799</span>
          <span class="ml-1 text-xl font-normal text-gray-500 dark:text-gray-400">
            /month
          </span>
        </div>
        <ul role="list" class="space-y-5 my-7">
          <li class="flex space-x-3">
            <svg
              aria-hidden="true"
              class="flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Check icon</title>
              <path
                fill-rule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
              Group Workouts
            </span>
          </li>
          <li class="flex space-x-3">
            <svg
              aria-hidden="true"
              class="flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Check icon</title>
              <path
                fill-rule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
              Personal Training
            </span>
          </li>
          <li class="flex space-x-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="4"
              height="4"
              class="w-5 h-5"
              fill="red"
              viewBox="0 0 1792 1792"
            >
              <path d="M1277 1122q0-26-19-45l-181-181 181-181q19-19 19-45 0-27-19-46l-90-90q-19-19-46-19-26 0-45 19l-181 181-181-181q-19-19-45-19-27 0-46 19l-90 90q-19 19-19 46 0 26 19 45l181 181-181 181q-19 19-19 45 0 27 19 46l90 90q19 19 46 19 26 0 45-19l181-181 181 181q19 19 45 19 27 0 46-19l90-90q19-19 19-46zm387-226q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"></path>
            </svg>
            <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
              Locker
            </span>
          </li>
          <li class="flex space-x-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="4"
              height="4"
              class="w-5 h-5"
              fill="red"
              viewBox="0 0 1792 1792"
            >
              <path d="M1277 1122q0-26-19-45l-181-181 181-181q19-19 19-45 0-27-19-46l-90-90q-19-19-46-19-26 0-45 19l-181 181-181-181q-19-19-45-19-27 0-46 19l-90 90q-19 19-19 46 0 26 19 45l181 181-181 181q-19 19-19 45 0 27 19 46l90 90q19 19 46 19 26 0 45-19l181-181 181 181q19 19 45 19 27 0 46-19l90-90q19-19 19-46zm387-226q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"></path>
            </svg>
            <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
              Zumba Training
            </span>
          </li>
          <li class="flex space-x-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="4"
              height="4"
              class="w-5 h-5"
              fill="red"
              viewBox="0 0 1792 1792"
            >
              <path d="M1277 1122q0-26-19-45l-181-181 181-181q19-19 19-45 0-27-19-46l-90-90q-19-19-46-19-26 0-45 19l-181 181-181-181q-19-19-45-19-27 0-46 19l-90 90q-19 19-19 46 0 26 19 45l181 181-181 181q-19 19-19 45 0 27 19 46l90 90q19 19 46 19 26 0 45-19l181-181 181 181q19 19 45 19 27 0 46-19l90-90q19-19 19-46zm387-226q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"></path>
            </svg>
            <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
              Shower and Spa Access
            </span>
          </li>
          <li class="flex space-x-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="4"
              height="4"
              class="w-5 h-5"
              fill="red"
              viewBox="0 0 1792 1792"
            >
              <path d="M1277 1122q0-26-19-45l-181-181 181-181q19-19 19-45 0-27-19-46l-90-90q-19-19-46-19-26 0-45 19l-181 181-181-181q-19-19-45-19-27 0-46 19l-90 90q-19 19-19 46 0 26 19 45l181 181-181 181q-19 19-19 45 0 27 19 46l90 90q19 19 46 19 26 0 45-19l181-181 181 181q19 19 45 19 27 0 46-19l90-90q19-19 19-46zm387-226q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"></path>
            </svg>
            <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
              Gym Merchandise
            </span>
          </li>
          <li class="flex space-x-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="4"
              height="4"
              class="w-5 h-5"
              fill="red"
              viewBox="0 0 1792 1792"
            >
              <path d="M1277 1122q0-26-19-45l-181-181 181-181q19-19 19-45 0-27-19-46l-90-90q-19-19-46-19-26 0-45 19l-181 181-181-181q-19-19-45-19-27 0-46 19l-90 90q-19 19-19 46 0 26 19 45l181 181-181 181q-19 19-19 45 0 27 19 46l90 90q19 19 46 19 26 0 45-19l181-181 181 181q19 19 45 19 27 0 46-19l90-90q19-19 19-46zm387-226q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"></path>
            </svg>
            <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
              Nutritious Consultation
            </span>
          </li>
        </ul>
        <a
          href="./login"
          class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 ml-12"
        >
          Subscribe to this Plan
        </a>
      </div>

      <div class="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700 mt-12 ml-10">
        <h5 class="mb-4 text-xl font-medium text-gray-500 dark:text-gray-400">
          Classic plan
        </h5>
        <div class="flex items-baseline text-gray-900 dark:text-white">
          <span class="text-4xl font-semibold">₹</span>
          <span class="text-4xl font-bold tracking-tight ml-1">1200</span>
          <span class="ml-1 text-xl font-normal text-gray-500 dark:text-gray-400">
            /month
          </span>
        </div>
        <ul role="list" class="space-y-5 my-7">
          <li class="flex space-x-3">
            <svg
              aria-hidden="true"
              class="flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Check icon</title>
              <path
                fill-rule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
              Group Workouts
            </span>
          </li>
          <li class="flex space-x-3">
            <svg
              aria-hidden="true"
              class="flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Check icon</title>
              <path
                fill-rule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
              Personal Training
            </span>
          </li>
          <li class="flex space-x-3">
            <svg
              aria-hidden="true"
              class="flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Check icon</title>
              <path
                fill-rule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
              Locker
            </span>
          </li>
          <li class="flex space-x-3">
            <svg
              aria-hidden="true"
              class="flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Check icon</title>
              <path
                fill-rule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
              Zumba Training
            </span>
          </li>
          <li class="flex space-x-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="4"
              height="4"
              class="w-5 h-5"
              fill="red"
              viewBox="0 0 1792 1792"
            >
              <path d="M1277 1122q0-26-19-45l-181-181 181-181q19-19 19-45 0-27-19-46l-90-90q-19-19-46-19-26 0-45 19l-181 181-181-181q-19-19-45-19-27 0-46 19l-90 90q-19 19-19 46 0 26 19 45l181 181-181 181q-19 19-19 45 0 27 19 46l90 90q19 19 46 19 26 0 45-19l181-181 181 181q19 19 45 19 27 0 46-19l90-90q19-19 19-46zm387-226q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"></path>
            </svg>
            <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
              Shower and Spa Access
            </span>
          </li>
          <li class="flex space-x-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="4"
              height="4"
              class="w-5 h-5"
              fill="red"
              viewBox="0 0 1792 1792"
            >
              <path d="M1277 1122q0-26-19-45l-181-181 181-181q19-19 19-45 0-27-19-46l-90-90q-19-19-46-19-26 0-45 19l-181 181-181-181q-19-19-45-19-27 0-46 19l-90 90q-19 19-19 46 0 26 19 45l181 181-181 181q-19 19-19 45 0 27 19 46l90 90q19 19 46 19 26 0 45-19l181-181 181 181q19 19 45 19 27 0 46-19l90-90q19-19 19-46zm387-226q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"></path>
            </svg>
            <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
              Gym Merchandise
            </span>
          </li>
          <li class="flex space-x-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="4"
              height="4"
              class="w-5 h-5"
              fill="red"
              viewBox="0 0 1792 1792"
            >
              <path d="M1277 1122q0-26-19-45l-181-181 181-181q19-19 19-45 0-27-19-46l-90-90q-19-19-46-19-26 0-45 19l-181 181-181-181q-19-19-45-19-27 0-46 19l-90 90q-19 19-19 46 0 26 19 45l181 181-181 181q-19 19-19 45 0 27 19 46l90 90q19 19 46 19 26 0 45-19l181-181 181 181q19 19 45 19 27 0 46-19l90-90q19-19 19-46zm387-226q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"></path>
            </svg>
            <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
              Nutritious Consultation
            </span>
          </li>
        </ul>
        <a
          href="./login"
          class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 ml-12"
        >
          Subscribe to this Plan
        </a>
      </div>

      <div class="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700 mt-12 ml-10">
        <h5 class="mb-4 text-xl font-medium text-gray-500 dark:text-gray-400">
          Standard plan
        </h5>
        <div class="flex items-baseline text-gray-900 dark:text-white">
          <span class="text-3xl font-semibold">₹</span>
          <span class="text-4xl font-bold tracking-tight ml-1">1600</span>
          <span class="ml-1 text-xl font-normal text-gray-500 dark:text-gray-400">
            /month
          </span>
        </div>
        <ul role="list" class="space-y-5 my-7">
          <li class="flex space-x-3">
            <svg
              aria-hidden="true"
              class="flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Check icon</title>
              <path
                fill-rule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
              Group Workouts
            </span>
          </li>
          <li class="flex space-x-3">
            <svg
              aria-hidden="true"
              class="flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Check icon</title>
              <path
                fill-rule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
              Personal Training
            </span>
          </li>
          <li class="flex space-x-3">
            <svg
              aria-hidden="true"
              class="flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Check icon</title>
              <path
                fill-rule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
              Locker
            </span>
          </li>
          <li class="flex space-x-3">
            <svg
              aria-hidden="true"
              class="flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Check icon</title>
              <path
                fill-rule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
              Zumba Training
            </span>
          </li>
          <li class="flex space-x-3">
            <svg
              aria-hidden="true"
              class="flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Check icon</title>
              <path
                fill-rule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
              Shower and Spa Access
            </span>
          </li>
          <li class="flex space-x-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="4"
              height="4"
              class="w-5 h-5"
              fill="red"
              viewBox="0 0 1792 1792"
            >
              <path d="M1277 1122q0-26-19-45l-181-181 181-181q19-19 19-45 0-27-19-46l-90-90q-19-19-46-19-26 0-45 19l-181 181-181-181q-19-19-45-19-27 0-46 19l-90 90q-19 19-19 46 0 26 19 45l181 181-181 181q-19 19-19 45 0 27 19 46l90 90q19 19 46 19 26 0 45-19l181-181 181 181q19 19 45 19 27 0 46-19l90-90q19-19 19-46zm387-226q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"></path>
            </svg>
            <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
              Gym Merchandise
            </span>
          </li>
          <li class="flex space-x-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="4"
              height="4"
              class="w-5 h-5"
              fill="red"
              viewBox="0 0 1792 1792"
            >
              <path d="M1277 1122q0-26-19-45l-181-181 181-181q19-19 19-45 0-27-19-46l-90-90q-19-19-46-19-26 0-45 19l-181 181-181-181q-19-19-45-19-27 0-46 19l-90 90q-19 19-19 46 0 26 19 45l181 181-181 181q-19 19-19 45 0 27 19 46l90 90q19 19 46 19 26 0 45-19l181-181 181 181q19 19 45 19 27 0 46-19l90-90q19-19 19-46zm387-226q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"></path>
            </svg>
            <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
              Nutritious Consultation
            </span>
          </li>
        </ul>
        <a
          href="./login"
          class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 ml-12"
        >
          Subscribe to this Plan
        </a>
      </div>

      <div class="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700 mt-12 ml-10 mr-4">
        <h5 class="mb-4 text-xl font-medium text-gray-500 dark:text-gray-400">
          Elite plan
        </h5>
        <div class="flex items-baseline text-gray-900 dark:text-white">
          <span class="text-4xl font-semibold">₹</span>
          <span class="text-4xl font-bold tracking-tight ml-1">2000</span>
          <span class="ml-1 text-xl font-normal text-gray-500 dark:text-gray-400">
            /month
          </span>
        </div>
        <ul role="list" class="space-y-5 my-7">
          <li class="flex space-x-3">
            <svg
              aria-hidden="true"
              class="flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Check icon</title>
              <path
                fill-rule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
              Group Workouts
            </span>
          </li>
          <li class="flex space-x-3">
            <svg
              aria-hidden="true"
              class="flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Check icon</title>
              <path
                fill-rule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
              Personal Training
            </span>
          </li>
          <li class="flex space-x-3">
            <svg
              aria-hidden="true"
              class="flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Check icon</title>
              <path
                fill-rule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
              Locker
            </span>
          </li>
          <li class="flex space-x-3">
            <svg
              aria-hidden="true"
              class="flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Check icon</title>
              <path
                fill-rule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
              Zumba Training
            </span>
          </li>
          <li class="flex space-x-3">
            <svg
              aria-hidden="true"
              class="flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Check icon</title>
              <path
                fill-rule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
              Shower and Spa Access
            </span>
          </li>
          <li class="flex space-x-3">
            <svg
              aria-hidden="true"
              class="flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Check icon</title>
              <path
                fill-rule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
              Gym Merchandise
            </span>
          </li>
          <li class="flex space-x-3">
            <svg
              aria-hidden="true"
              class="flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Check icon</title>
              <path
                fill-rule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
              Nutritious Consultation
            </span>
          </li>
        </ul>
        <a
          href="./login"
          class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 ml-12"
        >
          Subscribe to this Plan
        </a>
      </div>
    </div>
  );
};

export default membership;
