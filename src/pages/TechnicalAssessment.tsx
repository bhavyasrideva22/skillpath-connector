import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ProgressBar from "@/components/ProgressBar";
import QuestionCard from "@/components/QuestionCard";
import { technicalQuestions } from "@/data/questions";

const TechnicalAssessment = () => {
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
    if (currentQuestion < technicalQuestions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
    } else {
      // Save technical scores to localStorage
      const scores = calculateTechnicalScores();
      localStorage.setItem('technicalScores', JSON.stringify(scores));
      navigate("/assessment/wiscar");
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(prev => prev - 1);
    }
  };

  const calculateTechnicalScores = () => {
    let totalScore = 0;
    let maxScore = 0;

    Object.entries(answers).forEach(([questionIndex, selectedValue]) => {
      const question = technicalQuestions[parseInt(questionIndex)];
      const option = question.options.find(opt => opt.value === selectedValue);
      if (option) {
        totalScore += option.score;
        maxScore += 5; // Maximum score per question
      }
    });

    const technicalReadiness = maxScore > 0 ? (totalScore / maxScore) * 100 : 0;

    return {
      technical: Math.round(technicalReadiness),
      rawScore: totalScore,
      maxScore: maxScore
    };
  };

  const question = technicalQuestions[currentQuestion];

  return (
    <div className="min-h-screen bg-gradient-to-br from-hero-bg via-background to-secondary py-12">
      <div className="container mx-auto max-w-4xl px-6">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-2 text-primary">Technical Assessment</h1>
          <p className="text-muted-foreground">
            Test your knowledge of automotive systems, networking, and programming
          </p>
        </div>

        <ProgressBar 
          currentStep={currentQuestion + 1}
          totalSteps={technicalQuestions.length}
          stepName="Technical Knowledge Check"
        />

        <QuestionCard
          question={question.question}
          options={question.options}
          selectedValue={answers[currentQuestion] || ""}
          onValueChange={handleAnswerChange}
          onNext={handleNext}
          onPrevious={handlePrevious}
          showPrevious={currentQuestion > 0}
          isLast={currentQuestion === technicalQuestions.length - 1}
          questionNumber={currentQuestion + 1}
          totalQuestions={technicalQuestions.length}
        />
      </div>
    </div>
  );
};

export default TechnicalAssessment;