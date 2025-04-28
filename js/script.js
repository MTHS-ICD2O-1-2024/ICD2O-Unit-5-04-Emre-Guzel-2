
// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Emre Guzel
// Created on: April 22 2025
// This file contains the JS functions for index.html

"use strict"

function pgNumberCalculator() {
  // Setting the variables
  const age = parseInt(document.getElementById("age").value)

  let message = ""

  if (age >= 17) {
    message = " You can watch R-rated movie alone."
  } else if (age >= 13) {
    message = " You can watch PG-13 movie alone."
  }else if (age >= 5) {
    message = " You can watch G or PG movie alone."
  }else {
    message = " Uh, you're too young for most things."
  }
  document.getElementById("result").textContent = message;
}
