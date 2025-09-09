import { Progress } from "@/components/ui/progress";

interface ProgressBarProps {
  currentStep: number;
  totalSteps: number;
  stepName: string;
}

const ProgressBar = ({ currentStep, totalSteps, stepName }: ProgressBarProps) => {
  const progressPercentage = (currentStep / totalSteps) * 100;

  return (
    <div className="w-full mb-8">
      <div className="flex justify-between items-center mb-3">
        <span className="text-sm font-medium text-primary">{stepName}</span>
        <span className="text-sm text-muted-foreground">
          {currentStep} of {totalSteps}
        </span>
      </div>
      <Progress 
        value={progressPercentage} 
        className="h-2"
      />
    </div>
  );
};

export default ProgressBar;