import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ProgressBar from "@/components/ProgressBar";
import QuestionCard from "@/components/QuestionCard";
import { psychometricQuestions } from "@/data/questions";

const PsychometricAssessment = () => {
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  
  const handleAnswerChange = (value: string) => {
    setAnswers(prev => ({
      ...prev,
      [currentQuestion]: value
    }));
  };

  const handleNext = () => {
    if (currentQuestion < psychometricQuestions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
    } else {
      // Save psychometric scores to localStorage
      const scores = calculatePsychometricScores();
      localStorage.setItem('psychometricScores', JSON.stringify(scores));
      navigate("/assessment/technical");
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(prev => prev - 1);
    }
  };

  const calculatePsychometricScores = () => {
    let interestScore = 0;
    let personalityScore = 0;
    let cognitiveScore = 0;
    let motivationScore = 0;

    Object.entries(answers).forEach(([questionIndex, selectedValue]) => {
      const question = psychometricQuestions[parseInt(questionIndex)];
      const option = question.options.find(opt => opt.value === selectedValue);
      if (option) {
        switch (question.category) {
          case 'interest':
            interestScore += option.score;
            break;
          case 'personality':
            personalityScore += option.score;
            break;
          case 'cognitive':
            cognitiveScore += option.score;
            break;
          case 'motivation':
            motivationScore += option.score;
            break;
        }
      }
    });

    return {
      interest: Math.min(100, (interestScore / 25) * 100),
      personality: Math.min(100, (personalityScore / 25) * 100),
      cognitive: Math.min(100, (cognitiveScore / 25) * 100),
      motivation: Math.min(100, (motivationScore / 25) * 100)
    };
  };

  const question = psychometricQuestions[currentQuestion];

  return (
    <div className="min-h-screen bg-gradient-to-br from-hero-bg via-background to-secondary py-12">
      <div className="container mx-auto max-w-4xl px-6">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-2 text-primary">Psychometric Evaluation</h1>
          <p className="text-muted-foreground">
            Help us understand your interests, personality traits, and motivations
          </p>
        </div>

        <ProgressBar 
          currentStep={currentQuestion + 1}
          totalSteps={psychometricQuestions.length}
          stepName="Psychometric Assessment"
        />

        <QuestionCard
          question={question.question}
          options={question.options}
          selectedValue={answers[currentQuestion] || ""}
          onValueChange={handleAnswerChange}
          onNext={handleNext}
          onPrevious={handlePrevious}
          showPrevious={currentQuestion > 0}
          isLast={currentQuestion === psychometricQuestions.length - 1}
          questionNumber={currentQuestion + 1}
          totalQuestions={psychometricQuestions.length}
        />
      </div>
    </div>
  );
};

export default PsychometricAssessment;