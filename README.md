# Web Programming Assignment 3 - Course Management System

## File Organization
This project is divided into four main JavaScript modules to separate concerns:
- **models.js**: Defines the `Student` class and enforces ID immutability.
- **database.js**: Simulates an asynchronous data fetch using callbacks and timers.
- **analytics.js**: Contains array manipulation functions for processing student data.
- **main.js**: The executable entry point that ties all modules together and formats the output.

## Challenges Faced
- Configuring the Node.js environment to properly handle ES6 module imports across different files.
- Understanding how to apply `Object.defineProperty()` effectively inside a class constructor to lock down specific properties (making the ID read-only).
- Chaining higher-order array methods (`filter`, `reduce`, `some`) in `analytics.js` to accurately calculate specific course averages without modifying the original arrays.