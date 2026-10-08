'use client'

import { useState } from 'react'
import { ArrowDown, ArrowUpRight, ChevronLeft, ChevronRight, Flower2, X } from 'lucide-react'

const memories = [
  { src: '/photos/us-smiling.jpg', alt: 'Shailu hugging me from behind, both of us smiling', caption: 'The beginning', position: 'center 62%' },
  { src: '/photos/mirror-hug.jpg', alt: 'A mirror selfie of us hugging', caption: 'Everything in between', position: 'center 55%' },
  { src: '/photos/shailu-garden.jpg', alt: 'Shailu smiling among the plants', caption: 'A moment worth keeping', position: 'center 35%' },
  { src: '/photos/birthday-rose.jpg', alt: 'Shailu holding a rose bouquet beside a birthday plate', caption: 'The first flower', position: 'center 45%' },
  { src: '/photos/crochet-rose.jpg', alt: 'A red crochet rose held between our hands', caption: 'Little things', position: 'center 55%' },
  { src: '/photos/cheek-kiss.jpg', alt: 'Shailu kissing my cheek', caption: 'Our first month', position: 'center 60%' },
  { src: '/photos/milkshakes.jpg', alt: 'Shailu smiling behind two milkshakes, in black and white', caption: 'Still becoming us', position: 'center 30%' },
  { src: '/photos/cozy-hug.jpg', alt: 'Me kissing Shailu on the cheek while we hug', caption: 'A thousand little moments', position: 'center 40%' },
]

const timeline = [
  ['01', 'The Beginning', 'Where this little story started.'],
  ['02', 'Our First Month', 'A month that already feels full.'],
  ['03', 'My Birthday', 'A day made unexpectedly memorable.'],
  ['04', 'The First Flower', 'A small gift, a forever memory.'],
  ['05', 'Everything In Between', 'The ordinary moments that became ours.'],
]

export default function Page() {
  const [selected, setSelected] = useState<number | null>(null)

  const moveLightbox = (direction: number) => {
    if (selected === null) return
    setSelected((selected + direction + memories.length) % memories.length)
  }

  return (
    <main className="site-shell">
      <div className="ambient ambient-one" aria-hidden="true" />
      <div className="ambient ambient-two" aria-hidden="true" />
      <header className="topbar">
        <a className="wordmark" href="#top" aria-label="Back to top">us<span>.</span></a>
        <nav aria-label="Primary navigation">
          <a href="#story">Our story</a>
          <a href="#memories">Memories</a>
          <a href="#timeline">Timeline</a>
        </nav>
        <span className="date-mark">01 / 05 / 24</span>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy reveal">
          <p className="eyebrow">A little archive of us <span className="eyebrow-line" /></p>
          <h1>One month.<br /><em>A thousand</em><br />little moments.</h1>
          <p className="hero-subtitle">One month of us — and somehow, so many memories already.</p>
          <a className="scroll-cue" href="#story"><span>Scroll to explore</span><ArrowDown aria-hidden="true" /></a>
        </div>
        <button className="hero-image" onClick={() => setSelected(0)} aria-label="Open first memory">
          <img src={memories[0].src} alt={memories[0].alt} style={{ objectPosition: memories[0].position }} />
          <span className="image-note">01 <i /> the beginning</span>
        </button>
        <div className="hero-stamp" aria-hidden="true">one<br />month</div>
      </section>

      <section className="story-section section-grid" id="story">
        <div className="section-index">01 <span /></div>
        <div className="section-heading"><p className="eyebrow">Our first month</p><h2>It&apos;s only been a month, but it already feels like a collection of moments I&apos;ll always want to remember.</h2></div>
        <div className="story-copy"><p>Somehow, the days have gathered into something that feels bigger than time. The small conversations, the familiar laughs, the quiet in-between — all of it has started to feel like ours.</p><p className="signature">— with love, always</p></div>
      </section>

      <section className="birthday-section section-grid">
        <div className="birthday-image-wrap"><img src={memories[3].src} alt={memories[3].alt} style={{ objectPosition: memories[3].position }} /><div className="flower-mark"><Flower2 aria-hidden="true" /><span>for you</span></div></div>
        <div className="birthday-copy"><p className="eyebrow">A birthday memory</p><h2>You made an ordinary day feel unforgettable.</h2><p>The way you celebrated my birthday made it one of the most memorable birthdays I&apos;ve had. In 23 years of my life, the first flower I ever received was from you — on my birthday.</p><blockquote>“Somehow, that little flower became one of the biggest memories.”</blockquote></div>
      </section>

      <section className="gallery-section" id="memories">
        <div className="gallery-intro section-grid"><div className="section-index">02 <span /></div><div><p className="eyebrow">The memory book</p><h2>Little scenes<br /><em>we keep.</em></h2></div><p className="gallery-lede">A few glimpses from the first chapter — tap any photo to see it whole.</p></div>
        <div className="gallery-grid">{memories.map((memory, index) => <button key={memory.src} className={`gallery-card card-${index + 1}`} onClick={() => setSelected(index)} aria-label={`Open memory: ${memory.caption}`}><img src={memory.src} alt={memory.alt} loading="lazy" style={{ objectPosition: memory.position }} /><span>{String(index + 1).padStart(2, '0')} / {memory.caption}</span></button>)}</div>
      </section>

      <section className="little-things"><div className="section-index">03 <span /></div><p className="eyebrow">The little things</p><div className="lines"><p>One month, countless little moments.</p><p>Some memories become special without asking them to.</p><p>The smallest gestures somehow stay the longest.</p><p>Here&apos;s to the moments we didn&apos;t know we&apos;d remember.</p></div></section>

      <section className="timeline-section" id="timeline"><div className="timeline-heading"><p className="eyebrow">A small timeline</p><h2>Then, now,<br /><em>and all between.</em></h2></div><div className="timeline">{timeline.map(([number, title, description]) => <div className="timeline-item" key={number}><span className="timeline-number">{number}</span><div><h3>{title}</h3><p>{description}</p></div></div>)}</div></section>

      <footer className="closing"><p className="eyebrow">Chapter one / complete</p><h2>One month down.<br /><em>Many more moments</em><br />waiting to become memories.</h2><p className="closing-note">Happy one month to us. <span aria-label="heart">♥</span></p><div className="closing-glow" aria-hidden="true" /></footer>

      {selected !== null && <div className="lightbox" role="dialog" aria-modal="true" aria-label="Memory viewer" onClick={() => setSelected(null)}><button className="lightbox-close" onClick={() => setSelected(null)} aria-label="Close memory viewer"><X aria-hidden="true" /></button><button className="lightbox-arrow left" onClick={(event) => { event.stopPropagation(); moveLightbox(-1) }} aria-label="Previous memory"><ChevronLeft aria-hidden="true" /></button><figure onClick={(event) => event.stopPropagation()}><img src={memories[selected].src} alt={memories[selected].alt} /><figcaption>{memories[selected].caption}<span>{String(selected + 1).padStart(2, '0')} / 0{memories.length}</span></figcaption></figure><button className="lightbox-arrow right" onClick={(event) => { event.stopPropagation(); moveLightbox(1) }} aria-label="Next memory"><ChevronRight aria-hidden="true" /></button></div>}
    </main>
  )
}
