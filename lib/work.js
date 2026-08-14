// Placeholder work entries — replace each one with a real project.
// `accent` is "maroon" or "green" (alternate them for visual variety).
// `stripe` is "a" | "b" | "c", the placeholder thumbnail tint (swap for a real image later).
// `href` is optional — add it to link a card (on the /work page only) out to a published
// article, launch post, or case study. Opens in a new tab. Omit it for projects with nothing to link to.
export const WORK = [
  {
    num: '001',
    title: 'Bug Bash T-Mobile',
    tag: 'Getting offensive and defensive in the same room',
    blurb: 'This was the first ever 5G live hacking event in the world, pairing offensive and defensive teams in real time to stress-test T-Mobile\'s network before it shipped ',
    accent: 'maroon',
    stripe: 'a',
    stats: ['15+ security researchers', 'World-first format'],
    href: 'https://www.t-mobile.com/news/un-carrier/t-mobile-bug-bounty-program-makes-allies-out-of-adversaries'
  },
  {
    num: '002',
    title: 'Hacker Summer Camp - Bug Bash 2024',
    tag: 'Three events in one week',
    blurb: 'We partnered with three customers to put on three events in one week that had three different specialties ranging from web to hardware to social engineering.',
    accent: 'green',
    stripe: 'b',
    stats: ['40 hackers', '3 disciplines', '4 days'],
    href: 'https://www.youtube.com/watch?v=ZCXV_bK2VO8'
  },
  {
    num: '003',
    title: 'Times Square Bug Bash',
    tag: 'Cybersecurity after dark',
    blurb: 'Partnered with a major US retailer to host a Bug Bash in the heart of Times Square — after hours, once the store closed, with the added challenge of pulling it off overnight.',
    accent: 'maroon',
    stripe: 'c',
    stats: ['12 Hackers', '1 billboard takeover'],
  },
  {
    num: '004',
    title: 'Hack the Army Microgrid',
    tag: 'Making energy more resilient',
    blurb: 'Partnered with Defense Digital Services (DDS) and the US Army Reserves to hack a microgrid to ensure its resilience when fully activated',
    accent: 'green',
    stripe: 'a',
    stats: ['12 hackers', '3 helicopter rides', '1 army base'],
    href: 'https://www.dvidshub.net/news/488108/us-army-reserve-establishing-energy-microgrid-cyber-resilience-protocols'
  },
  {
    num: '005',
    title: 'Hack the Telekoms',
    tag: 'Taking the 5G Bash abroad',
    blurb: 'Partnered with Deutsche Telekom, Ericsson and T-Mobile to bring the 5G Bash to Europe, spanning two telecom carriers and a network equipment partner',
    accent: 'maroon',
    stripe: 'b',
    stats: ['12 hackers', '3 partners', '1 5G system'],
    href: 'https://www.lightreading.com/security/deutsche-telekom-brings-in-hackers-to-find-5g-bugs'
  },
];

export function getAllWork() {
  return WORK;
}
