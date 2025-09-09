export interface Question {
  id: number;
  question: string;
  category: string;
  options: Array<{
    value: string;
    label: string;
    score: number;
  }>;
}

export const psychometricQuestions: Question[] = [
  {
    id: 1,
    question: "How much do you enjoy working with emerging automotive technologies?",
    category: "interest",
    options: [
      { value: "1", label: "Not at all - I prefer traditional approaches", score: 1 },
      { value: "2", label: "Somewhat - I'm curious but cautious", score: 3 },
      { value: "3", label: "Moderately - I find it interesting", score: 4 },
      { value: "4", label: "Very much - I actively seek out new tech", score: 5 },
      { value: "5", label: "Extremely - I'm passionate about automotive innovation", score: 5 }
    ]
  },
  {
    id: 2,
    question: "When faced with a complex technical problem, how do you typically approach it?",
    category: "cognitive",
    options: [
      { value: "1", label: "I prefer to get help immediately", score: 2 },
      { value: "2", label: "I try briefly then seek guidance", score: 3 },
      { value: "3", label: "I work through it systematically", score: 4 },
      { value: "4", label: "I enjoy the challenge and persist", score: 5 },
      { value: "5", label: "I thrive on complex problems and explore multiple solutions", score: 5 }
    ]
  },
  {
    id: 3,
    question: "How important is it for you to understand how vehicles communicate with each other and infrastructure?",
    category: "interest",
    options: [
      { value: "1", label: "Not important - I don't see the value", score: 1 },
      { value: "2", label: "Slightly important - Could be useful", score: 3 },
      { value: "3", label: "Moderately important - Seems relevant", score: 4 },
      { value: "4", label: "Very important - Critical for future mobility", score: 5 },
      { value: "5", label: "Essential - It's the future of transportation", score: 5 }
    ]
  },
  {
    id: 4,
    question: "How do you handle detailed, methodical work that requires sustained attention?",
    category: "personality",
    options: [
      { value: "1", label: "I struggle with detailed work and prefer variety", score: 2 },
      { value: "2", label: "I can do it but need frequent breaks", score: 3 },
      { value: "3", label: "I'm comfortable with detailed work for moderate periods", score: 4 },
      { value: "4", label: "I enjoy detailed work and can focus for long periods", score: 5 },
      { value: "5", label: "I excel at detailed work and find it satisfying", score: 5 }
    ]
  },
  {
    id: 5,
    question: "What motivates you most in your career?",
    category: "motivation",
    options: [
      { value: "1", label: "Job security and predictable routine", score: 2 },
      { value: "2", label: "Good compensation and work-life balance", score: 3 },
      { value: "3", label: "Professional recognition and advancement", score: 4 },
      { value: "4", label: "Making meaningful impact through technology", score: 5 },
      { value: "5", label: "Pushing boundaries and creating innovative solutions", score: 5 }
    ]
  },
  {
    id: 6,
    question: "How comfortable are you with the idea of vehicles being connected to networks and the internet?",
    category: "interest",
    options: [
      { value: "1", label: "Very uncomfortable - too many security risks", score: 2 },
      { value: "2", label: "Somewhat uncomfortable - need more safeguards", score: 3 },
      { value: "3", label: "Neutral - has pros and cons", score: 4 },
      { value: "4", label: "Comfortable - benefits outweigh risks", score: 5 },
      { value: "5", label: "Very comfortable - it's necessary for progress", score: 5 }
    ]
  },
  {
    id: 7,
    question: "When learning new technical concepts, you prefer:",
    category: "cognitive",
    options: [
      { value: "1", label: "Step-by-step tutorials with clear instructions", score: 3 },
      { value: "2", label: "Video demonstrations and visual examples", score: 4 },
      { value: "3", label: "Hands-on experimentation and trial-and-error", score: 5 },
      { value: "4", label: "Reading documentation and technical papers", score: 4 },
      { value: "5", label: "Combining multiple learning methods", score: 5 }
    ]
  },
  {
    id: 8,
    question: "How do you handle ambiguity and uncertainty in projects?",
    category: "personality",
    options: [
      { value: "1", label: "I prefer clear requirements and avoid uncertainty", score: 2 },
      { value: "2", label: "I'm okay with some uncertainty if I have guidance", score: 3 },
      { value: "3", label: "I can work with ambiguity when necessary", score: 4 },
      { value: "4", label: "I'm comfortable with uncertainty and adapt well", score: 5 },
      { value: "5", label: "I thrive in ambiguous situations and enjoy figuring things out", score: 5 }
    ]
  },
  {
    id: 9,
    question: "What drives your interest in pursuing new learning opportunities?",
    category: "motivation",
    options: [
      { value: "1", label: "External requirements or pressure", score: 2 },
      { value: "2", label: "Career advancement opportunities", score: 3 },
      { value: "3", label: "Staying current with industry trends", score: 4 },
      { value: "4", label: "Personal curiosity and growth", score: 5 },
      { value: "5", label: "Passion for understanding how things work", score: 5 }
    ]
  },
  {
    id: 10,
    question: "How important is it for you to work on projects that have real-world impact?",
    category: "motivation",
    options: [
      { value: "1", label: "Not important - any work is fine", score: 2 },
      { value: "2", label: "Somewhat important - nice to have", score: 3 },
      { value: "3", label: "Important - prefer meaningful work", score: 4 },
      { value: "4", label: "Very important - must see tangible results", score: 5 },
      { value: "5", label: "Essential - I want to change the world through technology", score: 5 }
    ]
  }
];

export const technicalQuestions: Question[] = [
  {
    id: 11,
    question: "What does V2X communication stand for?",
    category: "technical",
    options: [
      { value: "1", label: "Vehicle-to-XML communication", score: 0 },
      { value: "2", label: "Vehicle-to-Everything communication", score: 5 },
      { value: "3", label: "Virtual-to-External communication", score: 0 },
      { value: "4", label: "Video-to-eXternal communication", score: 0 },
      { value: "5", label: "I'm not sure", score: 1 }
    ]
  },
  {
    id: 12,
    question: "In networking, what does latency refer to?",
    category: "technical",
    options: [
      { value: "1", label: "The maximum data transfer rate", score: 0 },
      { value: "2", label: "The delay before a transfer of data begins", score: 5 },
      { value: "3", label: "The total amount of data transferred", score: 0 },
      { value: "4", label: "The security level of the connection", score: 0 },
      { value: "5", label: "I'm not sure", score: 1 }
    ]
  },
  {
    id: 13,
    question: "What is a CAN bus in automotive systems?",
    category: "technical",
    options: [
      { value: "1", label: "A type of vehicle storage compartment", score: 0 },
      { value: "2", label: "A communication protocol for microcontrollers and devices", score: 5 },
      { value: "3", label: "A public transportation system", score: 0 },
      { value: "4", label: "A type of automotive fuel system", score: 0 },
      { value: "5", label: "I'm not sure", score: 1 }
    ]
  },
  {
    id: 14,
    question: "In Python, what would be the output of: print(len('Hello World'))?",
    category: "technical",
    options: [
      { value: "1", label: "10", score: 0 },
      { value: "2", label: "11", score: 5 },
      { value: "3", label: "12", score: 0 },
      { value: "4", label: "Error", score: 0 },
      { value: "5", label: "I'm not sure", score: 1 }
    ]
  },
  {
    id: 15,
    question: "What is the primary purpose of ADAS (Advanced Driver Assistance Systems)?",
    category: "technical",
    options: [
      { value: "1", label: "Improve fuel efficiency", score: 2 },
      { value: "2", label: "Enhance vehicle entertainment systems", score: 0 },
      { value: "3", label: "Increase driving safety through automated features", score: 5 },
      { value: "4", label: "Reduce vehicle manufacturing costs", score: 0 },
      { value: "5", label: "I'm not sure", score: 1 }
    ]
  },
  {
    id: 16,
    question: "What is the difference between V2V and V2I communication?",
    category: "technical",
    options: [
      { value: "1", label: "V2V is faster than V2I", score: 1 },
      { value: "2", label: "V2V is Vehicle-to-Vehicle, V2I is Vehicle-to-Infrastructure", score: 5 },
      { value: "3", label: "V2V uses wireless, V2I uses cables", score: 2 },
      { value: "4", label: "They are the same thing", score: 0 },
      { value: "5", label: "I'm not sure", score: 1 }
    ]
  },
  {
    id: 17,
    question: "What does IoT stand for in the context of connected vehicles?",
    category: "technical",
    options: [
      { value: "1", label: "Internal Operations Technology", score: 0 },
      { value: "2", label: "Internet of Things", score: 5 },
      { value: "3", label: "Integrated Optical Technology", score: 0 },
      { value: "4", label: "Input/Output Technology", score: 1 },
      { value: "5", label: "I'm not sure", score: 1 }
    ]
  },
  {
    id: 18,
    question: "In the context of automotive systems, what is an ECU?",
    category: "technical",
    options: [
      { value: "1", label: "Electric Control Unit", score: 2 },
      { value: "2", label: "Electronic Control Unit", score: 5 },
      { value: "3", label: "Engine Cooling Unit", score: 0 },
      { value: "4", label: "Emergency Communication Unit", score: 1 },
      { value: "5", label: "I'm not sure", score: 1 }
    ]
  },
  {
    id: 19,
    question: "What is the primary concern with Over-the-Air (OTA) updates in vehicles?",
    category: "technical",
    options: [
      { value: "1", label: "They consume too much fuel", score: 0 },
      { value: "2", label: "Security vulnerabilities and system reliability", score: 5 },
      { value: "3", label: "They're too expensive to implement", score: 1 },
      { value: "4", label: "They make vehicles slower", score: 0 },
      { value: "5", label: "I'm not sure", score: 1 }
    ]
  },
  {
    id: 20,
    question: "Which programming language is most commonly used for embedded systems in automotive applications?",
    category: "technical",
    options: [
      { value: "1", label: "JavaScript", score: 0 },
      { value: "2", label: "C/C++", score: 5 },
      { value: "3", label: "Python", score: 2 },
      { value: "4", label: "Java", score: 1 },
      { value: "5", label: "I'm not sure", score: 1 }
    ]
  }
];