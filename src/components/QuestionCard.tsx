import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

interface Option {
  value: string;
  label: string;
  score: number;
}

interface QuestionCardProps {
  question: string;
  options: Option[];
  selectedValue: string;
  onValueChange: (value: string) => void;
  onNext: () => void;
  onPrevious?: () => void;
  showPrevious?: boolean;
  isLast?: boolean;
  questionNumber: number;
  totalQuestions: number;
}

const QuestionCard = ({
  question,
  options,
  selectedValue,
  onValueChange,
  onNext,
  onPrevious,
  showPrevious = false,
  isLast = false,
  questionNumber,
  totalQuestions
}: QuestionCardProps) => {
  return (
    <Card className="p-8 bg-[var(--gradient-card)] shadow-[var(--shadow-card)] border-0">
      <div className="mb-6">
        <div className="flex items-center justify-between mb-4">
          <span className="text-sm font-medium text-primary">
            Question {questionNumber} of {totalQuestions}
          </span>
        </div>
        <h2 className="text-xl font-semibold mb-6">{question}</h2>
      </div>

      <RadioGroup value={selectedValue} onValueChange={onValueChange} className="space-y-4 mb-8">
        {options.map((option) => (
          <div key={option.value} className="flex items-center space-x-3 p-4 rounded-lg hover:bg-secondary/20 transition-colors">
            <RadioGroupItem value={option.value} id={option.value} />
            <Label 
              htmlFor={option.value} 
              className="flex-1 cursor-pointer text-sm leading-relaxed"
            >
              {option.label}
            </Label>
          </div>
        ))}
      </RadioGroup>

      <div className="flex justify-between">
        {showPrevious && onPrevious ? (
          <Button variant="outline" onClick={onPrevious}>
            Previous
          </Button>
        ) : (
          <div />
        )}
        
        <Button 
          onClick={onNext} 
          disabled={!selectedValue}
          className="bg-[var(--gradient-button)] hover:shadow-[var(--shadow-button)] transition-all duration-300"
        >
          {isLast ? "Complete Section" : "Next"}
        </Button>
      </div>
    </Card>
  );
};

export default QuestionCard;