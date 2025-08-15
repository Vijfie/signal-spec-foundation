import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { TrendingUp, Shield, Clock } from 'lucide-react';

// Sample performance data
const performanceData = [
  { month: 'Jan 2023', strategy: 0, benchmark: 0 },
  { month: 'Feb 2023', strategy: 2.1, benchmark: 1.2 },
  { month: 'Mar 2023', strategy: 5.8, benchmark: 3.1 },
  { month: 'Apr 2023', strategy: 3.2, benchmark: 2.8 },
  { month: 'May 2023', strategy: 8.5, benchmark: 4.2 },
  { month: 'Jun 2023', strategy: 12.3, benchmark: 6.1 },
  { month: 'Jul 2023', strategy: 15.8, benchmark: 8.3 },
  { month: 'Aug 2023', strategy: 11.2, benchmark: 7.1 },
  { month: 'Sep 2023', strategy: 18.4, benchmark: 9.8 },
  { month: 'Oct 2023', strategy: 22.1, benchmark: 11.2 },
  { month: 'Nov 2023', strategy: 25.3, benchmark: 13.5 },
  { month: 'Dec 2023', strategy: 28.7, benchmark: 15.1 },
];

const PerformanceSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-navy mb-6">
            Resultaten spreken voor zich
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Onze strategie is gebouwd op data en risicobeheer. Je volgt de signalen automatisch – 
            volledige controle blijft bij jou.
          </p>
        </div>

        {/* Performance Chart */}
        <div className="bg-white rounded-3xl p-8 mb-12 shadow-card border border-border">
          <div className="mb-6">
            <h3 className="text-2xl font-semibold text-navy mb-2">Historisch Rendement</h3>
            <p className="text-muted-foreground">Vergelijking met benchmark (AEX) over 12 maanden</p>
          </div>
          
          <div className="h-96">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={performanceData}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis 
                  dataKey="month" 
                  tick={{ fontSize: 12 }}
                  stroke="hsl(var(--muted-foreground))"
                />
                <YAxis 
                  tick={{ fontSize: 12 }}
                  stroke="hsl(var(--muted-foreground))"
                  label={{ value: 'Rendement (%)', angle: -90, position: 'insideLeft' }}
                />
                <Tooltip 
                  contentStyle={{
                    backgroundColor: 'hsl(var(--card))',
                    border: '1px solid hsl(var(--border))',
                    borderRadius: '12px',
                    boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'
                  }}
                />
                <Legend />
                <Line 
                  type="monotone" 
                  dataKey="strategy" 
                  stroke="hsl(var(--tech-accent))" 
                  strokeWidth={3}
                  name="Beursadvies Strategie"
                  dot={{ fill: 'hsl(var(--tech-accent))', strokeWidth: 2, r: 4 }}
                />
                <Line 
                  type="monotone" 
                  dataKey="benchmark" 
                  stroke="hsl(var(--muted-foreground))" 
                  strokeWidth={2}
                  strokeDasharray="5 5"
                  name="AEX Benchmark"
                  dot={{ fill: 'hsl(var(--muted-foreground))', strokeWidth: 2, r: 3 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
          
          <p className="text-sm text-warning mt-4 text-center">
            Let op: resultaten uit het verleden bieden geen garantie voor de toekomst.
          </p>
        </div>

        {/* Performance Tiles */}
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-2xl p-8 text-center shadow-card border border-border">
            <div className="w-16 h-16 bg-warning/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <TrendingUp className="w-8 h-8 text-warning" />
            </div>
            <h4 className="text-3xl font-bold text-navy mb-2">-8.2%</h4>
            <p className="text-muted-foreground font-medium">Max. drawdown</p>
            <p className="text-sm text-muted-foreground mt-2">Laagste punt ten opzichte van piek</p>
          </div>

          <div className="bg-white rounded-2xl p-8 text-center shadow-card border border-border">
            <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="w-8 h-8 text-success" />
            </div>
            <h4 className="text-3xl font-bold text-navy mb-2">73%</h4>
            <p className="text-muted-foreground font-medium">Winrate</p>
            <p className="text-sm text-muted-foreground mt-2">Percentage winstgevende trades</p>
          </div>

          <div className="bg-white rounded-2xl p-8 text-center shadow-card border border-border">
            <div className="w-16 h-16 bg-tech-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Clock className="w-8 h-8 text-tech-accent" />
            </div>
            <h4 className="text-3xl font-bold text-navy mb-2">18</h4>
            <p className="text-muted-foreground font-medium">Gem. signaalsduur (dagen)</p>
            <p className="text-sm text-muted-foreground mt-2">Gemiddelde houdduur posities</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PerformanceSection;