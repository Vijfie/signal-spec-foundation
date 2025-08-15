import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { TrendingUp, Shield, Clock } from 'lucide-react';

// 2024 Performance data
const performanceData = [
  { month: 'Januari', rendement: 1.95, winst: 195, fonds: 'TS' },
  { month: 'Februari', rendement: 8.79, winst: 879, fonds: 'TS' },
  { month: 'Maart', rendement: 4.73, winst: 473, fonds: 'TS' },
  { month: 'April', rendement: 4.13, winst: 413, fonds: 'TS' },
  { month: 'Mei', rendement: 5.99, winst: 599, fonds: 'TS' },
  { month: 'Juni', rendement: 6.83, winst: 683, fonds: 'TS' },
  { month: 'Juli', rendement: 1.68, winst: 168, fonds: 'TS' },
  { month: 'Augustus', rendement: 3.14, winst: 314, fonds: 'TS' },
  { month: 'September', rendement: -4.12, winst: -412, fonds: 'TS' },
  { month: 'Oktober', rendement: 6.34, winst: 634, fonds: 'TS' },
  { month: 'November', rendement: 24.71, winst: 2471, fonds: 'TS' },
  { month: 'December', rendement: -3.18, winst: -318, fonds: 'TS' },
];

const totalProfit = 6099;

const PerformanceSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16" id="rendement">
          <h2 className="text-4xl md:text-5xl font-bold text-navy mb-6">
            Rendement 2024: €{totalProfit.toLocaleString('nl-NL')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Transparante maandresultaten van ons TS-fonds. Alle cijfers zijn geverifieerd 
            en tonen de werkelijke prestaties van onze strategie.
          </p>
        </div>

        {/* Performance Chart */}
        <div className="bg-white rounded-3xl p-8 mb-12 shadow-card border border-border">
          <div className="mb-6">
            <h3 className="text-2xl font-semibold text-navy mb-2">TS-Fonds Prestaties 2024</h3>
            <p className="text-muted-foreground">Maandelijkse rendementen en winst/verlies overzicht</p>
          </div>
          
          <div className="h-96">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={performanceData}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis 
                  dataKey="month" 
                  tick={{ fontSize: 11 }}
                  stroke="hsl(var(--muted-foreground))"
                  angle={-45}
                  textAnchor="end"
                  height={60}
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
                  formatter={(value: number, name: string) => [
                    `${value}%`,
                    'Rendement'
                  ]}
                  labelFormatter={(label: string, payload: any[]) => {
                    if (payload && payload[0]) {
                      const data = payload[0].payload;
                      return `${label} - €${data.winst > 0 ? '+' : ''}${data.winst.toLocaleString('nl-NL')}`;
                    }
                    return label;
                  }}
                />
                <Line 
                  type="monotone" 
                  dataKey="rendement" 
                  stroke="hsl(var(--gold))" 
                  strokeWidth={3}
                  name="TS-Fonds Rendement"
                  dot={(props: any) => {
                    const isNegative = props.payload.rendement < 0;
                    return (
                      <circle
                        cx={props.cx}
                        cy={props.cy}
                        r={5}
                        fill={isNegative ? 'hsl(var(--navy))' : 'hsl(var(--gold))'}
                        stroke={isNegative ? 'hsl(var(--navy))' : 'hsl(var(--gold))'}
                        strokeWidth={2}
                      />
                    );
                  }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
          
          <div className="mt-6 p-4 bg-success/10 rounded-xl border border-success/20">
            <div className="text-center">
              <p className="text-lg font-semibold text-success">
                Totaal rendement 2024: €{totalProfit.toLocaleString('nl-NL')}
              </p>
              <p className="text-sm text-muted-foreground mt-1">
                Gebaseerd op een startkapitaal van €10.000
              </p>
            </div>
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