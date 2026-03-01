'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';

/* ─── Types ─────────────────────────────────────────────── */
interface Message {
  id: number;
  from: 'bot' | 'user';
  text: string;
  links?: { label: string; href: string }[];
  chips?: string[];
}

/* ─── Knowledge Base ─────────────────────────────────────── */
const KB: { pattern: RegExp; answer: string; links?: { label: string; href: string }[]; chips?: string[] }[] = [
  {
    pattern: /\b(hi|hello|hey|good morning|good afternoon|howdy|hiya)\b/i,
    answer: "Hello! I'm Aria, your Prestige Homes advisor. I can help you explore our communities, floor plans, pricing, and more. What can I help you with today?",
    chips: ['View Communities', 'Browse Floor Plans', 'Hot Homes', 'Contact an Advisor'],
  },
  {
    pattern: /\b(community|communities|neighborhood|area|location|where|city|cities|region)\b/i,
    answer: "We have 12 outstanding communities across Texas:\n\n• **Oakridge Estates** – Austin, TX ($620s–$1.1M)\n• **Lakeville Shores** – Lake Travis, TX ($780s–$1.4M)\n• **Maplewood Reserve** – Dallas, TX ($540s–$890K)\n• **Riverview Heights** – Houston, TX ($490s–$820K)\n• **Cedar Glen** – San Antonio, TX ($460s–$740K)\n• **Pinnacle Ridge** – Frisco, TX ($680s–$1.2M)\n\nWould you like details on a specific community?",
    links: [{ label: 'See All Communities →', href: '/communities' }],
    chips: ['Austin homes', 'Dallas homes', 'Houston homes', 'Frisco homes'],
  },
  {
    pattern: /\bausti(n)?\b/i,
    answer: "Our Austin flagship is **Oakridge Estates** in the Texas Hill Country — a gated sanctuary with panoramic views, resort amenities, and top-rated schools. Homes range from $620s to $1.1M with 4–5 bedrooms and 2,400–4,800 sq ft.\n\nWould you like to schedule a tour?",
    links: [{ label: 'View Oakridge Estates →', href: '/communities' }],
    chips: ['Schedule a tour', 'See floor plans', 'Contact us'],
  },
  {
    pattern: /\b(dallas|plano|frisco)\b/i,
    answer: "In the Dallas metro we have two communities:\n\n• **Maplewood Reserve** – Plano/Dallas, TX ($540s–$890K) — thoughtful urban design, walkable\n• **Pinnacle Ridge** – Frisco, TX ($680s–$1.2M) — our most ambitious community, award-winning schools\n\nInterested in a specific one?",
    links: [{ label: 'Explore Dallas Communities →', href: '/communities' }],
    chips: ['Maplewood Reserve', 'Pinnacle Ridge', 'Schedule a visit'],
  },
  {
    pattern: /\bhouston\b/i,
    answer: "**Riverview Heights** is our Houston community — a 120-homesite master-planned development with energy-efficient construction, smart home integration, and an 8-acre central park. Homes start in the $490s.",
    links: [{ label: 'Riverview Heights →', href: '/communities' }],
    chips: ['Pricing info', 'Floor plans', 'Contact us'],
  },
  {
    pattern: /\b(floor plan|floorplan|plan|layout|model|bedroom|bath)\b/i,
    answer: "We offer 6 award-winning floor plans:\n\n• **The Ashford** – 4bd/3.5ba, 3,200 sq ft, from $620s ⭐ Most Popular\n• **The Worthington** – 5bd/4ba, 4,100 sq ft, from $780s\n• **The Meridian** – 3bd/2.5ba, 2,400 sq ft, from $490s\n• **The Harrington** – 4bd/3ba, 3,600 sq ft, from $680s 🏆\n• **The Summit** – 5bd/4.5ba, 4,800 sq ft, from $920s\n• **The Laurel** – 3bd/2ba, 1,980 sq ft, from $420s\n\nAll plans are fully customizable in our Design Studio.",
    links: [{ label: 'Browse All Floor Plans →', href: '/floor-plans' }],
    chips: ['3-bedroom plans', '4-bedroom plans', '5-bedroom plans', 'Custom design'],
  },
  {
    pattern: /\b(3\s*bed|3\s*bedroom|three\s*bed)\b/i,
    answer: "Our 3-bedroom plans are perfect for growing families or those who prefer thoughtful, right-sized living:\n\n• **The Meridian** – 3bd/2.5ba, 2,400 sq ft, from **$490s** (Contemporary)\n• **The Laurel** – 3bd/2ba, 1,980 sq ft, from **$420s** (Modern Farmhouse)\n\nBoth include our premium standard spec — quartz countertops, hardwood floors, smart home pre-wire.",
    links: [{ label: 'View Floor Plans →', href: '/floor-plans' }],
    chips: ['Schedule Design Studio visit', 'Get Info on The Meridian', 'Get Info on The Laurel'],
  },
  {
    pattern: /\b(4\s*bed|4\s*bedroom|four\s*bed)\b/i,
    answer: "Our most popular 4-bedroom plans:\n\n• **The Ashford** – 4bd/3.5ba, 3,200 sq ft, from **$620s** ⭐ Most Popular\n• **The Harrington** – 4bd/3ba, 3,600 sq ft, from **$680s** 🏆 Award Winner\n\nThe Ashford features a gourmet island kitchen and primary suite on the main floor. The Harrington is a Hill Country showpiece with a vaulted great room.",
    links: [{ label: 'View Floor Plans →', href: '/floor-plans' }],
    chips: ['Tell me about The Ashford', 'Tell me about The Harrington', 'Contact an advisor'],
  },
  {
    pattern: /\b(5\s*bed|5\s*bedroom|five\s*bed|large|biggest|biggest)\b/i,
    answer: "Our grandest 5-bedroom plans:\n\n• **The Worthington** – 5bd/4ba, 4,100 sq ft, from **$780s**\n• **The Summit** – 5bd/4.5ba, 4,800 sq ft, from **$920s** 👑 Editor's Pick\n\nThe Summit is our crown jewel — featuring a butler's pantry, wet bar, wine cellar option, private guest suite, and 3-car courtyard garage.",
    links: [{ label: 'View Floor Plans →', href: '/floor-plans' }],
    chips: ['Schedule a consultation', 'Contact an advisor'],
  },
  {
    pattern: /\b(hot home|move.?in ready|available|ready now|quick move|spec home)\b/i,
    answer: "We have several 🔥 Hot Homes ready for quick move-in across Texas:\n\n• The Ashford – Oakridge Estates, Austin **$689,900** (Move-In Ready)\n• The Harrington – Riverview Heights, Houston **$598,000** 🔥 Hot\n• The Summit – Pinnacle Ridge, Frisco **$978,000** 🔥 Hot\n• The Laurel – Cedar Glen, San Antonio **$467,900** (Move-In Ready)\n\nThese go fast! Would you like to schedule a showing?",
    links: [{ label: 'See All Hot Homes →', href: '/available-homes' }],
    chips: ['Schedule a showing', 'Contact an advisor', 'Browse more'],
  },
  {
    pattern: /\b(price|pricing|cost|how much|afford|budget|start(ing)?)\b/i,
    answer: "Our homes are priced to reflect their exceptional quality:\n\n• **Entry luxury:** From $420s (The Laurel)\n• **Mid range:** $490s–$690s (Meridian, Ashford, Harrington)\n• **Premium:** $780s–$1.4M (Worthington, Summit, Lakeville Shores)\n\nAll prices include our premium standard spec — significantly above the industry baseline. What's your target budget range?",
    links: [{ label: 'Browse Floor Plans & Pricing →', href: '/floor-plans' }],
    chips: ['Homes under $600K', 'Homes $600K–$900K', 'Over $900K', 'Financing options'],
  },
  {
    pattern: /\b(financ|lend|mortgage|loan|down payment)\b/i,
    answer: "We partner with several Texas-based preferred lenders who offer:\n\n✓ Competitive rates for new construction\n✓ Construction-to-permanent loan programs\n✓ Pre-approval assistance\n✓ Rate lock options during the build period\n\nOur Home Advisors can connect you with the right lender for your situation at no cost. Would you like us to reach out?",
    links: [{ label: 'Contact an Advisor →', href: '/contact' }],
    chips: ['Connect me with a lender', 'Learn about our process'],
  },
  {
    pattern: /\b(process|how long|timeline|how does it work|steps|build time)\b/i,
    answer: "Our 6-step process is designed to be transparent and stress-free:\n\n**1. Discovery** (1–2 wks) – Vision & community selection\n**2. Design Studio** (2–4 wks) – 12,000 sq ft studio, 1000s of selections\n**3. Pre-Construction** (3–4 wks) – Plans, permits, scheduling\n**4. Build** (6–10 months) – Weekly updates from your PM\n**5. QA & Inspection** (2–3 wks) – Thorough pre-move-in review\n**6. Keys & Warranty** – 1-year workmanship + 10-year structural\n\nTotal time: typically 9–14 months from contract to keys.",
    links: [{ label: 'Explore Our Full Process →', href: '/process' }],
    chips: ['Design Studio details', 'Warranty info', 'Contact an advisor'],
  },
  {
    pattern: /\b(design studio|selections|finishes|interior|customize|custom)\b/i,
    answer: "Our **12,000 sq ft Design Studio** in Austin is where your home truly comes to life. You'll work one-on-one with a senior designer to select:\n\n🪵 Flooring, cabinetry & countertops\n🚿 Plumbing fixtures & tile\n🔌 Lighting & electrical\n🏠 Exterior elevations & landscaping options\n\nWe also offer 3D visualization so you can see your choices before anything is installed. No appointment needed on Saturdays!",
    links: [{ label: 'Schedule a Studio Visit →', href: '/contact' }],
    chips: ['What is included standard?', 'Schedule a visit', 'Tell me about the process'],
  },
  {
    pattern: /\b(warranty|guarantee|defect|after.*clos|service)\b/i,
    answer: "Every Prestige Home is backed by one of the most comprehensive warranties in Texas:\n\n🛡️ **1 Year** – Full workmanship & materials\n🛡️ **2 Years** – Systems (HVAC, plumbing, electrical)\n🛡️ **10 Years** – Structural warranty\n\nAll warranties are administered through our in-house Warranty Service team — a dedicated contact you can call directly, not a third-party hotline.",
    links: [{ label: 'Learn More →', href: '/process' }],
    chips: ['Tell me about the process', 'Contact us'],
  },
  {
    pattern: /\b(award|recogni|best builder|voted|honor|accolade)\b/i,
    answer: "We're proud of our recognition:\n\n🏆 **2024** – Best Luxury Home Builder (Texas HBA)\n🏆 **2024** – Design Excellence Award (Austin AIA)\n🏆 **2023** – Green Builder of the Year\n🏆 **2023** – Customer Service Award (BuilderReviews.com)\n🏆 **2022** – Community Development of the Year (NAHB)\n\n5 consecutive years as Texas's #1 Luxury Builder.",
    links: [{ label: 'See Our Portfolio →', href: '/portfolio' }],
    chips: ['View our work', 'About us'],
  },
  {
    pattern: /\b(gallery|photo|picture|image|portfolio|see.*home|look.*home)\b/i,
    answer: "Our gallery showcases completed homes across all categories — exteriors, kitchens, living spaces, primary suites, and outdoor living areas. Every image is a real home we've built, not a rendering.",
    links: [{ label: 'Browse the Gallery →', href: '/gallery' }, { label: 'View Portfolio →', href: '/portfolio' }],
    chips: ['Tell me about floor plans', 'Contact an advisor'],
  },
  {
    pattern: /\b(about|company|history|founded|how long|who are you|story)\b/i,
    answer: "Prestige Homes was founded in **1998** by Robert Harrington with one conviction: luxury homebuilding should be personal, transparent, and held to the highest standard.\n\n25+ years later, we've built **500+ homes** across 12 Texas communities. What makes us different? Many of our team members own Prestige Homes — when you invest in what you build, the standard never slips.",
    links: [{ label: 'Our Full Story →', href: '/about' }],
    chips: ['Meet the team', 'View awards', 'Our process'],
  },
  {
    pattern: /\b(contact|call|phone|email|speak|talk|agent|advisor|human|person|real|reach)\b/i,
    answer: "Our Home Advisors are available Monday–Saturday 10am–6pm and respond within one business hour.\n\n📞 **(512) 441-8800** – Austin HQ\n✉️ **hello@prestigehomestx.com**\n\nOr submit a message and we'll reach out at your convenience.",
    links: [{ label: 'Contact Form →', href: '/contact' }],
    chips: ['Schedule a tour', 'Request a call back'],
  },
  {
    pattern: /\b(tour|visit|showroom|model home|open house|see.*in person)\b/i,
    answer: "We'd love to show you around! Our model homes and Design Studio are open:\n\n🕐 Monday–Saturday 10am–6pm\n🕐 Sunday 12pm–5pm\n🚶 Walk-ins welcome on Saturdays\n\nWe have model homes in Austin (Oakridge Estates), Dallas (Maplewood Reserve), and Frisco (Pinnacle Ridge). Which location works best for you?",
    links: [{ label: 'Schedule a Tour →', href: '/contact' }],
    chips: ['Austin tour', 'Dallas tour', 'Frisco tour'],
  },
  {
    pattern: /\b(sustainable|green|eco|energy|solar|efficiency)\b/i,
    answer: "Sustainability is built into every Prestige Home:\n\n🌿 Energy Star Certified construction\n🌿 High-efficiency HVAC systems standard\n🌿 Solar-ready electrical pre-wire\n🌿 LED lighting throughout\n🌿 Low-VOC paints and finishes\n🌿 Water-efficient plumbing fixtures\n\nWe're proud to be the 2023 **Green Builder of the Year** in Texas.",
    chips: ['Tell me about standard features', 'Browse floor plans'],
  },
  {
    pattern: /\b(smart home|tech|technology|automation|alexa|google|wifi|ring)\b/i,
    answer: "All Prestige Homes include our **Smart Living package** as standard:\n\n🏠 Full smart home pre-wire throughout\n🔒 Video doorbell & smart lock pre-wire\n📡 Distributed Wi-Fi access point locations\n💡 Smart lighting capability\n🌡️ Smart thermostat\n🎵 Whole-home audio pre-wire\n\nUpgrade options include full Control4 or Apple HomeKit integration.",
    chips: ['What else is included standard?', 'Browse floor plans'],
  },
  {
    pattern: /\b(standard|included|what.*get|spec(ification)?s?)\b/i,
    answer: "Our standard specification is where most builders' upgrade packages end:\n\n✅ Quartz countertops throughout\n✅ Hardwood flooring in main living areas\n✅ Tile in all wet areas\n✅ Smart home pre-wire\n✅ Energy Star HVAC\n✅ Stainless appliance package\n✅ Low-VOC paints\n✅ Landscape package\n✅ 2-car garage minimum\n\nNo 'base model' surprises.",
    links: [{ label: 'Browse Floor Plans →', href: '/floor-plans' }],
    chips: ['Upgrade options', 'Design Studio', 'Pricing'],
  },
  {
    pattern: /\b(thank|thanks|perfect|great|awesome|wonderful|helpful)\b/i,
    answer: "You're very welcome! It's my pleasure to help you find your perfect Prestige Home. Is there anything else I can assist you with?",
    chips: ['Browse communities', 'Browse floor plans', 'Contact an advisor'],
  },
  {
    pattern: /\b(bye|goodbye|see you|later|that.?s all|done|nothing else)\b/i,
    answer: "Thank you for chatting with Prestige Homes! Whenever you're ready to take the next step, we're here. Have a wonderful day! 🏡",
    chips: ['Browse our website', 'Contact us'],
  },
];

const FALLBACK: Message = {
  id: 0,
  from: 'bot',
  text: "That's a great question! For the most accurate answer, I'd recommend speaking directly with one of our Home Advisors — they can address any specific situation in detail.",
  links: [{ label: 'Contact an Advisor →', href: '/contact' }],
  chips: ['Communities', 'Floor Plans', 'Pricing', 'Our Process'],
};

function getResponse(input: string): Omit<Message, 'id' | 'from'> {
  const trimmed = input.trim();
  for (const rule of KB) {
    if (rule.pattern.test(trimmed)) {
      return { text: rule.answer, links: rule.links, chips: rule.chips };
    }
  }
  return { text: FALLBACK.text, links: FALLBACK.links, chips: FALLBACK.chips };
}

/* ─── Format bold **text** ─── */
function formatText(text: string) {
  return text.split('\n').map((line, i) => {
    const parts = line.split(/\*\*(.+?)\*\*/g);
    return (
      <React.Fragment key={i}>
        {parts.map((part, j) =>
          j % 2 === 1 ? <strong key={j}>{part}</strong> : part
        )}
        {i < text.split('\n').length - 1 && <br />}
      </React.Fragment>
    );
  });
}

const WELCOME: Message = {
  id: 1,
  from: 'bot',
  text: "👋 Hi! I'm **Aria**, your Prestige Homes advisor. I'm here to help you explore our communities, floor plans, pricing, and more.\n\nWhat can I help you with today?",
  chips: ['View Communities', 'Browse Floor Plans', '🔥 Hot Homes', 'Contact an Advisor'],
};

/* ─── Component ─────────────────────────────────────────── */
export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([WELCOME]);
  const [input, setInput] = useState('');
  const [typing, setTyping] = useState(false);
  const [unread, setUnread] = useState(0);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  let nextId = useRef(2);

  useEffect(() => {
    if (open) {
      setUnread(0);
      setTimeout(() => inputRef.current?.focus(), 150);
    }
  }, [open]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, typing]);

  function addUserMsg(text: string) {
    const userMsg: Message = { id: nextId.current++, from: 'user', text };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setTyping(true);

    setTimeout(() => {
      const resp = getResponse(text);
      const botMsg: Message = { id: nextId.current++, from: 'bot', ...resp };
      setTyping(false);
      setMessages(prev => [...prev, botMsg]);
      if (!open) setUnread(n => n + 1);
    }, 900 + Math.random() * 400);
  }

  function handleSend() {
    if (input.trim()) addUserMsg(input.trim());
  }

  function handleKey(e: React.KeyboardEvent) {
    if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); handleSend(); }
  }

  return (
    <>
      {/* Chat Panel */}
      <div className={`chat-panel${open ? ' chat-panel--open' : ''}`} aria-label="Chat with Prestige Homes">
        {/* Header */}
        <div className="chat-header">
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <div className="chat-avatar">A</div>
            <div>
              <p className="chat-agent-name">Aria</p>
              <p className="chat-agent-status"><span className="chat-online-dot" />Online — typically replies in &lt;1 min</p>
            </div>
          </div>
          <button className="chat-close-btn" onClick={() => setOpen(false)} aria-label="Close chat">✕</button>
        </div>

        {/* Messages */}
        <div className="chat-messages">
          {messages.map(msg => (
            <div key={msg.id} className={`chat-bubble-row${msg.from === 'user' ? ' chat-bubble-row--user' : ''}`}>
              {msg.from === 'bot' && <div className="chat-avatar chat-avatar--sm">A</div>}
              <div>
                <div className={`chat-bubble ${msg.from === 'bot' ? 'chat-bubble--bot' : 'chat-bubble--user'}`}>
                  {formatText(msg.text)}
                </div>
                {msg.links && msg.links.length > 0 && (
                  <div className="chat-links">
                    {msg.links.map(l => (
                      <Link key={l.href + l.label} href={l.href} className="chat-link" onClick={() => setOpen(false)}>
                        {l.label}
                      </Link>
                    ))}
                  </div>
                )}
                {msg.chips && msg.chips.length > 0 && (
                  <div className="chat-chips">
                    {msg.chips.map(c => (
                      <button key={c} className="chat-chip" onClick={() => addUserMsg(c)}>{c}</button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}

          {typing && (
            <div className="chat-bubble-row">
              <div className="chat-avatar chat-avatar--sm">A</div>
              <div className="chat-bubble chat-bubble--bot chat-typing">
                <span /><span /><span />
              </div>
            </div>
          )}
          <div ref={bottomRef} />
        </div>

        {/* Input */}
        <div className="chat-input-row">
          <input
            ref={inputRef}
            className="chat-input"
            placeholder="Ask anything about our homes…"
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyDown={handleKey}
            maxLength={300}
          />
          <button className="chat-send-btn" onClick={handleSend} disabled={!input.trim()} aria-label="Send">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
            </svg>
          </button>
        </div>
        <p className="chat-footer-note">Powered by Prestige Homes · <Link href="/contact" onClick={() => setOpen(false)}>Talk to a real advisor</Link></p>
      </div>

      {/* Floating Toggle Button */}
      <button className="floating-chat" onClick={() => setOpen(o => !o)} aria-label="Chat with us">
        {open ? (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" /></svg>
        ) : (
          <>
            💬&nbsp;Chat with Us
            {unread > 0 && <span className="chat-unread-badge">{unread}</span>}
          </>
        )}
      </button>
    </>
  );
}
