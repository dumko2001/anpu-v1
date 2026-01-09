import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { FAQ_ITEMS } from "@/lib/constants";

export function FAQ() {
    return (
        <section id="faq" className="py-24 px-6 bg-secondary">
            <div className="max-w-4xl mx-auto">
                {/* Section Header */}
                <div className="mb-16 text-center">
                    <span className="font-mono text-sm text-muted-foreground">04</span>
                    <h2 className="font-display text-5xl md:text-6xl mt-2 text-foreground">
                        Questions
                    </h2>
                    <p className="mt-4 text-muted-foreground text-lg">
                        & Answers
                    </p>
                </div>

                {/* FAQ Accordion */}
                <Accordion type="single" collapsible className="space-y-4">
                    {FAQ_ITEMS.map((item, index) => (
                        <AccordionItem
                            key={index}
                            value={`item-${index}`}
                            className="bg-card rounded-lg px-6 border-0 shadow-sm"
                        >
                            <AccordionTrigger className="text-left font-display text-lg md:text-xl text-foreground hover:text-primary py-6">
                                {item.question}
                            </AccordionTrigger>
                            <AccordionContent className="text-muted-foreground pb-6 text-base leading-relaxed">
                                {item.answer}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </section>
    );
}
