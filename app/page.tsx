'use client'
import { useState } from 'react'

const FEATURES = [
  { icon: '🤝', title: 'Referral Tracking', desc: 'Log every introduction and referral. Track status from first contact to closed business. See exactly who is sending you revenue.' },
  { icon: '✉️', title: 'Smart Message Writer', desc: 'Generate personalized follow-ups, reconnect messages, thank you notes, and introduction emails in seconds — written in your voice.' },
  { icon: '🧭', title: 'Relationship Coach', desc: 'Your personal networking strategist. Get guidance on follow-up timing, referral strategy, and how to grow your most valuable partnerships.' },
  { icon: '📷', title: 'Business Card Scanner', desc: 'Scan any business card with your phone camera. Contact info is extracted and saved instantly — no typing required.' },
  { icon: '📋', title: 'Relationship Intelligence', desc: 'Rich contact profiles with business info, personal notes, interests, and conversation starters — everything you need to build real relationships.' },
  { icon: '📱', title: 'Mobile First', desc: 'Built for professionals on the go. Use it at networking events, chamber meetings, and coffee chats right from your phone.' },
]

const STEPS = [
  { number: '01', title: 'Build your referral network', desc: 'Scan a business card or add contacts from your network. Build rich profiles with everything you need to nurture relationships that actually send business.' },
  { number: '02', title: 'Stay consistent', desc: 'After every meeting, coffee, or call — log what was discussed and set a next step. Never let a valuable relationship go cold again.' },
  { number: '03', title: 'Communicate with confidence', desc: 'Select a contact, pick a message type, and get a personalized follow-up written for you. Send via email or text in one tap.' },
  { number: '04', title: 'Track what matters', desc: 'Log every referral and introduction. Watch your referral network grow and see who your most valuable partners are.' },
]

const PLANS = [
  {
    name: 'Free',
    price: '0',
    period: 'forever',
    description: 'Try it out with no commitment',
    features: ['Up to 25 contacts', 'Basic interaction logging', 'Tasks & follow-ups', 'Manual message writing'],
    cta: 'Get started free',
    highlight: false,
  },
  {
    name: 'Solo',
    price: '19',
    period: 'per month',
    description: 'For solo professionals',
    features: ['Up to 150 contacts', '✉️ Smart message writer', '📷 Business card scanner', 'Referral tracking', '📧 Email & SMS sending', 'Everything in Free'],
    cta: 'Get early access',
    highlight: false,
  },
  {
    name: 'Pro',
    price: '39',
    period: 'per month',
    description: 'For active networkers',
    features: ['Unlimited contacts', '🧭 Relationship coach', 'Introduction tracking', 'Relationship scoring', 'Weekly prep wizard', 'Everything in Solo'],
    cta: 'Get early access',
    highlight: true,
    badge: 'Most popular',
  },
  {
    name: 'Team',
    price: '79',
    period: 'per month',
    description: 'For small teams',
    features: ['Up to 5 team members', 'Shared contact network', 'Internal messaging', 'Team referral tracking', 'Everything in Pro'],
    cta: 'Get early access',
    highlight: false,
  },
]

const FAQS = [
  { q: 'Who is ReciProX for?', a: 'ReciProX is built for any service professional who grows their business through referrals — realtors, insurance agents, mortgage brokers, financial advisors, attorneys, CPAs, IT consultants, contractors, coaches, healthcare providers, recruiters, marketing agencies, and anyone else whose best clients come from trusted introductions.' },
  { q: 'How is ReciProX different from a regular CRM?', a: 'Most CRMs are built for sales pipelines and deals. ReciProX is built specifically for referral relationships — tracking introductions, logging interactions, measuring reciprocity, and helping you nurture the partnerships that generate the most revenue.' },
  { q: 'Do I need to be technical to use it?', a: 'Not at all. ReciProX is designed to be simple and mobile-first. If you can use your phone, you can use ReciProX.' },
  { q: 'Can I use it on my phone?', a: 'Yes — ReciProX is mobile-first. You can scan business cards, log interactions, and send personalized messages right from your phone at networking events. You can even install it on your home screen like a native app.' },
  { q: 'Is there a free trial?', a: 'Yes — our Free plan is free forever with up to 25 contacts. No credit card required.' },
  { q: 'When will paid plans be available?', a: 'We are currently in early access. Sign up now to get notified when paid plans launch and lock in early adopter pricing.' },
  { q: 'How is this different from LinkedIn?', a: 'LinkedIn helps you connect with people. ReciProX helps you turn those connections into a referral engine — tracking who sends business, managing introductions, and keeping relationships warm so opportunities never fall through the cracks.' },
]

const PROBLEMS = [
  'Referrals get forgotten after networking events',
  'No system to track who sends you business',
  'Relationships fade when you stop following up',
  'No accountability for reciprocity',
  'You rely on memory instead of a system',
]

const SOLUTIONS = [
  'Every referral tracked from introduction to closed deal',
  'See exactly which partners generate the most revenue',
  'Never let a relationship go cold with smart follow-up reminders',
  'Measure reciprocity and strengthen your best partnerships',
  'A complete system that works while you focus on relationships',
]

export default function HomePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSubmitted(true)
    setEmail('')
  }

  return (
    <div style={{ color: 'var(--brand-indigo)' }}>

      {/* Nav */}
      <nav className="flex items-center justify-between px-6 py-4 max-w-6xl mx-auto">
        <div style={{ display: 'flex', alignItems: 'baseline', gap: '0px' }}>
          <span className="text-xl font-normal" style={{ color: 'rgba(45,27,105,0.45)' }}>Reci</span>
          <span className="text-xl font-bold" style={{ color: 'var(--brand-indigo)' }}>Pro</span>
          <span className="text-xl font-bold" style={{ color: 'var(--brand-amber)' }}>X</span>
        </div>
        <div className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-sm" style={{ color: 'rgba(45,27,105,0.6)' }}>Features</a>
          <a href="#how-it-works" className="text-sm" style={{ color: 'rgba(45,27,105,0.6)' }}>How it works</a>
          <a href="#pricing" className="text-sm" style={{ color: 'rgba(45,27,105,0.6)' }}>Pricing</a>
        </div>
        <a href="https://reciprox.app/signup" className="px-4 py-2 rounded-lg text-sm font-medium text-white" style={{ background: 'var(--brand-indigo)' }}>
          Get early access
        </a>
      </nav>

      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 py-20 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium mb-6" style={{ background: 'var(--brand-amber-light)', color: 'var(--brand-indigo)' }}>
          🚀 Now in early access
        </div>
        <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight" style={{ color: 'var(--brand-indigo)' }}>
          Turn your network into<br/>
          <span style={{ color: 'var(--brand-amber)' }}>a referral engine.</span>
        </h1>
        <p className="text-xl mb-4 max-w-2xl mx-auto" style={{ color: 'rgba(45,27,105,0.6)' }}>
          Most businesses rely on referrals but have no system to track or grow them. ReciProX gives you the operating system for your referral relationships.
        </p>
        <p className="text-base mb-10" style={{ color: 'rgba(45,27,105,0.5)' }}>
          Built for service professionals across every industry — because the best clients come from people who know, like, and trust you.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a href="https://reciprox.app/signup" className="px-8 py-3.5 rounded-xl text-base font-medium text-white" style={{ background: 'var(--brand-indigo)' }}>
            Start free — no credit card
          </a>
          <a href="#how-it-works" className="px-8 py-3.5 rounded-xl text-base font-medium" style={{ border: '1px solid #e0ddf5', color: 'var(--brand-indigo)' }}>
            See how it works
          </a>
        </div>
        <p className="text-xs mt-4" style={{ color: 'rgba(45,27,105,0.4)' }}>Free plan available · No credit card required · Cancel anytime</p>
      </section>

      {/* Social proof bar */}
      <section className="py-8 px-6" style={{ background: 'var(--brand-surface)' }}>
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm mb-6" style={{ color: 'rgba(45,27,105,0.5)' }}>Built for professionals who grow through referrals</p>
          <div className="flex flex-wrap justify-center gap-3">
            {['Realtors', 'Insurance Agents', 'Mortgage Brokers', 'Financial Advisors', 'IT Professionals', 'Business Consultants', 'Attorneys', 'CPAs & Accountants', 'Contractors & Builders', 'Wealth Managers', 'HR Professionals', 'Marketing Agencies', 'Coaches & Trainers', 'Healthcare Providers', 'Staffing & Recruiters'].map(type => (
              <span key={type} className="text-sm px-4 py-2 rounded-full" style={{ background: 'white', color: 'var(--brand-indigo)', border: '0.5px solid #e0ddf5' }}>{type}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Problem / Solution */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: 'var(--brand-indigo)' }}>Referrals shouldn't rely on memory</h2>
          <p className="text-lg" style={{ color: 'rgba(45,27,105,0.6)' }}>Most networking professionals leave money on the table every week — not because they lack relationships, but because they lack a system.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-2xl p-6" style={{ border: '0.5px solid #e0ddf5' }}>
            <h3 className="text-base font-semibold mb-4" style={{ color: 'rgba(45,27,105,0.5)' }}>❌ Without ReciProX</h3>
            <div className="space-y-3">
              {PROBLEMS.map((p, i) => (
                <div key={i} className="flex items-start gap-3 text-sm" style={{ color: 'rgba(45,27,105,0.6)' }}>
                  <span className="flex-shrink-0 mt-0.5" style={{ color: '#993C1D' }}>✗</span>{p}
                </div>
              ))}
            </div>
          </div>
          <div className="bg-white rounded-2xl p-6" style={{ border: '1.5px solid var(--brand-amber)' }}>
            <h3 className="text-base font-semibold mb-4" style={{ color: 'var(--brand-indigo)' }}>✅ With ReciProX</h3>
            <div className="space-y-3">
              {SOLUTIONS.map((s, i) => (
                <div key={i} className="flex items-start gap-3 text-sm" style={{ color: 'var(--brand-indigo)' }}>
                  <span className="flex-shrink-0 mt-0.5" style={{ color: '#27500A' }}>✓</span>{s}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="max-w-6xl mx-auto px-6 py-20" style={{ background: 'var(--brand-surface)' }}>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: 'var(--brand-indigo)' }}>Everything you need to grow through referrals</h2>
          <p className="text-lg" style={{ color: 'rgba(45,27,105,0.6)' }}>ReciProX combines relationship intelligence with powerful tools to help you nurture your network and generate more referrals.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {FEATURES.map(f => (
            <div key={f.title} className="bg-white rounded-2xl p-6" style={{ border: '0.5px solid #e0ddf5' }}>
              <div className="text-3xl mb-4">{f.icon}</div>
              <h3 className="text-base font-semibold mb-2" style={{ color: 'var(--brand-indigo)' }}>{f.title}</h3>
              <p className="text-sm" style={{ color: 'rgba(45,27,105,0.6)' }}>{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: 'var(--brand-indigo)' }}>How it works</h2>
            <p className="text-lg" style={{ color: 'rgba(45,27,105,0.6)' }}>From first meeting to trusted referral partner in four simple steps.</p>
          </div>
          <div className="space-y-6">
            {STEPS.map(step => (
              <div key={step.number} className="bg-white rounded-2xl p-6 flex gap-6 items-start" style={{ border: '0.5px solid #e0ddf5' }}>
                <div className="text-3xl font-bold flex-shrink-0" style={{ color: 'var(--brand-amber)' }}>{step.number}</div>
                <div>
                  <h3 className="text-base font-semibold mb-1" style={{ color: 'var(--brand-indigo)' }}>{step.title}</h3>
                  <p className="text-sm" style={{ color: 'rgba(45,27,105,0.6)' }}>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="max-w-6xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: 'var(--brand-indigo)' }}>Simple, transparent pricing</h2>
          <p className="text-lg" style={{ color: 'rgba(45,27,105,0.6)' }}>Start free. Upgrade when you're ready. Cancel anytime.</p>
        </div>
        <div className="grid md:grid-cols-4 gap-4">
          {PLANS.map(plan => (
            <div key={plan.name} className="bg-white rounded-2xl p-6 flex flex-col relative" style={{ border: plan.highlight ? '2px solid var(--brand-amber)' : '0.5px solid #e0ddf5' }}>
              {plan.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full text-xs font-medium text-white" style={{ background: 'var(--brand-amber)' }}>{plan.badge}</div>
              )}
              <div className="mb-4">
                <h3 className="text-base font-bold mb-1" style={{ color: 'var(--brand-indigo)' }}>{plan.name}</h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl font-bold" style={{ color: 'var(--brand-indigo)' }}>${plan.price}</span>
                  <span className="text-xs" style={{ color: 'rgba(45,27,105,0.5)' }}>/{plan.period}</span>
                </div>
                <p className="text-xs mt-1" style={{ color: 'rgba(45,27,105,0.5)' }}>{plan.description}</p>
              </div>
              <ul className="space-y-2 flex-1 mb-6">
                {plan.features.map(f => (
                  <li key={f} className="text-sm flex items-start gap-2" style={{ color: 'rgba(45,27,105,0.7)' }}>
                    <span style={{ color: 'var(--brand-amber)' }}>✓</span>{f}
                  </li>
                ))}
              </ul>
              <a href="https://reciprox.app/signup" className="w-full py-2.5 rounded-lg text-sm font-medium text-center block" style={{ background: plan.highlight ? 'var(--brand-indigo)' : 'var(--brand-indigo-light)', color: plan.highlight ? 'white' : 'var(--brand-indigo)' }}>
                {plan.cta}
              </a>
            </div>
          ))}
        </div>
        <p className="text-center text-sm mt-6" style={{ color: 'rgba(45,27,105,0.5)' }}>Save 2 months with annual billing · All plans include a 14-day free trial</p>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-6" style={{ background: 'var(--brand-surface)' }}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4" style={{ color: 'var(--brand-indigo)' }}>Built for the way you actually network</h2>
          <p className="text-lg mb-12" style={{ color: 'rgba(45,27,105,0.6)' }}>ReciProX is designed around how referral-driven professionals actually work.</p>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { quote: 'I used to track my referrals in a spreadsheet. ReciProX finally gives me a tool that actually understands how relationship-based business works.', name: 'Early Access User', role: 'Insurance Agent' },
              { quote: 'The message writer alone is worth it. I used to spend 20 minutes writing a follow-up. Now it takes 20 seconds and it sounds exactly like me.', name: 'Early Access User', role: 'Mortgage Broker' },
              { quote: 'Scanning business cards at events and having the contact ready to follow up in the app is a game changer. This is the tool I always wished existed.', name: 'Early Access User', role: 'Business Consultant' },
            ].map((t, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 text-left" style={{ border: '0.5px solid #e0ddf5' }}>
                <p className="text-sm mb-4" style={{ color: 'rgba(45,27,105,0.7)', lineHeight: '1.6' }}>"{t.quote}"</p>
                <div>
                  <div className="text-sm font-medium" style={{ color: 'var(--brand-indigo)' }}>{t.name}</div>
                  <div className="text-xs" style={{ color: 'rgba(45,27,105,0.5)' }}>{t.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-3xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4" style={{ color: 'var(--brand-indigo)' }}>Frequently asked questions</h2>
        </div>
        <div className="space-y-3">
          {FAQS.map((faq, i) => (
            <div key={i} className="bg-white rounded-2xl overflow-hidden" style={{ border: '0.5px solid #e0ddf5' }}>
              <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full flex items-center justify-between px-6 py-4 text-left">
                <span className="text-sm font-medium" style={{ color: 'var(--brand-indigo)' }}>{faq.q}</span>
                <span className="text-xs ml-4 flex-shrink-0" style={{ color: 'rgba(45,27,105,0.4)', transform: openFaq === i ? 'rotate(180deg)' : 'rotate(0deg)', display: 'inline-block', transition: 'transform 0.2s' }}>▼</span>
              </button>
              {openFaq === i && (
                <div className="px-6 pb-4">
                  <p className="text-sm" style={{ color: 'rgba(45,27,105,0.6)', lineHeight: '1.6' }}>{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6" style={{ background: 'var(--brand-indigo)' }}>
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Build a network that actually sends business.</h2>
          <p className="text-lg mb-8" style={{ color: 'rgba(255,255,255,0.7)' }}>Join professionals already using ReciProX to track referrals, strengthen partnerships, and grow their business through trusted introductions.</p>
          {submitted ? (
            <div className="px-6 py-4 rounded-xl text-base font-medium" style={{ background: 'var(--brand-amber)', color: 'white' }}>
              You are on the list! We will be in touch soon.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="flex-1 px-4 py-3 rounded-xl text-sm focus:outline-none"
                style={{ background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)', color: 'white' }}
              />
              <button type="submit" className="px-6 py-3 rounded-xl text-sm font-medium" style={{ background: 'var(--brand-amber)', color: 'white' }}>
                Get early access
              </button>
            </form>
          )}
          <p className="text-xs mt-4" style={{ color: 'rgba(255,255,255,0.4)' }}>No spam. No credit card. Just early access.</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-10" style={{ background: 'var(--brand-dark)' }}>
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div style={{ display: 'flex', alignItems: 'baseline' }}>
            <span className="text-lg font-normal" style={{ color: 'rgba(255,255,255,0.35)' }}>Reci</span>
            <span className="text-lg font-bold text-white">Pro</span>
            <span className="text-lg font-bold" style={{ color: 'var(--brand-amber)' }}>X</span>
          </div>
          <p className="text-xs" style={{ color: 'rgba(255,255,255,0.3)' }}>© 2026 ReciProX. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="https://reciprox.app" className="text-xs" style={{ color: 'rgba(255,255,255,0.4)' }}>Launch app</a>
            <a href="mailto:hello@reciprox.com" className="text-xs" style={{ color: 'rgba(255,255,255,0.4)' }}>Contact</a>
          </div>
        </div>
      </footer>

    </div>
  )
}