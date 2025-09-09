import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { CheckCircle, Users, Award, Target, TrendingUp } from "lucide-react";
import heroImage from "@/assets/connected-vehicle-hero.jpg";

const Index = () => {
  const navigate = useNavigate();

  const handleStartAssessment = () => {
    navigate("/assessment/intro");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-hero-bg via-background to-secondary">
      {/* Hero Section */}
      <section className="relative px-6 py-20 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src={heroImage} 
            alt="Connected Vehicle Technology Visualization" 
            className="w-full h-full object-cover opacity-10"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-hero-bg/90 via-background/80 to-secondary/90" />
        </div>
        
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full mb-6">
              <Target className="w-4 h-4 mr-2 text-primary" />
              <span className="text-sm font-medium text-primary">SkillPath Assessment Series</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-primary-light to-tech-green bg-clip-text text-transparent">
              Are You Ready to Become a Connected Vehicle Engineer?
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              Discover your readiness for the future of automotive technology. Get personalized insights, 
              skill assessments, and a career roadmap tailored to Connected Vehicle Engineering.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Button 
                onClick={handleStartAssessment}
                size="lg" 
                className="px-8 py-4 text-lg font-semibold bg-[var(--gradient-button)] hover:shadow-[var(--shadow-button)] transition-all duration-300 transform hover:scale-105"
              >
                Start Your Assessment
              </Button>
              <div className="flex items-center text-muted-foreground">
                <CheckCircle className="w-4 h-4 mr-2 text-tech-green" />
                <span className="text-sm">15 minutes • Personalized results</span>
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="p-6 bg-[var(--gradient-card)] shadow-[var(--shadow-card)] border-0 hover:shadow-lg transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold">Psychometric Analysis</h3>
              </div>
              <p className="text-muted-foreground">
                Discover your personality fit, cognitive style, and motivation alignment with Connected Vehicle Engineering roles.
              </p>
            </Card>

            <Card className="p-6 bg-[var(--gradient-card)] shadow-[var(--shadow-card)] border-0 hover:shadow-lg transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-tech-green/10 rounded-lg flex items-center justify-center mr-4">
                  <Award className="w-6 h-6 text-tech-green" />
                </div>
                <h3 className="text-lg font-semibold">Technical Readiness</h3>
              </div>
              <p className="text-muted-foreground">
                Evaluate your current knowledge in automotive systems, networking, IoT, and programming fundamentals.
              </p>
            </Card>

            <Card className="p-6 bg-[var(--gradient-card)] shadow-[var(--shadow-card)] border-0 hover:shadow-lg transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-info/10 rounded-lg flex items-center justify-center mr-4">
                  <TrendingUp className="w-6 h-6 text-info" />
                </div>
                <h3 className="text-lg font-semibold">WISCAR Framework</h3>
              </div>
              <p className="text-muted-foreground">
                Get scored on Will, Interest, Skill, Cognitive readiness, Ability to learn, and Real-world alignment.
              </p>
            </Card>
          </div>

          {/* What You'll Learn */}
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-8">What You'll Discover</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                "Your psychological fit score",
                "Technical knowledge gaps",
                "Personalized learning path",
                "Career alternatives if needed"
              ].map((item, index) => (
                <div key={index} className="flex items-center justify-center p-4 bg-background/50 rounded-lg">
                  <CheckCircle className="w-5 h-5 mr-3 text-tech-green flex-shrink-0" />
                  <span className="text-sm font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;