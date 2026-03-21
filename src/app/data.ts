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
    CONTENT?: string; 
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
        "BBAC":
            {
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
            MORE_INFO: "projects/vocal2piano",
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
            CONTENT: `
            <div class="max-w-6xl mx-auto py-12 px-6">
                
                <section class="mb-16">
                    <h1 class="text-4xl font-bold mb-4">Vocal2Piano: Adaptive Multi-DOF Robotic Accompaniment System</h1>
                    <p class="text-xl text-muted-foreground italic">Bridging the gap between deep learning inference and high-torque mechanical feedback.</p>
                </section>

                <section class="mb-20">
                    <h2 id="software" class="text-2xl font-semibold mb-6 flex items-center gap-2">
                        <span class="w-8 h-8 bg-blue-500/20 text-blue-500 rounded-lg flex items-center justify-center text-sm">01</span>
                        Software & ML Pipeline
                    </h2>
                    <p class="mb-8">The intelligent core of the system transcribes vocal input into actionable musical data in real-time. This involves a deep-learning-based MIR (Music Information Retrieval) pipeline that extracts pitch and rhythm from raw audio streams.</p>
                    
                    <div class="my-10 p-6 bg-muted/10 rounded-3xl border border-dashed border-muted-foreground/30 flex flex-col items-center justify-center min-h-[300px]">
                        <p class="text-muted-foreground font-mono text-sm">[PLACEHOLDER: ML Architecture Diagram / MIR Pipeline Flowchart]</p>
                        <p class="text-xs text-muted-foreground mt-2 italic">(Visualizing: Audio Input → F0 Estimation → MIDI Quantization → Max/MSP Handling)</p>
                    </div>

                    <ul class="space-y-4">
                        <li><strong>Deep Learning Transcription:</strong> Utilizing pre-trained pitch tracking models to achieve high-fidelity F0 estimation.</li>
                        <li><strong>Coordinate Mapping:</strong> Dynamically transcribing raw pitch data into MIDI note numbers and time-domain events.</li>
                        <li><strong>Real-time Streaming:</strong> Low-latency communication protocol to pipe processed MIDI data into the robotic control layer.</li>
                    </ul>
                </section>

                <section class="mb-20">
                    <h2 id="max-msp" class="text-2xl font-semibold mb-6 flex items-center gap-2">
                        <span class="w-8 h-8 bg-purple-500/20 text-purple-500 rounded-lg flex items-center justify-center text-sm">02</span>
                        Max/MSP Signal Routing
                    </h2>
                    <p class="mb-8">Max/MSP acts as the central nervous system, handling signal conditioning, MIDI routing, and providing a GUI for real-time monitoring of the robot's state-space.</p>
                    
                    <div class="my-10 overflow-hidden rounded-3xl border border-muted shadow-lg bg-black">
                        <video src="/projects/max_msp_demo.mp4" autoplay loop muted playsinline class="w-full"></video>
                        <p class="text-center text-sm p-4 text-muted-foreground italic">Screen recording: Max/MSP patch routing vocal transients to serial commands</p>
                    </div>
                </section>

                <section class="mb-20">
                    <h2 id="cad" class="text-2xl font-semibold mb-6 flex items-center gap-2">
                        <span class="w-8 h-8 bg-orange-500/20 text-orange-500 rounded-lg flex items-center justify-center text-sm">03</span>
                        Hardware: CAD & Mechanical Design
                    </h2>
                    <p class="mb-8">The mechanical assembly features a dual-stage actuation system: a synchronous belt-driven linear rail and dual 30-key solenoid modules designed in SolidWorks for modularity and rigidity.</p>
                    
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-10">
                        <div class="rounded-2xl border border-muted overflow-hidden bg-black aspect-video flex items-center justify-center">
                            <video src="/projects/solidworks_simulation.mp4" autoplay loop muted playsinline class="w-full h-full object-cover"></video>
                            </div>
                        <div class="rounded-2xl border border-muted overflow-hidden bg-muted/10 flex items-center justify-center aspect-video">
                            <img src="/projects/3d_print_parts.webp" alt="3D Printed Components" class="w-full h-full object-cover" />
                        </div>
                    </div>

                    <ul class="space-y-4">
                        <li><strong>Linear Motion:</strong> NEMA 17 rail system optimized for full 88-key accessibility with high-speed positioning.</li>
                        <li><strong>Modular Finger Actuators:</strong> 60 custom-designed solenoid housings with percussive end-effectors optimized for piano key interaction.</li>
                        <li><strong>Structural Integrity:</strong> Integrated vibration dampening through PETG-CF components and precise tolerance management.</li>
                    </ul>
                </section>

                <section class="mb-20">
                    <h2 id="pcb" class="text-2xl font-semibold mb-6 flex items-center gap-2">
                        <span class="w-8 h-8 bg-green-500/20 text-green-500 rounded-lg flex items-center justify-center text-sm">04</span>
                        Hardware: PCB & Power Distribution
                    </h2>
                    <p class="mb-8">To manage the high inductive loads of 60 solenoids, I designed a custom multi-layer PCB focused on power integrity and signal isolation.</p>
                    
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-10">
                        <img src="/projects/pcb_top_view.webp" alt="PCB Top View" class="rounded-2xl border border-muted" />
                        <img src="/projects/pcb_schematic.webp" alt="PCB Schematic" class="rounded-2xl border border-muted" />
                    </div>

                    <ul class="space-y-4">
                        <li><strong>Power Isolation:</strong> Integrated TPS5430 buck converter to step down 12V/24V to 5V, isolating logic from motor noise.</li>
                        <li><strong>Flyback Protection:</strong> Dedicated diode arrays and massive decoupling capacitors (1000uF) to suppress voltage spikes.</li>
                        <li><strong>IO Expansion:</strong> Cascaded 74HC595 shift registers controlling the MOSFET gate array with sub-ms refresh rates.</li>
                    </ul>
                </section>

                <section class="mb-20">
                    <h2 id="firmware" class="text-2xl font-semibold mb-6 flex items-center gap-2">
                        <span class="w-8 h-8 bg-red-500/20 text-red-500 rounded-lg flex items-center justify-center text-sm">05</span>
                        Firmware & Motion Control
                    </h2>
                    <p class="mb-8">The bridge between digital transcription and physical action, written in C++ for Teensy 4.1 using PlatformIO. The firmware manages real-time spatial mapping and acceleration profiles.</p>
                    
                    <div class="bg-[#1e1e1e] p-8 rounded-3xl border border-white/10 my-8 font-mono text-sm overflow-hidden shadow-xl">
                        <div class="flex gap-2 mb-4 opacity-30">
                            <div class="w-3 h-3 rounded-full bg-red-500"></div>
                            <div class="w-3 h-3 rounded-full bg-yellow-500"></div>
                            <div class="w-3 h-3 rounded-full bg-green-500"></div>
                        </div>
                        <code class="text-blue-300">
                            // Spatial mapping and velocity control<br/>
                            void onMidiReceive(int note, int velocity) {<br/>
                            &nbsp;&nbsp;int railPos = mapNoteToRail(note);<br/>
                            &nbsp;&nbsp;int solenoidIdx = mapNoteToModule(note);<br/>
                            &nbsp;&nbsp;stepper.moveTo(railPos, []() {<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;triggerSolenoid(solenoidIdx, velocity);<br/>
                            &nbsp;&nbsp;});<br/>
                            }
                        </code>
                    </div>
                </section>

                <section class="mb-20">
                    <h2 id="performance" class="text-3xl font-bold mb-8 text-center">Final System Demonstration</h2>
                    <div class="relative group">
                        <video src="/projects/vocal2piano_final_performance.mp4" controls class="rounded-3xl border-4 border-muted shadow-2xl w-full aspect-video bg-black"></video>
                        <div class="absolute inset-0 rounded-3xl pointer-events-none ring-1 ring-inset ring-white/10"></div>
                    </div>
                </section>


            </div>
    `
        },        
        "Bug Catcher: Vision-Based Dynamic Sorting System": {
            SLUG: "bugcatcher",
            MORE_INFO: "projects/bugcatcher",
            GITHUB: "https://github.com/halleyscomet-99/Bug-Catcher-Vision-Based-Dynamic-Sorting-System.git",
            DESCRIPTION: [
                "Engineered a modular ROS 2 and MoveIt 2 framework for the Franka Emika Panda (FER) to enable autonomous sorting through collision-aware motion planning. By integrating monocular color classification and AprilTag calibration with dynamic TF tree management, the system achieves high-precision spatial transformations for robust object detection. To handle the stochastic motion of Hex-Bug targets, we implemented a low-latency control pathway that facilitates real-time trajectory updates, ensuring adaptive and responsive robotic manipulation in dynamic environments.",
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
            IMAGE: "/video/projects/catfisher/Intro.mp4",
        },
        "Interactive Oropharyngeal-Swab Robot System: High-Precision Pandemic Response Platform": {
            SLUG: "medical-swab-robot",
            MORE_INFO: "projects/medical-swab-robot",
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
            IMAGE: "/video/projects/covid/Intro.mp4",
        },
        "RoboTheater: A Multi-Robot Storytelling Platform from LLM Scripts to Stage Performance": {
            SLUG: "robotheater",
            MORE_INFO: "projects/robotheater",
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
            IMAGE: "/video/projects/robotheater/Intro.mp4",
        },
        "SofiBuddy: A Soft Mobile Interface for On-Body Interaction": {
            SLUG: "sofibuddy",
            MORE_INFO: "projects/sofibuddy",
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
            IMAGE: "/video/projects/sofibuddy/Intro.mp4",
        },
        "Autonomous Biomimetic Quadruped Robot": {
            SLUG: "quadruped",
            MORE_INFO: "projects/quadruped",
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
            IMAGE: "/video/projects/quadruped/Intro.mp4",
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
        "Understanding Utility Types in TypeScript: Supercharging Your Codebase":
            {
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