import type { StaticImageData } from "next/image";

import {
    OrmsOdmsImage,
    TsGenericsImage,
    TsReactImage,
    UtilityTypesImage,
} from "@/assets/logs";
import {
    VIPSImage,
    VueBitsImage,
} from "@/assets/projects";
import * as AboutImages from "@/assets/about";

export interface IProjectData {
    SLUG?: string;
    GITHUB?: string;
    YOUTUBE?: string;
    PAPER?: string;
    DESCRIPTION: string[];
    NOTE?: string;
    TECH_STACK: string[];
    IMAGE: StaticImageData | string;
    MORE_INFO?: string;
    // CONTENT 已移除，改用 src/content/projects/[slug].mdx
}

export interface ILogData {
    DATE: string;
    TIME: string;
    LINK: string;
    DESCRIPTION: string;
    IMAGE?: StaticImageData;
}

export const GITHUB_USERNAME = "halleyscomet-99";

export const DATA = {
    HEADER: {
        NAME: "Chenwan Halley Zhong",
        AGE: "23",
        PRONOUN: "she/her",
        HEADLINE: "MS in Robotics student @ Northwestern University | Musician",
        RESUME: "/Resume-Chenwan(Halley)Zhong.pdf",
        EMAIL: "mailto:halleyscomet678@gmail.com",
        GITHUB: "https://github.com/halleyscomet-99",
        LINKEDIN: "https://www.linkedin.com/in/halleyscomet99",
        YOUTUBE: "https://www.youtube.com/@halleyscomet-99",
        INTRO: "As a robotics student at Northwestern University, I build robots designed to survive the transition from the lab to the real world. My passion lies in creating robust, life-enhancing robotics that solve tangible problems while maintaining a playful, artistic edge. I believe that the future of technology should be as much about soul and aesthetics as it is about sensors and code, and I am committed to developing reliable platforms that make a more beautiful, functional world possible.",
        EXPERTISE: "My expertise spans the full robotics stack, from designing custom embedded electronics and mechanical structures to implementing robust perception and motion planning pipelines. Beyond the lab, I also create indie games and write music as a singer-songwriter.",
    },

    ABOUT_IMAGES: [
        {
            src: AboutImages.HeadphoneImage,
            caption: "Presenting interactive installations at \"Seeing Diversity\" exhibition",
        },
        {
            src: AboutImages.StageImage,
            caption: "Performing at Grassland music festivals",
        },
    ],

    EDUCATION: {
        BSE: {
            DEGREE: "B.S.E. in Mechatronics",
            SCHOOL: "Beijing Jiaotong University (BJTU)",
            LOCATION: "Beijing, China",
            DURATION: "Sep, 2020 - Jul, 2024"
        },
        MSR: {
            DEGREE: "Master of Science in Robotics",
            SCHOOL: "Northwestern University",
            LOCATION: "Evanston, IL, USA",
            DURATION: "Sep, 2025 - Dec, 2026"
        }
    },

    EXPERIENCE: {
        HKUSTGZ: {
            WEBSITE: "https://arkxlab.github.io/",
            POSITION: "HKUST(GZ) Information Hub - Research Assistant",
            LOCATION: "Guangzhou, China",
            DURATION: "Oct, 2024 - May, 2025",
            DESCRIPTION: [
                "Developed an ESP32-based embedded system to drive a 10.2g rack-and-pinion module for a soft robotic interface.",
                "Engineered a hardware-minimized PCB (3×3 cm) optimized for mobile, on-body robotic actuation.",
                "Architected a GPT-4o & ElevenLabs pipeline to map generative theater scripts into synchronized robot performances.",
                "Developed a synchronized communication layer in Python via MQTT protocol for sub-millisecond coordination across a modular robot swarm.",
            ],
            TECH_STACK: [
                "Swarm Robotics",
                "Soft Robotics",
                "MQTT",
                "TTS",
                "Embedded Systems",
                "HRI",
                "LLM",
            ],
        },
        "Lenovo Research": {
            WEBSITE: "https://research.lenovo.com/webapp/view_English/home.html",
            POSITION: "Lenovo Research - Software Engineer Intern",
            LOCATION: "Beijing, China",
            DURATION: "Nov, 2023 - Apr, 2024",
            DESCRIPTION: [
                "Developed a virtual hand-object interaction demo in C# and Unity for naked-eye 3D interactive gaming.",
                "Integrated Leap Motion with a monocular camera to enable precise 3D gesture control across XYZ axes.",
                "Engineered 6 custom gestures and operational logic to expand interaction complexity post-metadata acquisition.",
                "Optimized system interactivity based on user test groups, contributing to a 15% rise in overall user satisfaction.",
            ],
            TECH_STACK: [
                "Unity 3D",
                "Gesture Recognition",
                "Leap Motion",
                "Naked-eye 3D",
                "Computer Vision",
            ],
        },
        "NTU": {
            WEBSITE: "https://blogs.ntu.edu.sg/chau-yuen/",
            POSITION: "NTU EEE - Research Assistant",
            LOCATION: "Singapore",
            DURATION: "Jul, 2023 - Sep, 2023",
            DESCRIPTION: [
                "Analyzed commercial HVAC telemetry to extract critical power consumption features for cooling towers and industrial chillers.",
                "Developed a Graph Neural Network (GNN) architecture for thermal mapping, achieving an 8% error rate in sparse sensor environments.",
                "Built high-fidelity twins via Modelica & EnergyPlus to simulate building dynamics, validating 15% energy savings via optimized control.",
            ],
            TECH_STACK: [
                "IoT",
                "Data Analysis",
                "HVAC",
                "GNN",
                "Modelica",
                "EnergyPlus",
            ],
        },
        "BBAC": {
            WEBSITE: "https://www.bbac.com.cn/EN/default.html",
            POSITION: "Beijing Benz Automotive Co., Ltd. - Manufacturing Engineering Intern",
            LOCATION: "Beijing, China",
            DURATION: "Apr, 2023 - Jul, 2023",
            DESCRIPTION: [
                "Developed a C/C++ Hardware Abstraction Layer (HAL) for STM32-based torque-tightening verification systems.",
                "Implemented DMA-based UART/SPI drivers to synchronize force sensor telemetry in real-time.",
                "Optimized interrupt-driven signal conditioning to ensure deterministic response for safety interlocks.",
            ],
            TECH_STACK: [
                "Embedded Systems",
                "HIL",
                "HAL",
                "Communication Protocols",
            ],
        },
    },

    PUBLICATIONS: {
        "SofiBuddy": {
            TITLE: "SofiBuddy: A Soft Mobile Interface for On-Body Interaction",
            CONFERENCE: "SA Posters '25: SIGGRAPH Asia 2025 Posters",
            LINK: "https://dl.acm.org/doi/10.1145/3757374.3771432",
            AUTHORS: [
                "Yixuan Li", "Jie Yu", "Chenwan Halley Zhong", "Zhaowen Deng", "Teng Han", "Yi Cai", "Xin Tong",
            ],
        },
        "RoboTheater": {
            TITLE: "RoboTheater: A Multi-Robot Storytelling Platform from LLM Scripts to Stage Performance",
            CONFERENCE: "TEI 2026 Work-in-Progress",
            LINK: "https://dl.acm.org/doi/10.1145/3731459.3779333",
            AUTHORS: [
                "Yinghao Gao", "Yongbo Yang", "Chenwan Halley Zhong", "Xinyi Zhang", "Junrong Song", "Lawrence H. Kim", "Tengfei Chang", "Xin Tong",
            ],
        },
    },

    PROJECTS: {
        "Vocal2Piano: End-to-End Autonomous Robotic Piano Accompaniment System": {
            SLUG: "vocal2piano",
            GITHUB: "https://github.com/halleyscomet-99/Vocal2Piano",
            DESCRIPTION: [
                "This system integrates Machine Learning with precision mechatronics to perform real-time piano accompaniment from vocal input. I developed a MIR pipeline that transcribes audio into MIDI, which is then mapped by high-performance C++ firmware to a coordinated 60-actuator array. The hardware features a modular CAD assembly validated through motion simulation and 3D printing, powered by custom PCBs designed to manage high-current inductive loads through dedicated power isolation and transient suppression.",
            ],
            TECH_STACK: [
                "Embedded Systems",
                "PCB",
                "Max/MSP",
                "CAD",
                "DSP",
                "Machine Learning",
                "Audio Processing",
            ],
            IMAGE: VIPSImage,
        },
        "Bug Catcher: ROS 2 Vision-Based Dynamic Sorting (FER Panda)": {
            SLUG: "bugcatcher",
            GITHUB: "https://github.com/halleyscomet-99/Bug-Catcher-Vision-Based-Dynamic-Sorting-System.git",
            DESCRIPTION: [
                "Engineered a modular ROS 2 and MoveIt 2 framework for the Franka Emika Panda to enable autonomous Hex-Bug sorting. A monocular sky camera feeds an HSV color classifier and AprilTag-based calibration pipeline that establishes a static TF tree, grounding all camera detections in robot base coordinates for reliable pick-and-place planning. For moving targets, a direct joint trajectory injection pathway bypasses MoveIt entirely, publishing IK-solved commands at 20 Hz to track and intercept live bugs in real time.",
                        ],
            TECH_STACK: [
                "ROS 2",
                "MoveIt 2",
                "Rviz",
                "Computer Vision",
                "OpenCV",
                "IK/FK",
                "Motion Planning",
            ],
            IMAGE: "/media/projects/catfisher/Intro.mp4",
        },
        "Interactive Oropharyngeal-Swab Robot System: High-Precision Pandemic Response Platform": {
            SLUG: "medical-swab-robot",
            DESCRIPTION: [
                "Developed an autonomous oropharyngeal-swab robotic system for high-efficiency, contactless pandemic response, integrating a multi-modal pipeline for precision and safety. We engineered a gesture-based HRI using Leap Motion to enable intuitive, touchless control over the sampling process. The system utilizes a vision-based detection pipeline for target localization and optimized motion planning algorithms to execute collision-free trajectories within the oral cavity. The integrated platform successfully streamlined the sampling cycle to 42 seconds while maintaining robust data synchronization through a custom mobile application.",
            ],
            TECH_STACK: [
                "Gesture Recognition",
                "Embedded Systems",
                "HRI",
                "Medical Robotics",
                "Computer Vision",
                "IK/FK",
                "Motion Planning",
                "Leap Motion",
            ],
            IMAGE: "/media/projects/covid/Intro.mp4",
        },
        "ROS 2 EKF SLAM: Autonomous Landmark Mapping on TurtleBot3": {
            SLUG: "nuturtle",
            GITHUB: "https://github.com/ME495-Navigation/slam-halleyscomet-99",
            DESCRIPTION: [
                "Built a complete mobile robotics stack from scratch in ROS 2 C++, spanning a standalone SE(2) geometry and differential-drive kinematics library, a physics-accurate simulator with Gaussian noise and collision detection, a full robot control and odometry pipeline, and a real-time Extended Kalman Filter SLAM estimator — every component implemented without third-party robotics libraries. The landmark detection pipeline processes raw 2D LiDAR scans through distance-threshold clustering, inscribed-angle-theorem arc classification, and Pratt algebraic circle fitting, feeding range-bearing measurements into a joint EKF state vector that simultaneously tracks robot pose and up to N cylindrical obstacle positions. For unknown data association, Euclidean distance gating was adopted over Mahalanobis distance after identifying that large initial landmark covariance (1×10⁶) collapses Mahalanobis distances to near zero and causes systematic false associations. Deployed on a physical TurtleBot3 Burger, resolving real-world challenges including BEST_EFFORT QoS mismatch with the physical LiDAR driver, encoder dead-band filtering for hardware noise, and aarch64 cross-compilation via Docker — achieving less than 3.5 cm mean landmark estimation error and less than 3 mm robot pose error after one closed loop in simulation.",
            ],
            TECH_STACK: [
                "ROS 2",
                "C++",
                "EKF",
                "LiDAR",
                "TurtleBot3",
                "SLAM",
                "RViz",
                "TF2",
                "Catch2",
            ],
            IMAGE: "/media/projects/nuturtle/Intro.mp4",
        },
        "RoboTheater: A Multi-Robot Storytelling Platform from LLM Scripts to Stage Performance": {
            SLUG: "robotheater",
            PAPER: "https://dl.acm.org/doi/10.1145/3731459.3779333",
            DESCRIPTION: [
                "Designed and implemented RoboTheater, an automated end-to-end platform that translates Generative AI (LLM) scripts into synchronized multi-robot stage performances. We developed a multimodal mapping pipeline that autonomously converts structured JSON scripts into coordinated robotic motion primitives, ElevenLabs-driven expressive speech, and Midjourney-generated environmental projections. The system utilizes an MQTT-based wireless architecture to ensure sub-millisecond synchronization across a swarm of modular robots, effectively bridging computational narrative with physical embodiment. Through pilot user studies, the platform demonstrated high efficacy in conveying complex emotions and character relationships through spatial choreography and rhythmic timing.",
            ],
            TECH_STACK: [
                "Multi-Robot Systems",
                "Swarm Robotics",
                "HRI",
                "MQTT",
                "LLM",
                "TTS",
                "Tangible",
                "Storytelling",
            ],
            IMAGE: "/media/projects/robotheater/Intro.mp4",
        },
        "SofiBuddy: A Soft Mobile Interface for On-Body Interaction": {
            SLUG: "sofibuddy",
            PAPER: "https://doi.org/10.1145/3757374.3771432",
            YOUTUBE: "https://www.youtube.com/watch?v=S_uRjo7Gqys",
            DESCRIPTION: [
                "Designed and developed SofiBuddy, a biomimetic soft robotic interface for intimate on-body interaction. We engineered a 10.2g lightweight transition module using a rack-and-pinion system to convert high-torque motor rotation into linear displacement for wearable applications. By implementing a curvature-based pneumatic control system with ESP32 and miniature diaphragm pumps, the project explores the integration of silicone-based compliant mechanisms with real-time haptic feedback in VR environments.",
            ],
            TECH_STACK: [
                "Soft Robotics",
                "HRI",
                "PCB",
                "CAD",
                "Wearables",
                "Haptic",
                "Ecoflex",
                "Pneumatic Actuation",
            ],
            IMAGE: "/media/projects/sofibuddy/Intro.mp4",
        },
        "Autonomous Biomimetic Quadruped Robot": {
            SLUG: "quadruped",
            DESCRIPTION: [
                "Designed and developed a biomimetic quadruped robot with a 3-DOF leg design for simulated search-and-rescue missions. Controlled by an STM32, the robot implements a stable Trot gait using Inverse Kinematics and composite cycloid trajectory planning. To address navigation in unstructured environments, we developed a real-time attitude adjustment strategy leveraging IMU data to dynamically shift the Center of Mass, enabling the robot to traverse 10° slopes, stairs, and gravel paths. The system also integrates ultrasonic obstacle avoidance, infrared line tracking, and color recognition modules for autonomous path planning.",
            ],
            TECH_STACK: [
                "Gait Planning",
                "IK/FK",
                "Microcontroller",
                "Embedded Systems",
                "STM32",
                "PID",
                "IMU",
            ],
            IMAGE: "/media/projects/quadruped/Intro.mp4",
        },
    },

    LOGS: {
        "ORMs & ODMs: Choosing the Right Tool for Your Database Needs": {
            DATE: "March 24, 2025",
            TIME: "4",
            LINK: "https://www.linkedin.com/pulse/orms-odms-choosing-right-tool-your-database-needs-utkarsh-singhal-dnshc/",
            DESCRIPTION:
                "Object-Relational Mappers (ORMs) and Object-Document Mappers (ODMs) play a crucial role in modern application development by abstracting database interactions and simplifying data management. Whether you're working with relational databases like PostgreSQL and MySQL or NoSQL databases like MongoDB, selecting the right ORM or ODM can significantly impact performance, scalability, and maintainability.",
            IMAGE: OrmsOdmsImage,
        },
        "Mastering TypeScript Generics: Building Flexible and Scalable Code": {
            DATE: "March 8, 2025",
            TIME: "7",
            LINK: "https://www.linkedin.com/pulse/mastering-typescript-generics-building-flexible-scalable-singhal-f77bc/",
            DESCRIPTION:
                "When building robust and scalable applications in TypeScript, flexibility and reusability are key. One of the most powerful features that helps achieve this is Generics. Generics allow developers to create functions, classes, and interfaces that can work with any data type, ensuring that the code is more flexible, reusable, and easier to maintain.",
            IMAGE: TsGenericsImage,
        },
        "TypeScript and React: Harnessing the Full Power of Types": {
            DATE: "March 11, 2025",
            TIME: "6",
            LINK: "https://www.linkedin.com/pulse/typescript-react-harnessing-full-power-types-utkarsh-singhal-6bxuc/",
            DESCRIPTION:
                "React has become the go-to library for building dynamic user interfaces, and TypeScript has emerged as a powerful tool for adding static types to JavaScript applications. While many developers use TypeScript with React, they often only scratch the surface of its capabilities.",
            IMAGE: TsReactImage,
        },
        "Understanding Utility Types in TypeScript: Supercharging Your Codebase": {
            DATE: "March 10, 2025",
            TIME: "7",
            LINK: "https://www.linkedin.com/pulse/understanding-utility-types-typescript-supercharging-your-singhal-zdxwc/",
            DESCRIPTION:
                "TypeScript is renowned for its ability to enhance JavaScript applications by adding static typing. However, when working with complex types, developers often find themselves repeating type definitions or restructuring types to fit different contexts. This is where Utility Types in TypeScript come to the rescue.",
            IMAGE: UtilityTypesImage,
        },
    },

    SKILLS: {
        "Software": [
            "Python (PyTorch, OpenCV)",
            "C",
            "C++",
            "C#",
            "MATLAB",
            "Git",
            "Linux",
            "Bash"
        ],
        "Robotics & Simulation": [
            "ROS 2",
            "SLAM",
            "CoppeliaSim",
            "Gazebo",
            "RViz"
        ],
        "Hardware & Fab": [
            "CAD Modeling (SolidWorks, Fusion 360)",
            "3D Printing (SLA, FDM, SLS, MJF)",
            "CNC Machining & Milling",
            "Laser Cutting",
            "Rapid Prototyping"
        ],
        "Embedded Systems": [
            "PCB Design (Altium/KiCad)",
            "Microcontrollers (STM32, ESP32, Arduino, Teensy, Raspberry Pi)",
            "Soldering",
            "Communication Protocols (I2C, SPI, UART)"
        ],
        "Digital Arts": [
            "Unity & Unreal Engine",
            "Ableton Live (Max/MSP)",
            "Logic Pro",
            "FL Studio"
        ],
        Languages: [
            "English (native)",
            "Mandarin Chinese (native)",
            "Cantonese",
            "French",
            "Spanish",
            "German"
        ],
    },
};