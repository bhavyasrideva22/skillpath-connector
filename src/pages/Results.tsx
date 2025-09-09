import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { CheckCircle, XCircle, AlertCircle, TrendingUp, BookOpen, Target } from "lucide-react";

interface ScoreData {
  psychometric: {
    interest: number;
    personality: number;
    cognitive: number;
    motivation: number;
  };
  technical: {
    technical: number;
    rawScore: number;
    maxScore: number;
  };
  wiscar: {
    will: number;
    interest: number;
    skill: number;
    cognitive: number;
    ability: number;
    reality: number;
  };
}

const Results = () => {
  const navigate = useNavigate();
  const [scores, setScores] = useState<ScoreData | null>(null);
  const [overallScore, setOverallScore] = useState(0);
  const [recommendation, setRecommendation] = useState("");

  useEffect(() => {
    // Load all scores from localStorage
    const psychometricData = localStorage.getItem('psychometricScores');
    const technicalData = localStorage.getItem('technicalScores');
    const wiscarData = localStorage.getItem('wiscarScores');

    if (psychometricData && technicalData && wiscarData) {
      const psychometric = JSON.parse(psychometricData);
      const technical = JSON.parse(technicalData);
      const wiscar = JSON.parse(wiscarData);

      const scoreData = { psychometric, technical, wiscar };
      setScores(scoreData);

      // Calculate overall score and recommendation
      const overall = calculateOverallScore(scoreData);
      setOverallScore(overall);
      setRecommendation(getRecommendation(overall, scoreData));
    } else {
      // Redirect back to start if no scores found
      navigate("/");
    }
  }, [navigate]);

  const calculateOverallScore = (data: ScoreData) => {
    const psychAvg = (data.psychometric.interest + data.psychometric.personality + data.psychometric.cognitive + data.psychometric.motivation) / 4;
    const wiscarAvg = (data.wiscar.will + data.wiscar.interest + data.wiscar.skill + data.wiscar.cognitive + data.wiscar.ability + data.wiscar.reality) / 6;
    
    // Weighted average: 30% psychometric, 40% technical, 30% wiscar
    return Math.round((psychAvg * 0.3) + (data.technical.technical * 0.4) + (wiscarAvg * 0.3));
  };

  const getRecommendation = (overall: number, data: ScoreData) => {
    if (overall >= 80) {
      return "Yes - Pursue this path confidently";
    } else if (overall >= 60) {
      return "Maybe - Needs exploration or readiness prep";
    } else {
      return "No - Consider alternate paths";
    }
  };

  const getScoreColor = (score: number) => {
    if (score >= 80) return "text-success";
    if (score >= 60) return "text-warning";
    return "text-destructive";
  };

  const getScoreIcon = (score: number) => {
    if (score >= 80) return <CheckCircle className="w-5 h-5 text-success" />;
    if (score >= 60) return <AlertCircle className="w-5 h-5 text-warning" />;
    return <XCircle className="w-5 h-5 text-destructive" />;
  };

  if (!scores) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Loading Results...</h2>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-hero-bg via-background to-secondary py-12">
      <div className="container mx-auto max-w-6xl px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 text-primary">Your Assessment Results</h1>
          <p className="text-xl text-muted-foreground">
            Personalized insights for your Connected Vehicle Engineering journey
          </p>
        </div>

        {/* Overall Score */}
        <Card className="p-8 mb-8 bg-[var(--gradient-card)] shadow-[var(--shadow-card)] border-0 text-center">
          <div className="flex items-center justify-center mb-4">
            {getScoreIcon(overallScore)}
            <h2 className="text-3xl font-bold ml-3">Overall Confidence Score</h2>
          </div>
          <div className="text-6xl font-bold mb-4 text-primary">{overallScore}%</div>
          <div className={`text-xl font-semibold mb-4 ${getScoreColor(overallScore)}`}>
            {recommendation}
          </div>
          <Progress value={overallScore} className="h-4 mb-4" />
        </Card>

        {/* Detailed Scores Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          {/* Psychometric Scores */}
          <Card className="p-6 bg-[var(--gradient-card)] shadow-[var(--shadow-card)] border-0">
            <h3 className="text-xl font-semibold mb-4 flex items-center">
              <Target className="w-5 h-5 mr-2 text-primary" />
              Psychometric Analysis
            </h3>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-2">
                  <span>Interest Alignment</span>
                  <span className="font-semibold">{scores.psychometric.interest}%</span>
                </div>
                <Progress value={scores.psychometric.interest} className="h-2" />
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span>Personality Fit</span>
                  <span className="font-semibold">{scores.psychometric.personality}%</span>
                </div>
                <Progress value={scores.psychometric.personality} className="h-2" />
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span>Cognitive Style</span>
                  <span className="font-semibold">{scores.psychometric.cognitive}%</span>
                </div>
                <Progress value={scores.psychometric.cognitive} className="h-2" />
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span>Motivation</span>
                  <span className="font-semibold">{scores.psychometric.motivation}%</span>
                </div>
                <Progress value={scores.psychometric.motivation} className="h-2" />
              </div>
            </div>
          </Card>

          {/* Technical Scores */}
          <Card className="p-6 bg-[var(--gradient-card)] shadow-[var(--shadow-card)] border-0">
            <h3 className="text-xl font-semibold mb-4 flex items-center">
              <BookOpen className="w-5 h-5 mr-2 text-tech-green" />
              Technical Readiness
            </h3>
            <div className="text-center mb-4">
              <div className="text-4xl font-bold text-tech-green mb-2">
                {scores.technical.technical}%
              </div>
              <p className="text-sm text-muted-foreground">
                {scores.technical.rawScore} out of {scores.technical.maxScore} points
              </p>
            </div>
            <Progress value={scores.technical.technical} className="h-4 mb-4" />
            <div className="text-sm text-muted-foreground text-center">
              {scores.technical.technical >= 80 
                ? "Excellent technical foundation" 
                : scores.technical.technical >= 60 
                ? "Good foundation with some gaps" 
                : "Significant learning needed"}
            </div>
          </Card>
        </div>

        {/* WISCAR Framework */}
        <Card className="p-6 mb-8 bg-[var(--gradient-card)] shadow-[var(--shadow-card)] border-0">
          <h3 className="text-xl font-semibold mb-6 flex items-center">
            <TrendingUp className="w-5 h-5 mr-2 text-info" />
            WISCAR Framework Analysis
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(scores.wiscar).map(([key, value]) => (
              <div key={key} className="text-center">
                <div className="w-16 h-16 bg-info/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-lg font-bold text-info">{key.charAt(0).toUpperCase()}</span>
                </div>
                <h4 className="font-semibold mb-2 capitalize">
                  {key === 'reality' ? 'Real-World Alignment' : key}
                </h4>
                <div className="text-2xl font-bold mb-2">{value}%</div>
                <Progress value={value} className="h-2" />
              </div>
            ))}
          </div>
        </Card>

        {/* Recommendations */}
        <Card className="p-8 mb-8 bg-[var(--gradient-card)] shadow-[var(--shadow-card)] border-0">
          <h3 className="text-2xl font-semibold mb-6">Personalized Recommendations</h3>
          
          {overallScore >= 80 ? (
            <div className="space-y-4">
              <div className="flex items-start">
                <CheckCircle className="w-5 h-5 mr-3 text-success mt-1" />
                <div>
                  <h4 className="font-semibold text-success">Ready to Start Learning</h4>
                  <p className="text-sm text-muted-foreground">
                    Begin with: Intro to Automotive Networking, V2X 101, CAN Protocol Basics
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-5 h-5 mr-3 text-success mt-1" />
                <div>
                  <h4 className="font-semibold text-success">Suggested Tools</h4>
                  <p className="text-sm text-muted-foreground">
                    CANalyzer, MATLAB/Simulink, Python for IoT, Automotive SPICE
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-5 h-5 mr-3 text-success mt-1" />
                <div>
                  <h4 className="font-semibold text-success">Next Steps</h4>
                  <p className="text-sm text-muted-foreground">
                    Start building projects, join automotive tech communities, consider internships
                  </p>
                </div>
              </div>
            </div>
          ) : overallScore >= 60 ? (
            <div className="space-y-4">
              <div className="flex items-start">
                <AlertCircle className="w-5 h-5 mr-3 text-warning mt-1" />
                <div>
                  <h4 className="font-semibold text-warning">Areas for Development</h4>
                  <p className="text-sm text-muted-foreground">
                    Focus on strengthening {scores.technical.technical < 60 ? 'technical foundations' : 'soft skills and motivation'}
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <AlertCircle className="w-5 h-5 mr-3 text-warning mt-1" />
                <div>
                  <h4 className="font-semibold text-warning">Recommended Preparation</h4>
                  <p className="text-sm text-muted-foreground">
                    Start with prerequisite courses in networking, programming basics, and automotive fundamentals
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              <div className="flex items-start">
                <XCircle className="w-5 h-5 mr-3 text-destructive mt-1" />
                <div>
                  <h4 className="font-semibold text-destructive">Consider Alternative Paths</h4>
                  <p className="text-sm text-muted-foreground">
                    You might be better suited for: Embedded Systems, Cloud DevOps, Data Engineering, or Mechatronics
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <AlertCircle className="w-5 h-5 mr-3 text-warning mt-1" />
                <div>
                  <h4 className="font-semibold text-warning">Exploration Recommended</h4>
                  <p className="text-sm text-muted-foreground">
                    Take introductory courses to better understand if this field aligns with your interests
                  </p>
                </div>
              </div>
            </div>
          )}
        </Card>

        {/* Action Buttons */}
        <div className="text-center space-x-4">
          <Button 
            onClick={() => navigate("/")}
            variant="outline"
            size="lg"
          >
            Take Assessment Again
          </Button>
          <Button 
            onClick={() => window.print()}
            size="lg"
            className="bg-[var(--gradient-button)] hover:shadow-[var(--shadow-button)] transition-all duration-300"
          >
            Save Results
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Results;