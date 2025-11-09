import Image from 'next/image';
import Link from 'next/link';
import CTAForm from '@/components/CTAForm';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ServiceCard from '@/components/ServiceCard';
import ProcessStep from '@/components/ProcessStep';
import Testimonial from '@/components/Testimonial';

export default function HomePage() {
  return (
    <div>
      <Header />

      <main>
        {/* Hero */}
        <section className="section hero">
          <div className="container hero-grid">
            <div>
              <h1 className="title">
                Donnez de l\'?lan ? votre croissance avec des chatbots sur mesure
              </h1>
              <p className="subtitle">
                Intelliwave con?oit et connecte des agents IA et des automatisations n8n pour qualifier, convertir et fid?liser ? 24/7, sans friction.
              </p>
              <div className="hero-ctas">
                <a href="#contact" className="btn primary">Demander un audit gratuit</a>
                <a href="#services" className="btn ghost">D?couvrir nos services</a>
              </div>
              <div className="trust">
                <Image src="/intelliwave-logo.svg" alt="Intelliwave" width={28} height={28} />
                <span>Experts n8n ? Int?grations CRM ? RAG ? LLMs</span>
              </div>
            </div>
            <div className="hero-media">
              <Image src="/hero-chat.svg" width={640} height={420} alt="Chatbot Intelliwave" className="hero-img" />
            </div>
          </div>
        </section>

        {/* Services */}
        <section id="services" className="section">
          <div className="container">
            <h2 className="section-title">Solutions pens?es pour l\'impact</h2>
            <div className="cards">
              <ServiceCard title="Chatbots sur mesure" description="Conception d\'agents conversationnels adapt?s ? votre marque, connect?s ? vos donn?es et outils." icon="??" />
              <ServiceCard title="Automatisations n8n" description="Workflows robustes: CRM, support, marketing, op?rations. Orchestr?s et monitor?s." icon="??" />
              <ServiceCard title="RAG & connaissances" description="Indexation de votre base documentaire pour des r?ponses fiables et contextualis?es." icon="??" />
              <ServiceCard title="Int?grations & SDK" description="D?ploiement web, WhatsApp, Messenger, Intercom, Zendesk, Slack, API & SDK." icon="??" />
            </div>
          </div>
        </section>

        {/* Process */}
        <section id="process" className="section alt">
          <div className="container">
            <h2 className="section-title">Notre m?thode en 4 ?tapes</h2>
            <div className="steps">
              <ProcessStep step={1} title="Audit & cadrage" description="Objectifs, parcours, donn?es. D?finition des KPI et crit?res de r?ussite." />
              <ProcessStep step={2} title="Design conversationnel" description="Personnalit?, intentions, prompts, garde-fous. Prototypage rapide." />
              <ProcessStep step={3} title="Int?grations n8n" description="Connexion ? vos syst?mes. Sc?narios fiables, test?s et observables." />
              <ProcessStep step={4} title="D?ploiement & suivi" description="Mise en prod, analytics, it?rations continues pour maximiser l\'impact." />
            </div>
          </div>
        </section>

        {/* Proof */}
        <section id="work" className="section">
          <div className="container">
            <h2 className="section-title">Ils surfent d?j? la vague</h2>
            <div className="testimonials">
              <Testimonial avatar="/avatar-1.svg" name="Camille ? SaaS B2B" text="Le bot d\'onboarding r?duit de 32% les tickets et augmente l\'activation." />
              <Testimonial avatar="/avatar-2.svg" name="Hugo ? e?commerce" text="Automatisation n8n: +21% de conversion sur le chat produit." />
              <Testimonial avatar="/avatar-3.svg" name="Lina ? Edtech" text="Support 24/7 multilingue avec RAG: CSAT 4.7/5, temps de r?ponse ?5." />
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section id="pricing" className="section alt">
          <div className="container">
            <h2 className="section-title">Formules transparentes</h2>
            <div className="pricing">
              <div className="price-card">
                <h3>Starter</h3>
                <p className="price">2?490?</p>
                <ul>
                  <li>Chatbot MVP</li>
                  <li>Int?gration web</li>
                  <li>1 workflow n8n</li>
                </ul>
              </div>
              <div className="price-card featured">
                <h3>Growth</h3>
                <p className="price">4?900?</p>
                <ul>
                  <li>Chatbot complet</li>
                  <li>RAG + base documentaire</li>
                  <li>3 workflows n8n</li>
                </ul>
              </div>
              <div className="price-card">
                <h3>Scale</h3>
                <p className="price">Sur-mesure</p>
                <ul>
                  <li>Canaux multiples</li>
                  <li>Observabilit? & QA</li>
                  <li>Support prioritaire</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="section">
          <div className="container contact">
            <div>
              <h2 className="section-title">Parlons de votre cas d\'usage</h2>
              <p>D?crivez bri?vement votre besoin. R?ponse sous 24h.</p>
              <div className="contact-meta">
                <div>?? Paris ? Remote</div>
                <div>? Semaine en cours: 2 places disponibles</div>
              </div>
            </div>
            <CTAForm />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
