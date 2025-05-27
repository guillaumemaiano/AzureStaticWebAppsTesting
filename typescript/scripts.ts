import 'semantic-ui-css/components/tab';
import 'jquery';

const $ = (window as any).$;

document.addEventListener('DOMContentLoaded', () => {
  ($('.ui.menu .item') as any).tab();

  ;((): void => {
    const el   = document.getElementById('wrenchfall')!
    const sect = document.getElementById('projects')!
    const updateClip = (): void => {
      const rect = sect.getBoundingClientRect()
      const h    = window.innerHeight
      let   pct  = (h - rect.top) / (rect.height + h)
      pct = Math.min(Math.max(pct, 0), 1)
      const tTop = pct <= 0.5 ? pct * 2 * 100 : 100
      const tBot = pct <= 0.5 ? 0           : (pct - 0.5) * 2 * 100
      el.style.clipPath = `polygon(${tTop}% 0,100% 0,100% 100%,${tBot}% 100%)`
    }
    window.addEventListener('scroll', updateClip, { passive: true })
    window.addEventListener('resize', updateClip)
    updateClip()
  })()

  const sections = Array.from(document.querySelectorAll<HTMLElement>('section'))
  const navDots  = Array.from(document.querySelectorAll<HTMLElement>('.dot-nav a'))
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      const idx = sections.findIndex(s => s === entry.target)
      if (entry.isIntersecting) {
        navDots.forEach(d => d.classList.remove('active'))
        navDots[idx]?.classList.add('active')
      }
    })
  }, { threshold: 0.5 })

  sections.forEach(s => observer.observe(s))
})
