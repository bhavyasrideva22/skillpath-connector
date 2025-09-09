import { Question } from "./questions";

export const wiscarQuestions: Question[] = [
  // Will - Motivation & Persistence
  {
    id: 21,
    question: "How committed are you to learning new skills, even when faced with initial difficulties?",
    category: "will",
    options: [
      { value: "1", label: "I give up quickly when things get challenging", score: 1 },
      { value: "2", label: "I try for a while but lose motivation easily", score: 2 },
      { value: "3", label: "I persist through moderate challenges", score: 3 },
      { value: "4", label: "I stay committed even when progress is slow", score: 4 },
      { value: "5", label: "I thrive on overcoming difficult challenges", score: 5 }
    ]
  },
  {
    id: 22,
    question: "How do you maintain focus on long-term goals?",
    category: "will",
    options: [
      { value: "1", label: "I struggle to stick with long-term commitments", score: 1 },
      { value: "2", label: "I need frequent reminders and external motivation", score: 2 },
      { value: "3", label: "I can maintain focus with some effort", score: 3 },
      { value: "4", label: "I'm naturally persistent with my goals", score: 4 },
      { value: "5", label: "I have exceptional long-term focus and determination", score: 5 }
    ]
  },

  // Interest - Career alignment & curiosity
  {
    id: 23,
    question: "How excited are you about the prospect of working with vehicle communication technologies?",
    category: "interest",
    options: [
      { value: "1", label: "Not excited - it seems boring or irrelevant", score: 1 },
      { value: "2", label: "Mildly interested - could be okay", score: 2 },
      { value: "3", label: "Moderately excited - seems promising", score: 3 },
      { value: "4", label: "Very excited - can't wait to learn more", score: 4 },
      { value: "5", label: "Extremely excited - it's exactly what I want to do", score: 5 }
    ]
  },
  {
    id: 24,
    question: "How important is it for you to work on cutting-edge automotive technology?",
    category: "interest",
    options: [
      { value: "1", label: "Not important - any job will do", score: 1 },
      { value: "2", label: "Somewhat important - would be nice", score: 2 },
      { value: "3", label: "Important - I prefer innovative work", score: 3 },
      { value: "4", label: "Very important - I want to be at the forefront", score: 4 },
      { value: "5", label: "Essential - I must work on breakthrough technology", score: 5 }
    ]
  },

  // Skill - Current capabilities
  {
    id: 25,
    question: "How would you rate your current technical problem-solving abilities?",
    category: "skill",
    options: [
      { value: "1", label: "Beginner - I need significant guidance", score: 1 },
      { value: "2", label: "Basic - I can handle simple problems", score: 2 },
      { value: "3", label: "Intermediate - I can work through most issues", score: 3 },
      { value: "4", label: "Advanced - I'm confident with complex problems", score: 4 },
      { value: "5", label: "Expert - I excel at solving difficult technical challenges", score: 5 }
    ]
  },
  {
    id: 26,
    question: "How comfortable are you with learning new programming languages or tools?",
    category: "skill",
    options: [
      { value: "1", label: "Very uncomfortable - I prefer familiar tools", score: 1 },
      { value: "2", label: "Uncomfortable - I need lots of support", score: 2 },
      { value: "3", label: "Moderately comfortable - I can adapt with time", score: 3 },
      { value: "4", label: "Comfortable - I enjoy learning new tools", score: 4 },
      { value: "5", label: "Very comfortable - I quickly master new technologies", score: 5 }
    ]
  },

  // Cognitive - Learning ability & mental agility
  {
    id: 27,
    question: "How quickly do you typically grasp new technical concepts?",
    category: "cognitive",
    options: [
      { value: "1", label: "Very slowly - I need multiple explanations", score: 1 },
      { value: "2", label: "Slowly - I need time and practice", score: 2 },
      { value: "3", label: "Average speed - I understand with some effort", score: 3 },
      { value: "4", label: "Quickly - I pick up concepts easily", score: 4 },
      { value: "5", label: "Very quickly - I understand complex ideas immediately", score: 5 }
    ]
  },
  {
    id: 28,
    question: "How well do you handle abstract thinking and systems-level concepts?",
    category: "cognitive",
    options: [
      { value: "1", label: "Poorly - I prefer concrete, tangible concepts", score: 1 },
      { value: "2", label: "With difficulty - abstract thinking is challenging", score: 2 },
      { value: "3", label: "Adequately - I can work with abstractions", score: 3 },
      { value: "4", label: "Well - I'm comfortable with abstract concepts", score: 4 },
      { value: "5", label: "Excellently - I thrive on abstract and complex thinking", score: 5 }
    ]
  },

  // Ability to Learn - Growth mindset & adaptability
  {
    id: 29,
    question: "How do you respond to constructive criticism and feedback?",
    category: "ability",
    options: [
      { value: "1", label: "Defensively - I don't like being criticized", score: 1 },
      { value: "2", label: "Reluctantly - I accept it but don't enjoy it", score: 2 },
      { value: "3", label: "Acceptingly - I understand it's necessary", score: 3 },
      { value: "4", label: "Positively - I appreciate opportunities to improve", score: 4 },
      { value: "5", label: "Enthusiastically - I actively seek feedback for growth", score: 5 }
    ]
  },
  {
    id: 30,
    question: "How do you approach learning from failures or mistakes?",
    category: "ability",
    options: [
      { value: "1", label: "I avoid situations where I might fail", score: 1 },
      { value: "2", label: "I get discouraged and need time to recover", score: 2 },
      { value: "3", label: "I learn from mistakes but find them frustrating", score: 3 },
      { value: "4", label: "I see mistakes as valuable learning opportunities", score: 4 },
      { value: "5", label: "I actively seek challenging situations to learn from", score: 5 }
    ]
  },

  // Reality - Understanding of role and expectations
  {
    id: 31,
    question: "How realistic are your expectations about the day-to-day work of a Connected Vehicle Engineer?",
    category: "reality",
    options: [
      { value: "1", label: "I expect mostly exciting, cutting-edge work", score: 2 },
      { value: "2", label: "I expect it to be challenging but rewarding", score: 4 },
      { value: "3", label: "I expect a mix of routine and innovative work", score: 5 },
      { value: "4", label: "I expect significant debugging and problem-solving", score: 5 },
      { value: "5", label: "I'm not sure what to expect", score: 1 }
    ]
  },
  {
    id: 32,
    question: "How prepared are you for the continuous learning required in this rapidly evolving field?",
    category: "reality",
    options: [
      { value: "1", label: "I prefer fields where knowledge stays stable", score: 1 },
      { value: "2", label: "I'm willing to learn occasionally", score: 2 },
      { value: "3", label: "I accept that some learning will be necessary", score: 3 },
      { value: "4", label: "I expect and welcome continuous learning", score: 4 },
      { value: "5", label: "I thrive on constant learning and adaptation", score: 5 }
    ]
  }
];