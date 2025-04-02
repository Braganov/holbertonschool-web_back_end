# ES6 Data Manipulation

This project explores JavaScript ES6 data manipulation techniques using arrays, typed arrays, Sets, Maps, and WeakMaps.

## Learning Objectives

- How to use map, filter and reduce on arrays
- Typed arrays for handling binary data
- Set, Map, and WeakMap data structures and their applications

## Requirements

- All files will be executed on Ubuntu 18.04 LTS using NodeJS 12.11.x
- Allowed editors: vi, vim, emacs, Visual Studio Code
- All files should end with a new line
- A README.md file at the root of the project folder is mandatory
- Code should use the JS standard and be verified with eslint
- Code needs to be tested with Jest

## Setup

### Install NodeJS 20.x
```bash
curl -sL https://deb.nodesource.com/setup_20.x -o nodesource_setup.sh
sudo bash nodesource_setup.sh
sudo apt install nodejs -y
```

### Verify installation
```bash
nodejs -v   # Should output v20.x.x
npm -v      # Should output 10.x.x
```

### Install project dependencies
```bash
npm install
```

## Usage

To run a specific file:
```bash
npm run dev [filename]
```

To run tests:
```bash
npm test
```

To check code with ESLint:
```bash
npm run lint [filename]
```

## Files
- 0-get_list_students.js: Function that returns an array of student objects
