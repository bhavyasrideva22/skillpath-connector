import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ProgressBar from "@/components/ProgressBar";
import QuestionCard from "@/components/QuestionCard";
import { wiscarQuestions } from "@/data/wiscarQuestions";

const WiscarAssessment = () => {
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
    if (currentQuestion < wiscarQuestions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
    } else {
      // Save WISCAR scores to localStorage
      const scores = calculateWiscarScores();
      localStorage.setItem('wiscarScores', JSON.stringify(scores));
      navigate("/assessment/results");
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(prev => prev - 1);
    }
  };

  const calculateWiscarScores = () => {
    const categories = ['will', 'interest', 'skill', 'cognitive', 'ability', 'reality'];
    const scores: Record<string, number> = {};

    categories.forEach(category => {
      let categoryScore = 0;
      let categoryCount = 0;

      Object.entries(answers).forEach(([questionIndex, selectedValue]) => {
        const question = wiscarQuestions[parseInt(questionIndex)];
        if (question.category === category) {
          const option = question.options.find(opt => opt.value === selectedValue);
          if (option) {
            categoryScore += option.score;
            categoryCount++;
          }
        }
      });

      scores[category] = categoryCount > 0 ? Math.round((categoryScore / (categoryCount * 5)) * 100) : 0;
    });

    return scores;
  };

  const question = wiscarQuestions[currentQuestion];

  return (
    <div className="min-h-screen bg-gradient-to-br from-hero-bg via-background to-secondary py-12">
      <div className="container mx-auto max-w-4xl px-6">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-2 text-primary">WISCAR Assessment</h1>
          <p className="text-muted-foreground">
            Comprehensive evaluation of your readiness across six key dimensions
          </p>
        </div>

        <ProgressBar 
          currentStep={currentQuestion + 1}
          totalSteps={wiscarQuestions.length}
          stepName="WISCAR Framework Analysis"
        />

        <QuestionCard
          question={question.question}
          options={question.options}
          selectedValue={answers[currentQuestion] || ""}
          onValueChange={handleAnswerChange}
          onNext={handleNext}
          onPrevious={handlePrevious}
          showPrevious={currentQuestion > 0}
          isLast={currentQuestion === wiscarQuestions.length - 1}
          questionNumber={currentQuestion + 1}
          totalQuestions={wiscarQuestions.length}
        />
      </div>
    </div>
  );
};

export default WiscarAssessment;