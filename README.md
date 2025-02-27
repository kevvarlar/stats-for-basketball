# Stats for Basketball

Welcome to the Stats for Basketball project! This repository is a full-stack application that displays the roster and stats of NBA teams.

## Table of Contents

- [Introduction](#introduction)
- [Installation](#installation)
- [Usage](#usage)

## Introduction

This project aims to provide an easy way to view NBA statistics in a familiar tabular format. You can view the roster and stats of teams and their players, and you can easily mark your favorite team.

## Installation

To get started, clone the repository, install the necessary dependencies, and create a .env file based on the example.env file (you will need an API Key from https://developer.sportradar.com/ for the NBA data):

```bash
git clone https://github.com/kevinvar/stats-for-basketball.git
cd stats-for-basketball
npm install
```

```.env
PORT=[YOUR_PORT]
API_KEY=[NBA_API_KEY_FROM_SPORT_RADAR]
```
## Usage

After installation, you can start the express server:

```bash
npm start
```
