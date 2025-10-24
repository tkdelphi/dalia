import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, CheckCircle2, TrendingUp, Target, Brain, BarChart3, Users, Zap } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img src="/dalia-logo.jpg" alt="Dalia" className="w-8 h-8 rounded-md" />
            <span className="text-xl font-bold">dalia</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#problem" className="text-sm text-muted-foreground hover:text-foreground transition-colors">The Problem</a>
            <a href="#solution" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Solution</a>
            <a href="#features" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Features</a>
            <a href="#contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Contact</a>
          </div>
          <Button className="bg-accent text-accent-foreground hover:bg-accent/90">
            Request Demo
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent pointer-events-none"></div>
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center space-y-8">
            <div className="inline-block">
              <span className="text-accent text-sm font-semibold uppercase tracking-wider">First of Its Kind</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Stop Wasting <span className="gradient-text">88%</span> of Your<br />
              Training Budget
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Dalia is the first AI-powered solution that scientifically measures what training actually impacts your KPIs—and what doesn't.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 text-lg px-8 py-6">
                See Dalia in Action
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6">
                Calculate Your Waste
              </Button>
            </div>
            <p className="text-sm text-muted-foreground pt-4">
              Most training solutions track completion rates. Dalia tracks what matters: skill transfer, performance impact, and ROI.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section id="problem" className="py-20 px-6 bg-card/50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              The <span className="gradient-text">$8.1 Trillion</span> Training Crisis
            </h2>
            <p className="text-xl text-muted-foreground">
              Your competitors are bleeding money on training that doesn't work. Are you?
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-8 bg-card border-border hover:border-primary transition-colors">
              <div className="text-6xl font-bold text-primary mb-4">92%</div>
              <p className="text-lg text-foreground">
                of companies don't measure skill transfer on the job
              </p>
            </Card>
            <Card className="p-8 bg-card border-border hover:border-primary transition-colors">
              <div className="text-6xl font-bold text-destructive mb-4">88%</div>
              <p className="text-lg text-foreground">
                of training investment is wasted (3-12% actual impact)
              </p>
            </Card>
            <Card className="p-8 bg-card border-border hover:border-primary transition-colors">
              <div className="text-6xl font-bold text-accent mb-4">$13.5M</div>
              <p className="text-lg text-foreground">
                wasted per year per 1,000 employees
              </p>
            </Card>
            <Card className="p-8 bg-card border-border hover:border-primary transition-colors">
              <div className="text-6xl font-bold text-chart-4 mb-4">$8.1T</div>
              <p className="text-lg text-foreground">
                lost annually to ineffective management
              </p>
            </Card>
            <Card className="p-8 bg-card border-border hover:border-primary transition-colors">
              <div className="text-6xl font-bold text-chart-5 mb-4">$105B</div>
              <p className="text-lg text-foreground">
                spent fixing underperformers that could have been identified earlier
              </p>
            </Card>
            <Card className="p-8 bg-card border-border hover:border-primary transition-colors">
              <div className="text-6xl font-bold text-primary mb-4">$805B</div>
              <p className="text-lg text-foreground">
                corporate training market by 2035 (7% CAGR)
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Competitive Differentiation */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Why Every Other Solution Falls Short
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-muted-foreground">Other Solutions</h3>
              <p className="text-sm text-muted-foreground">Udemy, Coursera, Degreed, LinkedIn Learning, SAP SuccessFactors</p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-muted flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-xs">✓</span>
                  </div>
                  <p className="text-muted-foreground">Track course completions</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-muted flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-xs">✓</span>
                  </div>
                  <p className="text-muted-foreground">Measure engagement</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-muted flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-xs">✓</span>
                  </div>
                  <p className="text-muted-foreground">Deliver content</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-muted flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-xs">✗</span>
                  </div>
                  <p className="text-muted-foreground">Hope for the best</p>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-accent">Dalia</h3>
              <p className="text-sm text-accent">Digital Adaptive Learning Intelligent Assistant</p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <p className="text-foreground font-medium">Tracks skill application on the job</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <p className="text-foreground font-medium">Measures performance impact</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <p className="text-foreground font-medium">Proves ROI scientifically</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <p className="text-foreground font-medium">Shows exactly what works</p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12 text-center">
            <p className="text-2xl font-bold">
              Training without measurement is just expensive hope. <span className="text-accent">Dalia delivers proof.</span>
            </p>
          </div>
        </div>
      </section>

      {/* How Dalia Works */}
      <section id="solution" className="py-20 px-6 bg-card/50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Scientific Measurement. Granular Insights. <span className="gradient-text">Real ROI.</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              While others focus on upskilling, we focus on proving its impact.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 bg-card border-border">
              <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Track Everything</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>Real-time skill transfer tracking (4 clicks, &lt;8 seconds)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>Granular breakdown of every training component</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>See which specific skills are being applied</span>
                </li>
              </ul>
            </Card>
            <Card className="p-8 bg-card border-border">
              <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                <Brain className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">AI-Powered Analysis</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>AI advisor detects performance patterns</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>Identifies what's working and what's not</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>Connects training to KPI movement (positive or negative)</span>
                </li>
              </ul>
            </Card>
            <Card className="p-8 bg-card border-border">
              <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                <BarChart3 className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Actionable Intelligence</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>Smart dashboards with clear ROI</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>Fine-tune training based on data</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>Eliminate waste, amplify what works</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section id="features" className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Built for Enterprises That Demand Results
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="p-6 bg-card border-border hover:border-primary transition-colors">
              <Zap className="w-10 h-10 text-accent mb-4" />
              <h3 className="text-xl font-bold mb-2">4-Click Tracking</h3>
              <p className="text-muted-foreground">Capture performance in under 8 seconds</p>
            </Card>
            <Card className="p-6 bg-card border-border hover:border-primary transition-colors">
              <Brain className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-2">AI Coaching</h3>
              <p className="text-muted-foreground">Personalized guidance based on behavior patterns</p>
            </Card>
            <Card className="p-6 bg-card border-border hover:border-primary transition-colors">
              <TrendingUp className="w-10 h-10 text-chart-4 mb-4" />
              <h3 className="text-xl font-bold mb-2">Neuroscience-Driven</h3>
              <p className="text-muted-foreground">Engagement engine ensures adoption</p>
            </Card>
            <Card className="p-6 bg-card border-border hover:border-primary transition-colors">
              <Target className="w-10 h-10 text-accent mb-4" />
              <h3 className="text-xl font-bold mb-2">Smart Targets</h3>
              <p className="text-muted-foreground">Configurable metrics aligned to your KPIs</p>
            </Card>
            <Card className="p-6 bg-card border-border hover:border-primary transition-colors">
              <BarChart3 className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-2">Intelligence Center</h3>
              <p className="text-muted-foreground">Transform data into decisions</p>
            </Card>
            <Card className="p-6 bg-card border-border hover:border-primary transition-colors">
              <Users className="w-10 h-10 text-chart-5 mb-4" />
              <h3 className="text-xl font-bold mb-2">25+ Years of Expertise</h3>
              <p className="text-muted-foreground">Built on proven skill transfer science</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Who It's For */}
      <section className="py-20 px-6 bg-card/50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              For Leaders Who Need to Prove Impact
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8 bg-card border-border">
              <h3 className="text-2xl font-bold mb-4">Chief Learning Officers</h3>
              <p className="text-muted-foreground mb-4">Prove training ROI to the C-suite</p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                  <span>Track skill transfer across teams</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                  <span>Accelerate time-to-mastery</span>
                </li>
              </ul>
            </Card>
            <Card className="p-8 bg-card border-border">
              <h3 className="text-2xl font-bold mb-4">HR Leaders</h3>
              <p className="text-muted-foreground mb-4">Turn workforce development into competitive advantage</p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                  <span>Identify and retain top talent</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                  <span>Benchmark organizational strengths</span>
                </li>
              </ul>
            </Card>
            <Card className="p-8 bg-card border-border">
              <h3 className="text-2xl font-bold mb-4">COOs & Business Leaders</h3>
              <p className="text-muted-foreground mb-4">Connect learning to business outcomes</p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                  <span>Increase productivity and performance</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                  <span>Reduce costs of repeat training</span>
                </li>
              </ul>
            </Card>
            <Card className="p-8 bg-card border-border">
              <h3 className="text-2xl font-bold mb-4">L&D Managers</h3>
              <p className="text-muted-foreground mb-4">Stop guessing, start knowing what works</p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                  <span>Fine-tune programs based on data</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                  <span>Eliminate ineffective training</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* The Stakes */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              The Future of Work Is Already Here
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="p-8 bg-card border-border text-center">
              <div className="text-5xl font-bold text-primary mb-4">70%</div>
              <p className="text-foreground">of employees need reskilling by 2025</p>
            </Card>
            <Card className="p-8 bg-card border-border text-center">
              <div className="text-5xl font-bold text-accent mb-4">66%</div>
              <p className="text-foreground">of today's critical skills will change by 2030</p>
            </Card>
            <Card className="p-8 bg-card border-border text-center">
              <div className="text-5xl font-bold text-destructive mb-4">1 in 5</div>
              <p className="text-foreground">global firms will fail due to skill gaps</p>
            </Card>
          </div>
          <div className="text-center">
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Organizations that can't measure and optimize skill development won't survive the next decade. <span className="text-foreground font-semibold">Can you afford to guess?</span>
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section id="contact" className="py-20 px-6 bg-gradient-to-br from-primary/20 to-accent/20">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Stop Wasting Money. Start Proving ROI.
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Join the enterprises transforming training from a cost center into a growth engine.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 text-lg px-8 py-6">
              Request a Demo
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6">
              Calculate Your Training Waste
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-border">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <img src="/dalia-logo.jpg" alt="Dalia" className="w-8 h-8 rounded-md" />
                <span className="text-xl font-bold">dalia</span>
              </div>
              <p className="text-sm text-muted-foreground">Bringing Skills to Life</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#features" className="hover:text-foreground transition-colors">Features</a></li>
                <li><a href="#solution" className="hover:text-foreground transition-colors">How It Works</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Pricing</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">About</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Careers</a></li>
                <li><a href="#contact" className="hover:text-foreground transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">Privacy</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Terms</a></li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-border text-center text-sm text-muted-foreground">
            <p>© 2025 Dalia Labs. All rights reserved. | dalilabs.ai</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

