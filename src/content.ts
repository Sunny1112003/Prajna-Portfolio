export type Project = {
  title: string
  category: string
  description: string
  image?: string
  video?: string
  gallery?: string[]
  technologies: string[]
  github?: string
  live?: string
  overview?: string
  architecture?: string
  highlights?: string[]
  research?: { title: string; description: string }[]
  engineeringFocus?: string
}

export const site = {
  name: 'Prajna Deepankar Nelapuri',
  shortName: 'PDN',
  title: 'AI Engineer | AI/ML Engineer | Software Engineer',
  education: 'M.Tech, NIT Calicut',
  heroDescription:
    'I build practical AI applications and software systems, with hands-on work in RAG, LLM applications, machine learning, backend APIs, and full-stack development. My work spans AI, software engineering, IoT, and data-driven systems, with a focus on building practical and reliable solutions.',
  about:
    'Recent M.Tech graduate from the National Institute of Technology Calicut with hands-on experience developing AI applications, software systems, and IoT solutions through academic and personal projects. My work spans Generative AI, LLM applications, Retrieval-Augmented Generation (RAG), machine learning, backend APIs, full-stack development, and embedded/IoT systems. I have built end-to-end applications involving document processing, semantic search, model inference, REST APIs, databases, sensor data, fault detection, and data validation. My academic research focuses on fault-tolerant air quality monitoring and forecasting using heterogeneous IoT sensors, with research presented at the 5th International Conference on Emerging Technology Trends in Electronics, Communication and Networking (ET2ECN 2026), SVNIT Surat, India, and a paper submitted to the IEEE Internet of Things Journal.',
  photo: './assets/hero.webp',
  email: 'prajnadeepankarnelapuri@gmail.com',
  phone: '+91 9550167744',
  location: 'Hyderabad, India',
  linkedin: 'https://www.linkedin.com/in/prajna-deepankar-nelapuri-25795b271/',
  github: 'https://github.com/Sunny1112003',
  resume: '',
}

export const projects: Project[] = [
  {
    title: 'Robust Fault-Tolerant Air Quality Monitoring & Prediction System',
    category: 'M.Tech Thesis · IoT · Machine Learning',
    description:
      'A fault-tolerant IoT-based air quality monitoring and forecasting system integrating heterogeneous sensors, ESP32-based data acquisition, sensor fault detection and data recovery, CPCB-compliant AQI assessment, H₂S safety alerts, and TensorFlow-based pollutant forecasting.',
    technologies: [
      'ESP32',
      'MQ Sensors',
      'PMS7003',
      'DHT22',
      'ADS1115',
      'Python',
      'TensorFlow',
      'MongoDB',
      'React',
      'Flask',
      'KiCad',
    ],
    overview:
      'An end-to-end IoT and machine-learning system designed for reliable air-quality monitoring and forecasting using heterogeneous sensors. The system acquires particulate, gas, environmental, and electrical measurements through an ESP32-based sensing node, performs sensor validation and fault detection, processes the collected data, and supports pollutant and AQI forecasting through a TensorFlow-based time-series prediction pipeline.',
    architecture:
      'Heterogeneous Sensors → ESP32 Data Acquisition → Sensor Validation & Fault Detection → Backend/API → MongoDB → React Dashboard → ML Forecasting',
    highlights: [
      'Multi-sensor acquisition using MQ7, MQ135, MQ136, PMS7003, DHT22, ADS1115, RTC, and SD storage.',
      'Implemented rule-based fault detection, fault masking, and confidence assessment for sensor and system failures.',
      'Applied data validation, filtering, smoothing, and clean-dataset generation for reliable ML inputs.',
      'Developed a TensorFlow-based time-series forecasting pipeline for pollutant and AQI prediction.',
      'Integrated backend processing, database storage, and a React-based monitoring dashboard.',
      'Designed and developed a custom PCB for the monitoring node, covering schematic design, component integration, PCB layout, routing, and 3D verification.',
      'Created required schematic symbols and PCB footprints and handled the hardware design through fabrication and assembly.',
      'Personally assembled and soldered the fabricated board, including SMD components.',
    ],
    research: [
      {
        title: 'Fault-Tolerant Air Quality Monitoring and Forecasting Using Heterogeneous Sensors',
        description:
          'Presented at the 5th International Conference on Emerging Technology Trends in Electronics, Communication and Networking (ET2ECN 2026), SVNIT Surat, India, and accepted for publication in the Springer Lecture Notes in Electrical Engineering series. Paper submitted to the IEEE Internet of Things Journal (IEEE IoT-J) in July 2026.',
      },
    ],
  },
  {
    title: 'LLM-Powered Research Paper Assistant',
    category: 'Generative AI · RAG · Full Stack',
    description:
      'A full-stack RAG application for research-paper intelligence, with persistent workspaces and chats, PDF ingestion and page-aware processing, semantic retrieval using Sentence Transformers and ChromaDB, and grounded question answering with Gemma 3 through Ollama.',
    technologies: [
      'Python',
      'FastAPI',
      'React',
      'TypeScript',
      'LangChain',
      'Sentence Transformers',
      'ChromaDB',
      'Ollama',
      'Gemma 3',
    ],
    github: 'https://github.com/Sunny1112003/LLM-Research-Paper-Assistant',
    overview:
      'A full-stack research intelligence application that enables users to organize research papers into persistent workspaces and interact with uploaded PDFs through grounded question answering. The system combines document processing, semantic retrieval, vector search, and local LLM inference to generate responses based on relevant sections of the uploaded papers.',
    architecture:
      'React + TypeScript → FastAPI REST API → PDF Processing → Text Cleaning & Chunking → Sentence Transformers → ChromaDB → Ollama / Gemma 3 → Grounded Response with Source References',
    highlights: [
      'Built persistent workspaces, independent chats, documents, messages, and notes.',
      'Implemented PDF validation, SHA-256 duplicate detection, page-aware extraction, text cleaning, chunking, and embedding generation.',
      'Developed workspace- and document-scoped semantic retrieval using Sentence Transformers and ChromaDB.',
      'Integrated Gemma 3 through Ollama for grounded question answering over retrieved document context.',
      'Preserved source metadata to support document and page-level grounding of retrieved information.',
      'Developed a responsive React interface supporting real document, chat, search, and workspace workflows.',
    ],
    engineeringFocus:
      'RAG · Semantic Search · Document Processing · Vector Retrieval · LLM Applications · Full-Stack Development',
  },
  {
    title: 'Team Task Manager',
    category: 'Full-Stack Software Engineering',
    description:
      'A full-stack team and project management application built with React, Express.js, and PostgreSQL, featuring JWT authentication, Admin/Member role-based access control, project and team management, task assignment and tracking, priorities, due dates, and dashboard-based progress monitoring.',
    technologies: [
      'React',
      'TypeScript',
      'Node.js',
      'Express.js',
      'PostgreSQL',
      'REST APIs',
      'JWT',
      'Zod',
      'Git',
    ],
    github: 'https://github.com/Sunny1112003/Team-task-manager-app',
    overview:
      'A full-stack team and project management application designed to provide a structured workspace for managing projects, tasks, and team access. The application combines a React frontend with an Express REST API and PostgreSQL database, with authentication, authorization, validation, and task-status workflows integrated across the system.',
    architecture:
      'React + TypeScript → Express REST API → Authentication & Authorization → Zod Validation → PostgreSQL',
    highlights: [
      'Implemented JWT-based authentication with secure password hashing.',
      'Developed Admin/Member role-based access control for protected application functionality.',
      'Built project and task workflows including task assignment, status tracking, priorities, and due dates.',
      'Implemented REST APIs with Zod-based request validation.',
      'Integrated PostgreSQL for persistent relational data and application state.',
      'Built dashboard-oriented workflows for managing projects, tasks, and team activity.',
    ],
    engineeringFocus:
      'Full-Stack Development · REST APIs · Authentication · RBAC · PostgreSQL · Application Architecture',
  },
]

export const skills: { group: string; items: string[] }[] = [
  {
    group: 'Programming',
    items: ['Python', 'JavaScript', 'TypeScript', 'SQL'],
  },
  {
    group: 'AI / Machine Learning',
    items: [
      'TensorFlow',
      'Neural Networks',
      'Model Training',
      'Model Evaluation',
      'Predictive Modeling',
      'Data Preprocessing',
      'Feature Engineering',
    ],
  },
  {
    group: 'Generative AI & RAG',
    items: ['LLMs', 'RAG', 'LangChain', 'Hugging Face', 'Ollama'],
  },
  {
    group: 'Retrieval & Vector Search',
    items: ['Sentence Transformers', 'ChromaDB', 'Vector Indexing', 'Semantic Search'],
  },
  {
    group: 'Backend & APIs',
    items: ['FastAPI', 'Node.js', 'Express.js', 'REST APIs'],
  },
  {
    group: 'Frontend & Databases',
    items: ['React', 'HTML5', 'CSS3', 'PostgreSQL', 'MongoDB'],
  },
  {
    group: 'AI Reliability',
    items: [
      'AI Output Evaluation',
      'Data Validation',
      'Robustness Testing',
      'Sensitivity Analysis',
      'Fault Injection',
      'Failure-Mode Analysis',
    ],
  },
  {
    group: 'Tools & Engineering',
    items: ['Git', 'GitHub', 'VS Code', 'ESP32', 'MATLAB', 'Simulink'],
  },
]

export const research: {
  title: string
  type: string
  year: string
  description: string
  link?: string
}[] = [
  {
    title: 'Fault-Tolerant Air Quality Monitoring and Forecasting Using Heterogeneous Sensors',
    type: 'Conference paper · ET2ECN 2026',
    year: '2026',
    description:
      'Research on air-quality monitoring, sensor fault tolerance, and forecasting using heterogeneous sensors, presented at the 5th International Conference on Emerging Technology Trends in Electronics, Communication and Networking (ET2ECN 2026), SVNIT Surat. The paper is to appear in the Springer Lecture Notes in Electrical Engineering series.',
  },
  {
    title: 'Design and Implementation of a Fault-Tolerant Real-Time Air Quality Monitoring and Forecasting System Using Low-Cost Heterogeneous IoT Sensors for Constrained Environments',
    type: 'Journal submission · IEEE Internet of Things Journal',
    year: '2026',
    description:
      'Extended research on the design and implementation of a fault-tolerant real-time air-quality monitoring and forecasting system using low-cost heterogeneous IoT sensors for constrained environments. Paper submitted to the IEEE Internet of Things Journal in July 2026.',
  },
]

export const education: {
  degree: string
  institution: string
  period: string
  detail?: string
}[] = [
  {
    degree: 'M.Tech · Industrial Power & Automation',
    institution: 'National Institute of Technology Calicut',
    period: '2024 – 2026',
    detail: 'Electrical Engineering',
  },
  {
    degree: 'B.Tech · Electrical & Electronics Engineering',
    institution: 'Sri Vasavi Engineering College',
    period: '2020 – 2024',
    detail: 'CGPA: 7.25 / 10',
  },
  {
    degree: 'Intermediate · MPC',
    institution: 'Vikas Junior College',
    period: 'Intermediate',
    detail: '82%',
  },
]
