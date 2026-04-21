export type InboxItem = {
  id: string;
  sender: string;
  subject: string;
  snippet: string;
  date: string;
  content: string;
  tags?: string[];
  links?: { label: string; url: string }[];
  read: boolean;
};

export type Section = "About" | "Experience" | "Projects" | "Extracurricular" | "Achievements" | "Skills";

export const profileData = {
  name: "Freya Abbi",
  contact: {
    phone: "+91 8595409277",
    email: "freyaabbi@gmail.com",
    linkedin: "linkedin.com/in/freyaabbi"
  },
  education: {
    institution: "SRM Institute of Science and Technology",
    degree: "B.Tech in Computer Science",
    cgpa: "9.54 (Till 5th Semester)",
    period: "2023–2027",
    location: "Chennai"
  }
};

export const inboxData: Record<Section, InboxItem[]> = {
  About: [
    {
      id: "about-1",
      sender: "Freya Abbi",
      subject: "Welcome to my digital inbox!",
      snippet: "I am a Computer Science student at SRM Institute working at the intersection of quantum computing, AI, and embedded systems.",
      date: "Today",
      read: false,
      content: `Hi there,

Welcome to my portfolio! I'm Freya Abbi, a B.Tech Computer Science student at SRM Institute of Science and Technology (CGPA 9.54). 

I'm deeply passionate about building systems that bridge the gap between cutting-edge research and practical applications—specifically at the intersection of Quantum Computing, Artificial Intelligence, and Embedded Systems.

I'm currently looking for opportunities where I can apply my skills to solve hard problems.

Feel free to browse through my experiences and projects using the sidebar on the left.

Best regards,
Freya
      `,
      tags: ["Quantum Computing", "AI", "Embedded Systems", "Computer Science"]
    }
  ],
  Experience: [
    {
      id: "exp-1",
      sender: "Tevatron Technologies Pvt. Ltd.",
      subject: "AI Embedded Engineer Intern",
      snippet: "Built STEMBUDDY, an AI-powered office robot receptionist with voice conversations...",
      date: "Jun 2025",
      read: true,
      content: `**Role:** AI Embedded Engineer Intern
**Location:** Noida, UP
**Period:** June 2025 – July 2025

Built STEMBUDDY, an AI-powered office robot receptionist with voice conversations, face recognition, and presence detection using Raspberry Pi 5.

Key contributions:
- Integrated Rasa NLU for intent classification.
- Optimized lightweight NLP and vision models for edge devices.`,
      tags: ["Raspberry Pi 5", "Rasa NLU", "NLP", "Computer Vision", "Edge AI"]
    },
    {
      id: "exp-2",
      sender: "NXP Semiconductors",
      subject: "Women in Tech Scholar WIT 2025",
      snippet: "Debugging sessions and SoC case studies. Designed and simulated RTL level modules...",
      date: "Dec 2024",
      read: true,
      content: `**Role:** Women in Tech Scholar WIT 2025
**Location:** Remote
**Period:** Dec 2024 – Nov 2025

Participated in debugging sessions and SoC case studies. Designed and simulated RTL level modules using Verilog HDL for ASIC implementations. Completed comprehensive training in SystemVerilog and UVM.`,
      tags: ["Verilog HDL", "SystemVerilog", "UVM", "ASIC", "SoC"]
    }
  ],
  Projects: [
    {
      id: "proj-1",
      sender: "QPhish",
      subject: "Quantum Phishing Detection System",
      snippet: "Phishing detection system leveraging quantum randomness and QKD-inspired secure communication.",
      date: "2025",
      read: true,
      content: `Phishing detection system leveraging quantum randomness and QKD-inspired secure communication. Built quantum-assisted anomaly detection models using Qiskit to identify sophisticated phishing attempts with high accuracy.`,
      tags: ["Python", "TensorFlow", "PyTorch", "Qiskit", "QRNG"]
    },
    {
      id: "proj-2",
      sender: "Verification of Synchronous FIFO",
      subject: "RTL and Verification",
      snippet: "Verified a synchronous FIFO using self-checking, scoreboard-based testbench...",
      date: "2024",
      read: true,
      content: `Verified a synchronous FIFO using a self-checking, scoreboard-based testbench. Validated data integrity, strict FIFO ordering, and edge-case behavior including full/empty flags under various load conditions.`,
      tags: ["System Verilog", "RTL", "Verification"]
    },
    {
      id: "proj-3",
      sender: "QuantumSent",
      subject: "Quantum Machine Learning Sentiment Analysis",
      snippet: "Sentiment classification model for tweets using quantum machine learning algorithms.",
      date: "2024",
      read: true,
      content: `Developed a sentiment classification model for tweets utilizing quantum machine learning algorithms. Integrated quantum feature encoding techniques with classical NLP workflows to explore quantum advantages in natural language processing tasks.`,
      tags: ["Python", "Qiskit", "Pandas", "NLTK", "TensorFlow"]
    }
  ],
  Extracurricular: [
    {
      id: "extra-1",
      sender: "e-Yantra Lab SRM",
      subject: "Technical Team Member",
      snippet: "Developed affordable prosthetic arm using CNN-LSTM architecture for EMG signal processing.",
      date: "Nov 2023",
      read: true,
      content: `**Period:** Nov 2023 – Jan 2026

- Developed an affordable prosthetic arm using CNN-LSTM architecture for advanced EMG signal processing.
- Worked extensively on embedded systems integration with the Firebird V robot platform.`,
      tags: ["CNN-LSTM", "EMG Processing", "Embedded Systems", "Firebird V"]
    },
    {
      id: "extra-2",
      sender: "Quantum Computing Club SRM",
      subject: "Technical Team Member",
      snippet: "Hybrid classical NLP model leveraging quantum circuits on IBM Qiskit...",
      date: "Sep 2024",
      read: true,
      content: `**Period:** Sep 2024 – Dec 2025

- Developed a hybrid classical NLP model leveraging quantum circuits on IBM Qiskit.
- Optimized quantum feature maps, achieving 99% classical accuracy in benchmark testing.`,
      tags: ["IBM Qiskit", "Hybrid Quantum-Classical", "NLP"]
    }
  ],
  Achievements: [
    {
      id: "ach-1",
      sender: "Unisys",
      subject: "Pre-finalist in Unisys India Innovation Program",
      snippet: "Year 16, 2025 (quantum phishing detection)",
      date: "2025",
      read: true,
      content: `Selected as a Pre-finalist in the prestigious Unisys India Innovation Program Year 16 (2025) for the QPhish project—a quantum phishing detection system.`
    },
    {
      id: "ach-2",
      sender: "e-Yantra",
      subject: "Completed e-Yantra Innovation Challenge 2024–25",
      snippet: "AI prosthetic arm: Empowering Independence",
      date: "2025",
      read: true,
      content: `Successfully completed the e-Yantra Innovation Challenge 2024–25. Showcased our AI-powered prosthetic arm under the theme "Empowering Independence".`
    },
    {
      id: "ach-3",
      sender: "ICPC",
      subject: "Honourable mention in ICPC Coding Contest 2024",
      snippet: "Recognized for algorithmic problem solving.",
      date: "2024",
      read: true,
      content: `Received an Honourable Mention in the ICPC (International Collegiate Programming Contest) 2024, recognizing strong algorithmic problem-solving abilities.`
    },
    {
      id: "ach-4",
      sender: "Innovate 2025 Hackathon",
      subject: "Innovation award in Voicing domain",
      snippet: "Organized by MNIT, TIET, Modi Institute of Technology",
      date: "2025",
      read: true,
      content: `Won the Innovation Award in the AI in Voicing domain at the Innovate 2025 Hackathon. The event was collaboratively organized by MNIT, TIET, and Modi Institute of Technology.`
    }
  ],
  Skills: [
    {
      id: "skill-1",
      sender: "Languages",
      subject: "Programming & Hardware Description",
      snippet: "Python, C/C++, SQL, Verilog, System Verilog",
      date: "Always",
      read: true,
      content: `**Core Languages:** Python, C/C++, SQL
**Hardware Description Languages:** Verilog, System Verilog`
    },
    {
      id: "skill-2",
      sender: "Frameworks & Libraries",
      subject: "AI, Quantum & Web",
      snippet: "ReactJS, NodeJS, Django, Qiskit, PyTorch, TensorFlow...",
      date: "Always",
      read: true,
      content: `**Web & Backend:** ReactJS, NodeJS, Django, Fast API
**AI/ML & Quantum:** Qiskit, PyTorch, TensorFlow, Keras, Scikit-learn
**Robotics:** ROS`
    },
    {
      id: "skill-3",
      sender: "Tools & Platforms",
      subject: "Development & Cloud",
      snippet: "VS Code, Google Cloud Platform, Linux, Android Studio, AWS",
      date: "Always",
      read: true,
      content: `**Tools:** VS Code, Android Studio, Linux
**Cloud:** Google Cloud Platform (GCP), AWS`
    }
  ]
};
