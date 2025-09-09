import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { Clock, CheckCircle, Car, Wifi, Shield, Cpu } from "lucide-react";

const AssessmentIntro = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-hero-bg via-background to-secondary py-12">
      <div className="container mx-auto max-w-4xl px-6">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 text-primary">Connected Vehicle Engineer Assessment</h1>
          <p className="text-xl text-muted-foreground">
            Let's evaluate your readiness for this exciting career path
          </p>
        </div>

        <Card className="p-8 mb-8 bg-[var(--gradient-card)] shadow-[var(--shadow-card)] border-0">
          <h2 className="text-2xl font-semibold mb-6">What is Connected Vehicle Engineering?</h2>
          <p className="text-muted-foreground mb-6 leading-relaxed">
            Connected Vehicle Engineering focuses on integrating automotive technologies with communication networks, 
            enabling vehicles to share data with other cars, infrastructure, and the cloud. This field combines 
            automotive expertise with cutting-edge technology.
          </p>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            <div className="flex items-center p-3 bg-primary/5 rounded-lg">
              <Car className="w-5 h-5 mr-3 text-primary" />
              <span className="text-sm font-medium">V2X Communication</span>
            </div>
            <div className="flex items-center p-3 bg-tech-green/5 rounded-lg">
              <Wifi className="w-5 h-5 mr-3 text-tech-green" />
              <span className="text-sm font-medium">IoT Integration</span>
            </div>
            <div className="flex items-center p-3 bg-info/5 rounded-lg">
              <Shield className="w-5 h-5 mr-3 text-info" />
              <span className="text-sm font-medium">Cybersecurity</span>
            </div>
            <div className="flex items-center p-3 bg-warning/5 rounded-lg">
              <Cpu className="w-5 h-5 mr-3 text-warning" />
              <span className="text-sm font-medium">Embedded Systems</span>
            </div>
          </div>

          <div className="bg-secondary/30 p-4 rounded-lg">
            <h3 className="font-semibold mb-2">Typical Career Roles:</h3>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>• Connected Vehicle Engineer</li>
              <li>• V2X Communication Engineer</li>
              <li>• Automotive IoT Developer</li>
              <li>• Telematics Engineer</li>
              <li>• Embedded Systems Engineer (Automotive)</li>
            </ul>
          </div>
        </Card>

        <Card className="p-8 mb-8 bg-[var(--gradient-card)] shadow-[var(--shadow-card)] border-0">
          <h2 className="text-2xl font-semibold mb-6">Assessment Overview</h2>
          
          <div className="grid md:grid-cols-3 gap-6 mb-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl font-bold text-primary">1</span>
              </div>
              <h3 className="font-semibold mb-2">Psychometric Evaluation</h3>
              <p className="text-sm text-muted-foreground">Interest, personality, and motivation assessment</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-tech-green/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl font-bold text-tech-green">2</span>
              </div>
              <h3 className="font-semibold mb-2">Technical Assessment</h3>
              <p className="text-sm text-muted-foreground">Knowledge check and aptitude testing</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-info/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl font-bold text-info">3</span>
              </div>
              <h3 className="font-semibold mb-2">WISCAR Analysis</h3>
              <p className="text-sm text-muted-foreground">Comprehensive readiness evaluation</p>
            </div>
          </div>

          <div className="flex items-center justify-center mb-6">
            <Clock className="w-5 h-5 mr-2 text-muted-foreground" />
            <span className="text-muted-foreground">Estimated time: 15 minutes</span>
          </div>

          <div className="space-y-2 mb-6">
            <div className="flex items-center">
              <CheckCircle className="w-4 h-4 mr-3 text-tech-green" />
              <span className="text-sm">Personalized career readiness score</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="w-4 h-4 mr-3 text-tech-green" />
              <span className="text-sm">Detailed skill gap analysis</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="w-4 h-4 mr-3 text-tech-green" />
              <span className="text-sm">Customized learning roadmap</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="w-4 h-4 mr-3 text-tech-green" />
              <span className="text-sm">Alternative career suggestions</span>
            </div>
          </div>

          <div className="text-center">
            <Button 
              onClick={() => navigate("/assessment/psychometric")}
              size="lg"
              className="px-8 py-4 text-lg font-semibold bg-[var(--gradient-button)] hover:shadow-[var(--shadow-button)] transition-all duration-300"
            >
              Begin Assessment
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default AssessmentIntro;