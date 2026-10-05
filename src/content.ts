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
    title: 'LLM-Powered Research Paper Assistant',
    category: 'Generative AI · RAG · Full Stack',
    description:
      'A full-stack research intelligence application that organizes papers into persistent workspaces and provides grounded question answering over uploaded PDFs.',
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
      'The system supports persistent workspaces, independent chats, PDF ingestion, page-aware retrieval, source metadata, notes, search, and grounded responses. Documents are parsed, cleaned, chunked, embedded, and stored with workspace and page metadata before retrieval.',
    architecture:
      'React + TypeScript frontend → FastAPI REST API → PDF processing and retrieval services → Sentence Transformers + ChromaDB → Ollama/Gemma 3 → grounded response with source references.',
    highlights: [
      'Persistent workspaces, chats, documents, messages, and notes.',
      'PDF validation, SHA-256 duplicate protection, page-aware text extraction, chunking, and embeddings.',
      'Workspace- and document-scoped semantic retrieval with source metadata.',
      'Grounded answers generated with Gemma 3 through Ollama.',
      'Responsive React interface with real document, chat, search, and workspace flows.',
    ],
  },
  {
    title: 'Robust Fault-Tolerant Air Quality Monitoring & Prediction System',
    category: 'M.Tech Thesis · IoT · Machine Learning',
    description:
      'A fault-tolerant air-quality monitoring and forecasting system combining heterogeneous sensors, embedded acquisition, backend analytics, and machine-learning-based prediction.',
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
    ],
    overview:
      'The system acquires particulate, gas, temperature, humidity, and electrical measurements from an ESP32-based sensing node. It combines sensor validation and fault detection with backend processing, dashboard visualization, and time-series pollutant/AQI prediction.',
    architecture:
      'Heterogeneous sensors → ESP32 acquisition and fault flags → backend/API → MongoDB → React dashboard, with TensorFlow-based time-series prediction for pollutant/AQI forecasting.',
    highlights: [
      'Multi-sensor acquisition using MQ7, MQ135, MQ136, PMS7003, DHT22, ADS1115, RTC, and SD storage.',
      'Rule-based fault detection and confidence scoring for sensor and system failures.',
      'Data validation, filtering, smoothing, and clean-dataset generation for ML.',
      'TensorFlow forecasting pipeline evaluated for pollutant prediction.',
      'Research work presented through ET2ECN 2026 and extended toward journal submission.',
    ],
  },
  {
    title: 'Team Task Manager',
    category: 'Full-Stack Software Engineering',
    description:
      'A full-stack task and project management application with authentication, project organization, task tracking, team access, and role-based permissions.',
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
    overview:
      'The application provides a structured workspace for managing projects and tasks, with authentication, authorization, validation, and status tracking across team members.',
    architecture:
      'React frontend → Express REST API → validation and authentication layer → PostgreSQL relational data model.',
    highlights: [
      'JWT-based authentication and password hashing.',
      'Admin/member role-based access control.',
      'Project and task management with status tracking.',
      'Zod-based request validation and REST API design.',
      'Production-oriented build and deployment configuration.',
    ],
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
      'Research on heterogeneous sensor-based air-quality monitoring, fault tolerance, and forecasting, presented at the 5th International Conference on Emerging Technology Trends in Electronics, Communication and Networking (ET2ECN 2026), SVNIT Surat. The paper is to appear in the Springer Lecture Notes in Electrical Engineering series.',
  },
  {
    title: 'Air Quality Monitoring and Prediction Research',
    type: 'Journal manuscript · IEEE Internet of Things Journal',
    year: '2026',
    description:
      'Extended research work on robust IoT-based air-quality monitoring and prediction, submitted as a manuscript to the IEEE Internet of Things Journal in 2026.',
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
