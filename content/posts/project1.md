---
title: "Bug Catcher: Robotic Sorting System"
date: 2026-01-12
tags: ["ROS 2", "MoveIt 2", "Computer Vision", "Python", "Franka Emika Research Arm"]
image: "https://tmpegues.github.io/assets/bug/bug1.png"
description: "Developed ROS 2 packages to use a Franka Emika Research (FER) arm to pick up and sort moving targets in real-time."
---

## Overview

This project was a collaborative effort for Northwestern's **MECH_ENG 450: Embedded Systems in Robotics**. Our team (Rishika Bera, Nolan Knight, and myself) built an autonomous system to sort HexBugs by color using a Franka Emika Research (FER) arm.

The project involved three main pillars:
1. **Camera Calibration:** Determining the camera's extrinsic parameters relative to the robot base.
2. **Computer Vision:** Tracking the real-time positions of moving HexBugs and sorting bins using OpenCV.
3. **Motion Planning:** Executing precise trajectories to intercept and sort moving targets.

## Motion Control Strategy

Because HexBugs move randomly, standard static trajectories weren't enough. We needed a dynamic approach:

* **Real-time Trajectory Updates:** Instead of using fixed MoveIt 2 actions, we used MoveIt for trajectory calculation and sent the results directly to the `joint_trajectory_controller`.
* **Low Latency:** This allowed us to constantly update the arm's path as the vision system detected new positions, enabling the arm to "track" and intercept moving bugs.

---

### Project Gallery

![The FER arm picking up a HexBug](https://tmpegues.github.io/assets/bug/bug1.png)

#### Tracking Simulation
In our early testing, we used **turtlesim** to simulate the bug's movement. The FER arm tracked the simulated turtle position with high fidelity before we moved to physical hardware.

---

### Team & Links
- **GitHub Repository:** [Link to Repository](https://github.com/halleyscomet-99/bug-catcher)