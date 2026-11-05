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
    SUMMARY: string;
    DESCRIPTION: string[];
    NOTE?: string;
    TECH_STACK: string[];
    IMAGE: StaticImageData | string;
    MORE_INFO?: string;
    LIVE_PREVIEW?: string;
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
        "Stealth AI": {
            // WEBSITE: "...",
            POSITION: "Stealth AI Startup - Robot Learning Engineer Intern",
            LOCATION: "Mountain View, CA, USA",
            DURATION: "Jun, 2026 - Sep, 2026",
            DESCRIPTION: [
                "Deployed action-chunked diffusion policies on dual Flexiv arms with Wuji hands, integrating multi-view RGB and proprioception for bimanual control.",
                "Fine-tuned Robometer's categorical progress head on in-domain video with failed and rewound trajectories to model task regressions.",
                "Built a progress-gated state machine chaining subtask policies, using k-frame completion checks for autonomous task transitions.",
                "Engineered a leader-follower teleop pipeline with timestamp-aligned RGB/proprio, trajectory visualization, and progress-based demo filtering."
            ],
            TECH_STACK: [
                "Diffusion Policy",
                "Imitation Learning",
                "Bimanual System",
                "Dexterous Manipulation",
                "Teleoperation",
                "Finite-State Machine",
            ],
        },
        "HKUSTGZ": {
            WEBSITE: "https://arkxlab.github.io/",
            POSITION: "HKUST(GZ) Information Hub - Research Assistant",
            LOCATION: "Guangzhou, China",
            DURATION: "Oct, 2024 - May, 2025",
            DESCRIPTION: [
                "Developed ESP32 firmware in C to control a 10.2g rack-and-pinion actuation module, integrating embedded motion control with lightweight wearable soft robotics.",
                "Designed a compact 3 × 3 cm custom PCB, optimizing component placement, signal routing, and hardware footprint for on-body robotic actuation.",
                "Architected a GPT-4o and ElevenLabs pipeline to translate AI-generated theater scripts into synchronized speech and executable robot motion sequences.",
                "Engineered a distributed Python&MQTT publish-subscribe architecture for synchronized command dispatch, message routing, and actuation control across 6 modular robot nodes."
            ],
            TECH_STACK: [
                "Swarm Robotics",
                "Soft Robotics",
                "MQTT",
                "TTS",
                "Embedded Systems",
                "HRI",
                "LLM",
                "Multi-Robot Coordination"
            ],
        },
        "Lenovo Research": {
            // WEBSITE: "...",
            POSITION: "Lenovo Research - Software Engineer Intern",
            LOCATION: "Beijing, China",
            DURATION: "Nov, 2023 - Apr, 2024",
            DESCRIPTION: [
                "Developed a real-time 3D hand-object interaction system in Unity (C#), integrating Leap Motion tracking and monocular camera input for glasses-free 3D gaming.",
                "Implemented skeletal motion retargeting using quaternion-based joint mapping, coordinate transformations, forward kinematics, and anatomical constraints.",
                "Engineered 6 custom gesture recognizers using joint-angle thresholds, fingertip distances, and temporal hysteresis for stable real-time 3D object manipulation.",
            ],
            TECH_STACK: [
                "Unity 3D",
                "Gesture Recognition",
                "Leap Motion",
                "Motion Retargeting",
                "Computer Vision",
                "Forward Kinematics (FK)",
                "Skeletal Animation"
            ],
        },
        "NTU": {
            WEBSITE: "https://blogs.ntu.edu.sg/chau-yuen/",
            POSITION: "NTU EEE - Research Assistant",
            LOCATION: "Singapore",
            DURATION: "Jul, 2023 - Sep, 2023",
            DESCRIPTION: [
                "Analyzed commercial HVAC telemetry to identify key power-consumption features and operating patterns in cooling towers and industrial chillers.",
                "Developed a Graph Neural Network (GNN) for thermal mapping under sparse sensor coverage, achieving an 8% prediction error rate.",
                "Built building-energy digital twins using Modelica and EnergyPlus to simulate thermal dynamics and evaluate optimized control strategies, demonstrating 15% energy savings in simulation.",
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
            // WEBSITE: "...",
            POSITION: "Beijing Benz Automotive Co., Ltd. - Manufacturing Engineering Intern",
            LOCATION: "Beijing, China",
            DURATION: "Apr, 2023 - Jul, 2023",
            DESCRIPTION: [
                "Developed a C Hardware Abstraction Layer (HAL) for STM32-based torque-tightening verification systems used in automotive manufacturing.",
                "Implemented DMA-based UART/SPI drivers for real-time force-sensor data acquisition and synchronization.",
                "Optimized interrupt-driven signal processing to ensure deterministic response times for safety interlocks.",
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
        "Vocal2Piano: A Voice-Controlled Robot Piano Accompanist": {
            SLUG: "vocal2piano",
            GITHUB: "https://github.com/halleyscomet-99/Vocal2Piano",
            YOUTUBE: "https://www.youtube.com/watch?v=shSAkz8AxsA&t=9s",
            LIVE_PREVIEW: "https://vocal2piano.vercel.app/",
            SUMMARY: "A robotic piano accompanist integrating AI-powered harmonization, motion planning, and real-time embedded control.",
            DESCRIPTION: [
                "Vocal2Piano is a voice-controlled robotic piano accompanist designed and built from scratch to play alongside a live singer. The system combines music transcription, data-driven harmonization, physically constrained motion planning, and real-time vocal tracking to create adaptive piano accompaniment. Two motorized robotic hands with 26 solenoid fingers play on a real keyboard, responding to the singer's timing, dynamics, and key changes. Built end-to-end with a React web app, Teensy firmware, custom 4-layer PCBs, and Fusion 360 mechanical design, the project brings together robotics, music technology, and human-robot interaction.",
                "Explore the live web app and YouTube video. <a href=\"https://vocal2piano.vercel.app/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"inline-flex items-center justify-center h-7 w-7 rounded-full border border-muted bg-muted/10 text-primary transition-colors hover:text-primary/80\"><svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"h-4 w-4\"><circle cx=\"12\" cy=\"12\" r=\"8\"></circle><path d=\"M3 12h18\"></path><path d=\"M12 3a15 15 0 0 1 0 18\"></path><path d=\"M12 3a15 15 0 0 0 0 18\"></path></svg></a> <a href=\"https://www.youtube.com/watch?v=shSAkz8AxsA&t=9s\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"inline-flex items-center justify-center h-7 w-7 rounded-full border border-muted bg-muted/10 text-primary transition-colors hover:text-primary/80\"><svg viewBox=\"0 0 24 24\" fill=\"currentColor\" class=\"h-4 w-4\"><path d=\"M22.5 12.1c0-1.7-.2-3.4-.6-4.9-.5-1.8-1.9-3.3-3.7-3.8C16.6 2.5 12 2.5 12 2.5s-4.6 0-6.2.9c-1.8.5-3.2 2-3.7 3.8-.4 1.5-.6 3.2-.6 4.9s.2 3.4.6 4.9c.5 1.8 1.9 3.3 3.7 3.8 1.6.9 6.2.9 6.2.9s4.6 0 6.2-.9c1.8-.5 3.2-2 3.7-3.8.4-1.5.6-3.2.6-4.9Zm-13.8 4.4V7.5l7 4.5-7 4.5Z\"></path></svg></a>"
                        ],
            TECH_STACK: [
                "Embedded Systems",
                "PCB",
                "CAD",
                "React/TypeScript",
                "Robotics",
                "HRI",
                "Music Technology"
            ],
            IMAGE: "/media/projects/vocal2piano/Intro.mp4",
        },
        "Bug Catcher: ROS 2 Vision-Based Dynamic Sorting (FER Panda)": {
            SLUG: "bugcatcher",
            GITHUB: "https://github.com/halleyscomet-99/Bug-Catcher-Vision-Based-Dynamic-Sorting-System.git",
            SUMMARY: "ROS 2 vision-guided Franka Panda arm that tracks and sorts moving Hex Bugs in real time.",
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
            SUMMARY: "Touchless robotic swab system using gesture control and vision-guided planning for contactless testing.",
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
            GITHUB: "https://github.com/halleyscomet-99/EKF_SLAM_TurtleBot3.git",
            SUMMARY: "Full ROS 2 mobile robotics stack with real-time EKF SLAM for joint pose and landmark tracking.",
            DESCRIPTION: [
                "Developed a complete ROS 2 C++ mobile robotics stack from scratch, including an SE(2) geometry library, differential-drive kinematics, and a physics-accurate simulator, while implementing a real-time EKF SLAM estimator for joint state tracking of robot pose and cylindrical landmarks. The perception pipeline utilizes Pratt algebraic circle fitting for LiDAR-based obstacle detection, incorporating a robust data association logic that employs Euclidean distance gating to overcome systematic Mahalanobis distance failures caused by high initial covariance.",
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
            SUMMARY: "End-to-end platform that turns LLM-generated scripts into synchronized multi-robot stage performances.",
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
            SUMMARY: "Biomimetic soft robotic interface delivering lightweight, curvature-based haptic feedback for on-body interaction.",
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
            SUMMARY: "STM32-powered biomimetic quadruped with adaptive gait planning for search-and-rescue over uneven terrain.",
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
            "Bash",
            "HTML",
            "CSS",
            "JavaScript"
        ],
        "Robotics & Simulation": [
            "ROS 2",
            "SLAM",
            "CoppeliaSim",
            "Gazebo",
            "RViz",
            "Isaac Gym/Isaac Lab",
            "MuJoCo",
            "Inverse Kinematics",
            "Forward Kinematics",
            "Contact Dynamics"
        ],
        "Machine Learning & AI": [
            "Diffusion Policy",
            "Imitation Learning",
            "Deep Reinforcement Learning",
            "Deep Learning",
            "Foundation Models (LLM/VLM/VLA)"
        ],
        "Hardware & Fab": [
            "CAD Modeling (SolidWorks,Fusion360)",
            "3D Printing (SLA, FDM, SLS, MJF)",
            "CNC Machining & Milling",
            "Laser Cutting",
        ],
        "Embedded Systems": [
            "PCB Design (Altium,KiCad)",
            "Microcontrollers (STM32, ESP32, Arduino, Teensy, Raspberry Pi)",
            "Soldering",
            "Communication Protocols (I2C, SPI, UART)"
        ],
        "Digital Arts": [
            "Unity & Unreal Engine",
            "Ableton Live (Max/MSP)",
            "Logic Pro",
            "FL Studio",
            "TouchDesigner",
        ],
        "Languages": [
            "English (native)",
            "Mandarin Chinese (native)",
            "Cantonese",
            "French",
            "Spanish",
            "German"
        ],
    },
};