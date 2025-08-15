import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqData = [
  {
    question: "Hoe start ik met Beursadvies.nl?",
    answer: "Meld je aan via onze website, koppel veilig je rekening via onze broker-partners en activeer automatische uitvoering. Je bent binnen 10 minuten klaar om te starten."
  },
  {
    question: "Blijf ik eigenaar van mijn geld?",
    answer: "Ja, altijd. Je handelt via je eigen rekening bij een gereguleerde broker. Wij hebben nooit toegang tot je geld, alleen tot het plaatsen van orders volgens onze signalen."
  },
  {
    question: "Wat als mijn betaling mislukt?",
    answer: "Je toegang wordt direct gepauzeerd tot de betaling is voltooid. Je ontvangt automatisch een e-mail met instructies om je betaling bij te werken."
  },
  {
    question: "Kan ik tussentijds bijstorten?",
    answer: "Ja, je kunt altijd bijstorten. Onze algoritmes kunnen automatisch je posities aanpassen aan je nieuwe vermogen (dit is optioneel en kan worden in- of uitgeschakeld)."
  },
  {
    question: "Is dit beleggingsadvies?",
    answer: "Nee, wij leveren signalen en automatische uitvoering. Dit is geen persoonlijk beleggingsadvies. Je neemt zelf de beslissing om onze signalen te volgen."
  },
  {
    question: "Wat zijn de risico's?",
    answer: "Beleggen brengt altijd risico's mee. Je kunt (een deel van) je inleg verliezen. Onze strategie is ontworpen om risico's te beperken, maar kan verliezen niet voorkomen."
  },
  {
    question: "Hoe zeg ik mijn abonnement op?",
    answer: "Je kunt eenvoudig opzeggen in je dashboard onder 'Abonnement'. Je toegang blijft actief tot het einde van je betaalde periode."
  },
  {
    question: "Welke ondersteuning krijg ik?",
    answer: "We bieden Nederlandse support via livechat op onze website en e-mail. Onze specialisten helpen je met alle vragen over het systeem en je account."
  }
];

const FAQ = () => {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-navy mb-6">
            Veelgestelde vragen
          </h2>
          <p className="text-xl text-muted-foreground">
            Alles wat je wilt weten over Beursadvies.nl
          </p>
        </div>

        <div className="bg-white rounded-3xl p-8 shadow-card border border-border">
          <Accordion type="single" collapsible className="space-y-4">
            {faqData.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border border-border rounded-xl px-6 py-2"
              >
                <AccordionTrigger className="text-left font-semibold text-navy hover:text-navy/80 py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;