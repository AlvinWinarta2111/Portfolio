import { useState } from "react";
import {
  ArrowDownRight,
  ArrowUpRight,
  ChevronDown,
  ExternalLink,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  Network,
  Radio,
  ScanLine,
  Send,
  ShieldCheck,
  Sparkles,
  X,
  Zap,
} from "lucide-react";

type Project = {
  id: string;
  number: string;
  title: string;
  shortTitle: string;
  company: string;
  role: string;
  year: string;
  month: string;
  description: string;
  outcome: string;
  tags: string[];
  image: string;
  link?: string;
  featured?: boolean;
};

const projects: Project[] = [
  {
    id: "predictive-maintenance",
    number: "01",
    title: "Predictive Maintenance System",
    shortTitle: "Predictive Maintenance",
    company: "PT Hitachi Construction Machinery Indonesia",
    role: "Maintenance Intern",
    year: "2026",
    month: "APRIL 2026",
    description:
      "A real-time motor health monitoring dashboard that uses machine learning to calculate Power Health Index (PHI) from CT sensor current signatures across six ED Line motors.",
    outcome:
      "A ratchet mechanism permanently records degradation. Scores recover only after consecutive one-day healthy ML cycles, while warning emails trigger once motor health falls below 35%.",
    tags: ["Machine learning", "Industrial IoT", "Dashboard"],
    image: "/portfolio-assets/predictive-maintenance-live-monitoring.png",
    link: "https://drive.google.com/file/d/1R4zZ9vlxwdd_VUbaafDzVwpdyuFmiv1u/view?usp=sharing",
    featured: true,
  },
  {
    id: "maintenance-monitoring",
    number: "02",
    title: "Maintenance Monitoring System",
    shortTitle: "Maintenance Monitoring",
    company: "PT Hitachi Construction Machinery Indonesia",
    role: "Maintenance Intern",
    year: "2026",
    month: "FEBRUARY 2026",
    description:
      "A nine-dashboard Streamlit intranet application that replaced a standalone PM tool and centralized maintenance data into one operational workspace.",
    outcome:
      "The platform covers Attendance, Daily Worklog, PM1, PM2, Tools Inventory, Suggestion System, and APAR monitoring. Since go-live, Attendance and PM1 KPIs reached 100% through real-time dashboards and overdue-alert emails.",
    tags: ["Streamlit", "Data systems", "Dashboard"],
    image: "/portfolio-assets/predictive-maintenance-dashboard.png",
    link: "https://drive.google.com/file/d/1OCGOdz_uNMJD9lQGHzM5D7J2lqykaQI5/view?usp=drive_link",
    featured: true,
  },
  {
    id: "physical-availability",
    number: "03",
    title: "Physical Availability Online Dashboard",
    shortTitle: "Physical Availability",
    company: "Alamtri Resources Indonesia",
    role: "Processing QA/QC",
    year: "2025",
    month: "AUGUST 2025",
    description:
      "A real-time Streamlit dashboard for monitoring the physical availability condition of plant equipment and turning raw operational data into a usable evaluation report.",
    outcome:
      "The system digitizes raw-data analytics while keeping the database secure and private, giving teams a clearer view of plant performance and maintenance delays.",
    tags: ["Streamlit", "Analytics", "Industrial IoT"],
    image: "/portfolio-assets/alamtri-pa-dashboard.jpg",
    link: "https://dummy-dashboard.streamlit.app/",
    featured: true,
  },
  {
    id: "vein-finder",
    number: "04",
    title: "Laser Guided Vein Finder",
    shortTitle: "Laser Vein Finder",
    company: "Badan Riset & Inovasi Nasional — Pusat Riset Elektronika",
    role: "Research Project",
    year: "2025",
    month: "FEBRUARY 2025",
    description:
      "A medical device concept with real-time vein selection and laser guidance, designed to make vein visibility and selection more precise.",
    outcome:
      "Image processing improves vein visibility, while DeepLab v3 machine learning performs arm segmentation. The work was published at an IEEE international conference.",
    tags: ["Computer vision", "Deep learning", "Medical device"],
    image: "/portfolio-assets/vein-finder-device.webp",
    link: "https://drive.google.com/drive/folders/1KGUskzAi67t7FCjAq9ZlXrvFLOVFIx92?usp=sharing",
    featured: true,
  },
  {
    id: "golf-collector",
    number: "05",
    title: "Automatic Golf Ball Collector",
    shortTitle: "Golf Ball Collector",
    company: "BINUS ASO School of Engineering",
    role: "Robotics Project",
    year: "2024",
    month: "OCTOBER 2024",
    description:
      "A mobile collector robot with 360° movement, automatic object detection, and obstacle avoidance built for efficient golf ball retrieval.",
    outcome:
      "YOLOv8 detects the balls, PID control tunes the collector effector for speed and power efficiency, and mecanum wheels enable omnidirectional movement.",
    tags: ["Robotics", "Computer vision", "Control systems"],
    image: "/portfolio-assets/project-05.png",
    link: "https://drive.google.com/drive/folders/1drT6QQddaDK7pn8DLzqA2Xlb9fHEjLl6?usp=drive_link",
  },
  {
    id: "iot-electric-vehicle",
    number: "06",
    title: "IoT Feature Control on Electric Vehicle",
    shortTitle: "EV Feature Control",
    company: "BINUS ASO School of Engineering",
    role: "IoT Project",
    year: "2024",
    month: "MARCH 2024",
    description:
      "An IoT-enabled electric vehicle feature system that connects remote control, GPS, air conditioner control, and headlight control.",
    outcome:
      "Firebase provides the connectivity layer, while a mobile application lets users control EV features remotely from their phone.",
    tags: ["IoT", "Firebase", "Mobile control"],
    image: "/portfolio-assets/project-06.png",
    link: "https://drive.google.com/drive/folders/1YFKKrQfjs44L86VT9hCKNhEPaMNuuRS3?usp=drive_link",
  },
  {
    id: "retrovive",
    number: "07",
    title: "Retrovive",
    shortTitle: "Retrovive",
    company: "BINUS ASO School of Engineering",
    role: "Entrepreneurship Project",
    year: "2024",
    month: "MARCH 2024",
    description:
      "A specialized retro motorcycle service workshop concept for customers who want to repair and modify their motorcycle to achieve a distinctive retro character.",
    outcome:
      "The project blends service design, workshop operations, and a clear customer experience around restoration and customization.",
    tags: ["Service design", "Business", "Mobility"],
    image: "/portfolio-assets/project-07.png",
    link: "https://drive.google.com/drive/folders/1W7LvB_YcAr9iLOfsHlaS3II7Z-HScCT1?usp=drive_link",
  },
  {
    id: "database-security",
    number: "08",
    title: "Database Cyber Security Simulation",
    shortTitle: "Cyber Security Simulation",
    company: "BINUS ASO School of Engineering",
    role: "Network Security Project",
    year: "2023",
    month: "NOVEMBER 2023",
    description:
      "A segmented network architecture connecting a central office and multiple branches using VLANs, a firewall, and bandwidth controls.",
    outcome:
      "The head office hosts centralized servers in a DMZ, while branch offices use restricted web access and controlled bandwidth to model a more secure enterprise network.",
    tags: ["Cyber security", "Networking", "Systems"],
    image: "/portfolio-assets/project-08.png",
    link: "https://drive.google.com/drive/folders/1Wsc3P0C20zE0JFQQo808B-ewqgqeYySF?usp=drive_link",
  },
  {
    id: "smart-garden",
    number: "09",
    title: "Smart Garden System",
    shortTitle: "Smart Garden",
    company: "BINUS ASO School of Engineering",
    role: "Embedded Systems Project",
    year: "2023",
    month: "MARCH 2023",
    description:
      "An automated garden system that controls a roof and lights based on rain and light sensor conditions.",
    outcome:
      "Voltage and current management drive the roof motor system, while IR and LDR sensors optimize automatic roof and light operation.",
    tags: ["Embedded systems", "Sensors", "Automation"],
    image: "/portfolio-assets/project-09.png",
    link: "https://drive.google.com/drive/folders/1VyRDu8g2Y_aAYFEwbsU0dRm0oBZGh87v?usp=drive_link",
  },
  {
    id: "smart-aquarium",
    number: "10",
    title: "Smart Aquarium Cleaner",
    shortTitle: "Smart Aquarium",
    company: "BINUS ASO School of Engineering",
    role: "Embedded Systems Project",
    year: "2022",
    month: "OCTOBER 2022",
    description:
      "An automated aquarium maintenance system that uses pH and turbidity sensing to assess water quality and trigger a cleaning pump.",
    outcome:
      "Iterative sensor checks compare pH and turbidity against thresholds, while an LCD communicates the water-quality values to the user.",
    tags: ["Embedded systems", "Sensors", "Automation"],
    image: "/portfolio-assets/project-10.png",
    link: "https://drive.google.com/drive/folders/1qtCXpq_QmqTYsGZy7ioCXpSnkyTYBSHT?usp=drive_link",
  },
];

const filters = ["All", "Machine learning", "Computer vision", "IoT", "Robotics", "Embedded systems"];

function ProjectCard({ project, compact = false }: { project: Project; compact?: boolean }) {
  return (
    <article className={`project-card ${compact ? "project-card--compact" : ""}`}>
      <div className="project-card__media">
        <img src={project.image} alt={`${project.title} portfolio visual`} />
        <div className="project-card__veil" />
        <span className="project-card__index">{project.number}</span>
        <span className="project-card__year">{project.year}</span>
        <a className="project-card__open" href={`#${project.id}`} aria-label={`Open ${project.title}`}>
          <ArrowUpRight size={18} />
        </a>
      </div>
      <div className="project-card__body">
        <div className="project-card__meta">
          <span>{project.company}</span>
          <span>{project.month}</span>
        </div>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div className="tag-row">
          {project.tags.map((tag) => (
            <span className="tag" key={tag}>{tag}</span>
          ))}
        </div>
      </div>
    </article>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState("All");
  const [expandedProject, setExpandedProject] = useState<string | null>(null);
  const visibleProjects = projects.filter(
    (project) => activeFilter === "All" || project.tags.includes(activeFilter),
  );

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-shell">
      <div className="noise" />
      <header className="site-header">
        <a className="wordmark" href="#top" onClick={closeMenu}>
          <span className="wordmark__mark">AW</span>
          <span>ALVIN WINARTA</span>
        </a>
        <button className="menu-toggle" aria-label="Toggle navigation" onClick={() => setMenuOpen((open) => !open)}>
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
        <nav className={`site-nav ${menuOpen ? "site-nav--open" : ""}`}>
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#work" onClick={closeMenu}>Work</a>
          <a href="#capabilities" onClick={closeMenu}>Capabilities</a>
          <a href="#contact" onClick={closeMenu}>Contact</a>
        </nav>
        <a className="header-cta" href="mailto:alvinwinarta251@gmail.com">
          <span>Start a conversation</span><ArrowUpRight size={16} />
        </a>
      </header>

      <main id="top">
        <section className="hero section-pad">
          <div className="hero__eyebrow"><span className="status-dot" /> ROBOTICS ENGINEER / DATA SCIENCE ENTHUSIAST <span>2022—2026</span></div>
          <div className="hero__grid">
            <div className="hero__copy">
              <p className="kicker">DESIGNING AT THE INTERSECTION OF</p>
              <h1>Hardware.<br /><em>Software.</em><br />Signal.</h1>
              <p className="hero__intro">I build smart, measurable engineering systems that turn complex physical-world signals into decisions people can act on.</p>
              <div className="hero__actions">
                <a className="button button--light" href="#work">Explore selected work <ArrowDownRight size={18} /></a>
                <a className="text-link" href="mailto:alvinwinarta251@gmail.com">Get in touch <ArrowUpRight size={15} /></a>
              </div>
            </div>
            <div className="hero__visual">
              <div className="hero__orb hero__orb--one" />
              <div className="hero__orb hero__orb--two" />
              <div className="hero__scanline" />
              <div className="hero__coordinate">06° 12′ S<br />106° 48′ E</div>
              <div className="hero__visual-label"><span>FIELD NOTES / 001</span><strong>Systems that<br />sense & respond.</strong></div>
              <div className="hero__crosshair"><span /><span /></div>
            </div>
          </div>
          <div className="hero__bottomline"><span>SCROLL TO EXPLORE</span><span className="line" /><span>01 / 05</span></div>
        </section>

        <section id="about" className="about section-pad">
          <div className="section-label"><span>01</span><span>About the engineer</span></div>
          <div className="about__grid">
            <div>
              <p className="display-statement">From current signatures to camera feeds, <span>I make the invisible legible.</span></p>
            </div>
            <div className="about__copy">
              <p>I am a final-year Robotics Engineering student at BINUS ASO School of Engineering with internship experience at BRIN, PT Alamtri Resources Indonesia, and PT Hitachi Construction Machinery Indonesia.</p>
              <p>My work spans machine learning, IoT systems, computer vision, and data-driven dashboards — from an IEEE-published laser-guided vein finder to a live intranet maintenance system that drove Attendance and PM1 KPIs to 100% achievement.</p>
              <a className="arrow-link" href="#capabilities">See how I work <ArrowUpRight size={16} /></a>
            </div>
          </div>
          <div className="signal-grid">
            <div className="signal-grid__item"><span>01</span><strong>10</strong><small>projects across robotics, data, and systems</small></div>
            <div className="signal-grid__item"><span>02</span><strong>04</strong><small>professional internship experiences</small></div>
            <div className="signal-grid__item"><span>03</span><strong>100%</strong><small>Attendance + PM1 KPI achievement</small></div>
            <div className="signal-grid__item"><span>04</span><strong>01</strong><small>IEEE international conference publication</small></div>
          </div>
        </section>

        <section id="work" className="work section-pad">
          <div className="section-label"><span>02</span><span>Selected work</span></div>
          <div className="work__heading">
            <div>
              <p className="kicker">A FIELD GUIDE TO</p>
              <h2>Projects with<br /><em>consequence.</em></h2>
            </div>
            <p className="work__lede">A decade of curiosity compressed into ten systems. Each project begins with a physical problem and ends with a more useful signal.</p>
          </div>
          <div className="featured-grid">
            {projects.filter((project) => project.featured).map((project) => <ProjectCard key={project.id} project={project} />)}
          </div>
          <div className="project-index-head">
            <div><span className="kicker">PROJECT INDEX</span><span className="index-count">{String(visibleProjects.length).padStart(2, "0")} / 10</span></div>
            <div className="filter-row">
              {filters.map((filter) => <button key={filter} className={activeFilter === filter ? "filter filter--active" : "filter"} onClick={() => setActiveFilter(filter)}>{filter}</button>)}
            </div>
          </div>
          <div className="index-grid">
            {visibleProjects.map((project) => (
              <div key={project.id} id={project.id} className="index-item">
                <button className="index-item__trigger" onClick={() => setExpandedProject(expandedProject === project.id ? null : project.id)} aria-expanded={expandedProject === project.id}>
                  <span className="index-item__number">{project.number}</span>
                  <span className="index-item__title"><strong>{project.shortTitle}</strong><small>{project.company} / {project.role}</small></span>
                  <span className="index-item__year">{project.year}</span>
                  <ChevronDown className={expandedProject === project.id ? "rotate" : ""} size={20} />
                </button>
                {expandedProject === project.id && (
                  <div className="index-item__detail">
                    <div className="index-item__detail-image"><img src={project.image} alt="" /></div>
                    <div className="index-item__detail-copy">
                      <span className="kicker">{project.month}</span>
                      <h3>{project.title}</h3>
                      <p>{project.description}</p>
                      <p><strong>What changed:</strong> {project.outcome}</p>
                      <div className="tag-row">{project.tags.map((tag) => <span className="tag" key={tag}>{tag}</span>)}</div>
                      {project.link && <a className="arrow-link" href={project.link} target="_blank" rel="noreferrer">Open project evidence <ExternalLink size={15} /></a>}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        <section id="capabilities" className="capabilities section-pad">
          <div className="section-label"><span>03</span><span>Capabilities</span></div>
          <div className="capabilities__grid">
            <div className="capabilities__intro"><p className="kicker">THE TOOLKIT</p><h2>Built to move<br /><em>from idea to field.</em></h2><p className="capabilities__note">The best systems respect both the data and the person who has to use it. My practice moves between prototyping, modelling, deployment, and the details in between.</p></div>
            <div className="capability-list">
              <div className="capability"><div className="capability__icon"><Radio size={19} /></div><div><strong>Machine intelligence</strong><span>Machine learning, DeepLab v3, YOLOv8, signal interpretation, anomaly logic.</span></div><span className="capability__no">01</span></div>
              <div className="capability"><div className="capability__icon"><Network size={19} /></div><div><strong>Connected systems</strong><span>Industrial IoT, Firebase, sensor networks, live dashboards, data pipelines.</span></div><span className="capability__no">02</span></div>
              <div className="capability"><div className="capability__icon"><ScanLine size={19} /></div><div><strong>Robotic behaviour</strong><span>Computer vision, PID control, mecanum movement, object detection, automation.</span></div><span className="capability__no">03</span></div>
              <div className="capability"><div className="capability__icon"><ShieldCheck size={19} /></div><div><strong>Systems thinking</strong><span>Network segmentation, cybersecurity simulation, operational workflows, secure databases.</span></div><span className="capability__no">04</span></div>
            </div>
          </div>
        </section>

        <section className="timeline section-pad">
          <div className="section-label"><span>04</span><span>Experience markers</span></div>
          <div className="timeline__row">
            <div className="timeline__marker"><span>2025—26</span><strong>PT Hitachi Construction Machinery Indonesia</strong><small>Maintenance Intern</small></div>
            <div className="timeline__marker"><span>2025</span><strong>Alamtri Resources Indonesia</strong><small>Processing QA/QC</small></div>
            <div className="timeline__marker"><span>2025</span><strong>BRIN — Pusat Riset Elektronika</strong><small>Research Project</small></div>
            <div className="timeline__marker"><span>2022—26</span><strong>BINUS ASO School of Engineering</strong><small>Robotics Engineering</small></div>
          </div>
        </section>

        <section id="contact" className="contact section-pad">
          <div className="contact__grid">
            <div><span className="kicker">05 / GET IN TOUCH</span><h2>Have a signal<br /><em>worth following?</em></h2></div>
            <div className="contact__copy"><p>I’m open to conversations about robotics, data systems, computer vision, and engineering work that makes a measurable difference.</p><a className="button button--accent" href="https://mail.google.com/mail/?view=cm&fs=1&to=alvinwinarta251@gmail.com&su=Hello%20Alvin%20%E2%80%94%20Portfolio%20Inquiry" target="_blank" rel="noreferrer">Send an email <Send size={17} /></a><div className="contact__links"><a href="https://www.linkedin.com/in/alvin-winarta" target="_blank" rel="noreferrer"><Linkedin size={16} /> LinkedIn</a><a href="https://drive.google.com/drive/folders/1-qUXWA-KHLRcTyPi8TngpFHGmfGwhhfN?usp=drive_link" target="_blank" rel="noreferrer"><Github size={16} /> Project archive</a></div></div>
          </div>
          <div className="contact__footer"><span>ALVIN WINARTA / ROBOTIC ENGINEER</span><span><Mail size={14} /> alvinwinarta251@gmail.com</span><span><MapPin size={14} /> Jakarta, Indonesia</span></div>
        </section>
      </main>

      <footer className="site-footer"><span>© 2026 Alvin Winarta</span><span>Built with precision, curiosity, and a little bit of signal.</span><a href="#top"><Sparkles size={15} /> Back to top</a></footer>
    </div>
  );
}
