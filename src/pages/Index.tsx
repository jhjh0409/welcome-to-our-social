import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BarChart3, Target, Trophy, Users, Zap, TrendingUp, Star, Shield } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-hero text-foreground">
      {/* Header */}
      <header className="border-b border-border/50 backdrop-blur-sm bg-background/10">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
              <BarChart3 className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="font-bold text-xl">RiftWrapped</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">Features</a>
            <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">About</a>
            <Button variant="outline" className="border-primary/50 hover:border-primary">Sign In</Button>
            <Button className="bg-gradient-primary hover:shadow-glow-primary transition-all duration-300">Get Started</Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto text-center max-w-4xl">
          <div className="mb-6">
            <Badge variant="secondary" className="mb-4 bg-secondary/20 text-secondary border-secondary/30">
              🎮 Your Gaming Journey Analyzed
            </Badge>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Your Rift Wrapped
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Discover your League of Legends journey like never before. Get personalized insights, 
            track your improvement, and celebrate your gaming achievements with beautiful visualizations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-primary hover:shadow-glow-primary transition-all duration-300 text-lg px-8 py-3">
              <Zap className="w-5 h-5 mr-2" />
              Analyze My Games
            </Button>
            <Button size="lg" variant="outline" className="border-primary/50 hover:border-primary text-lg px-8 py-3">
              <Target className="w-5 h-5 mr-2" />
              View Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Unlock Your Gaming Potential</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Dive deep into your gameplay with advanced analytics and beautiful visualizations
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-gradient-card border-border/50 hover:shadow-glow-primary/20 transition-all duration-300 group">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4 group-hover:shadow-glow-primary transition-all duration-300">
                  <BarChart3 className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Performance Analytics</h3>
                <p className="text-muted-foreground">
                  Track your KDA, CS, vision score, and more across all your games with detailed breakdowns
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card border-border/50 hover:shadow-glow-secondary/20 transition-all duration-300 group">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center mb-4 group-hover:shadow-glow-secondary transition-all duration-300">
                  <Trophy className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Achievement System</h3>
                <p className="text-muted-foreground">
                  Celebrate your biggest plays, pentakills, and climbing milestones with custom achievements
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card border-border/50 hover:shadow-glow-accent/20 transition-all duration-300 group">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mb-4 group-hover:shadow-glow-accent transition-all duration-300">
                  <TrendingUp className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Rank Progression</h3>
                <p className="text-muted-foreground">
                  Visualize your climbing journey with beautiful charts showing your rank progression over time
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card border-border/50 hover:shadow-glow-primary/20 transition-all duration-300 group">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4 group-hover:shadow-glow-primary transition-all duration-300">
                  <Target className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Champion Mastery</h3>
                <p className="text-muted-foreground">
                  See your most played champions, win rates, and discover your hidden one-tricks
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card border-border/50 hover:shadow-glow-secondary/20 transition-all duration-300 group">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center mb-4 group-hover:shadow-glow-secondary transition-all duration-300">
                  <Users className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Team Analysis</h3>
                <p className="text-muted-foreground">
                  Compare your performance with friends and see who's really carrying the team
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card border-border/50 hover:shadow-glow-accent/20 transition-all duration-300 group">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mb-4 group-hover:shadow-glow-accent transition-all duration-300">
                  <Star className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Personal Highlights</h3>
                <p className="text-muted-foreground">
                  Get a personalized recap of your best moments, biggest improvements, and gaming habits
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-6 bg-gradient-primary/10 border-y border-primary/20">
        <div className="container mx-auto text-center">
          <div className="max-w-3xl mx-auto">
            <Shield className="w-16 h-16 text-primary mx-auto mb-6" />
            <h2 className="text-4xl font-bold mb-4">Ready to Level Up Your Game?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Join thousands of players who've discovered their true potential through data-driven insights
            </p>
            <Button size="lg" className="bg-gradient-primary hover:shadow-glow-primary transition-all duration-300 text-lg px-12 py-4">
              <Zap className="w-5 h-5 mr-2" />
              Start Your Analysis
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-border/50">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-6 h-6 bg-gradient-primary rounded flex items-center justify-center">
              <BarChart3 className="w-4 h-4 text-primary-foreground" />
            </div>
            <span className="font-bold">RiftWrapped</span>
          </div>
          <p className="text-muted-foreground text-sm">
            RiftWrapped isn't endorsed by Riot Games and doesn't reflect the views or opinions of Riot Games 
            or anyone officially involved in producing or managing League of Legends.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
