import Widget from '../components/Widget.jsx'

/* ── Shared micro-styles ───────────────────────────────────────────── */
const s = {
  page: {
    padding: '20px 24px',
    minHeight: 'calc(100vh - 36px)',
    backgroundColor: '#f2f3f3',
  },
  pageHeader: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: '20px',
    flexWrap: 'wrap',
    gap: '10px',
  },
  pageTitleRow: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
  },
  pageTitle: {
    fontSize: '20px',
    fontWeight: 700,
    color: '#16191f',
    lineHeight: 1.2,
  },
  infoIcon: {
    color: '#687078',
    fontSize: '14px',
    cursor: 'pointer',
  },
  headerActions: {
    display: 'flex',
    gap: '8px',
    alignItems: 'center',
  },
  btnSecondary: {
    backgroundColor: '#ffffff',
    border: '1px solid #aab7b8',
    borderRadius: '3px',
    color: '#16191f',
    fontSize: '13px',
    padding: '5px 12px',
    cursor: 'pointer',
    fontFamily: 'inherit',
    fontWeight: 400,
    lineHeight: 1.4,
  },
  btnPrimary: {
    backgroundColor: '#ec7211',
    border: '1px solid #c45000',
    borderRadius: '3px',
    color: '#ffffff',
    fontSize: '13px',
    padding: '5px 12px',
    cursor: 'pointer',
    fontFamily: 'inherit',
    fontWeight: 400,
    lineHeight: 1.4,
  },
  grid3: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '16px',
  },
  widgetBody: {
    padding: '14px',
  },
}

/* ── Service icons grid for "Recently used skills" ─────────────────── */
const SKILL_ICONS = [
  { label: 'AWS', color: '#ec7211', bg: '#fff8f2', abbr: 'AWS' },
  { label: 'Azure', color: '#0078d4', bg: '#f0f7ff', abbr: 'AZ' },
  { label: 'GCP', color: '#4285f4', bg: '#f0f5ff', abbr: 'GCP' },
  { label: 'Kubernetes', color: '#326ce5', bg: '#f0f4ff', abbr: 'K8s' },
  { label: 'Terraform', color: '#7b42bc', bg: '#f7f2ff', abbr: 'TF' },
  { label: 'Docker', color: '#0db7ed', bg: '#f0faff', abbr: 'DCK' },
  { label: 'Python', color: '#3776ab', bg: '#f0f5ff', abbr: 'PY' },
  { label: 'CI/CD', color: '#d13212', bg: '#fff5f5', abbr: 'CI' },
]

function SkillIconGrid({ navigate }) {
  return (
    <div style={{ ...s.widgetBody, padding: '12px 14px' }}>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: '8px',
      }}>
        {SKILL_ICONS.map(sk => (
          <button
            key={sk.label}
            onClick={() => navigate('skills')}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '5px',
              padding: '10px 4px',
              border: '1px solid #eaeded',
              borderRadius: '3px',
              backgroundColor: sk.bg,
              cursor: 'pointer',
              transition: 'border-color 0.15s',
            }}
            title={sk.label}
          >
            <div style={{
              width: '32px',
              height: '32px',
              borderRadius: '4px',
              backgroundColor: sk.color,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#ffffff',
              fontSize: '10px',
              fontWeight: 700,
              letterSpacing: '0px',
            }}>
              {sk.abbr}
            </div>
            <span style={{ fontSize: '11px', color: '#16191f', lineHeight: 1 }}>
              {sk.label}
            </span>
          </button>
        ))}
      </div>
    </div>
  )
}

/* ── Profile Stats ──────────────────────────────────────────────────── */
function ProfileStats() {
  const rows = [
    { label: 'Certifications active', value: '4', link: true },
    { label: 'Projects shipped', value: '12' },
    { label: 'GitHub repos', value: '30+' },
    { label: 'LinkedIn connections', value: '500+' },
  ]
  return (
    <div style={s.widgetBody}>
      <div style={{ display: 'flex', alignItems: 'flex-end', gap: '10px', marginBottom: '10px' }}>
        <div>
          <div style={{ fontSize: '11px', color: '#687078', marginBottom: '2px' }}>Hire score</div>
          <div style={{ fontSize: '40px', fontWeight: 700, color: '#1d8102', lineHeight: 1 }}>98%</div>
        </div>
        <div style={{ paddingBottom: '4px' }}>
          <div style={{ fontSize: '11px', color: '#687078' }}>Open to:</div>
          <div style={{
            fontSize: '12px',
            color: '#ec7211',
            fontWeight: 600,
            marginTop: '2px',
          }}>
            Full-time · Contract · Remote
          </div>
        </div>
      </div>
      <div style={{ borderTop: '1px solid #eaeded', paddingTop: '10px' }}>
        {rows.map(r => (
          <div key={r.label} style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '5px 0',
            borderBottom: '1px solid #f5f5f5',
            fontSize: '13px',
          }}>
            <span style={{ color: '#545b64' }}>{r.label}</span>
            <span style={{ fontWeight: 600, color: r.link ? '#0073bb' : '#16191f' }}>
              {r.value}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

/* ── About widget ───────────────────────────────────────────────────── */
function AboutWidget() {
  const items = [
    {
      icon: '☁',
      color: '#ec7211',
      title: '8+ Years Cloud & DevOps',
      sub: 'AWS · Azure · GCP · Kubernetes · Terraform',
    },
    {
      icon: '◎',
      color: '#0073bb',
      title: 'Based in Poland · Open to remote',
      sub: 'EU time zone · Available immediately',
    },
    {
      icon: '✉',
      color: '#1d8102',
      title: 'Get in touch',
      sub: null,
      links: [
        { label: 'GitHub: prathamo28', href: 'https://github.com/prathamo28' },
        { label: 'LinkedIn', href: 'https://linkedin.com/in/prathamesh-mokal' },
      ],
    },
  ]
  return (
    <div style={s.widgetBody}>
      {items.map((it, i) => (
        <div key={i} style={{
          display: 'flex',
          gap: '12px',
          alignItems: 'flex-start',
          padding: '8px 0',
          borderBottom: i < items.length - 1 ? '1px solid #f5f5f5' : 'none',
        }}>
          <div style={{
            width: '32px',
            height: '32px',
            borderRadius: '50%',
            backgroundColor: it.color + '20',
            border: `1px solid ${it.color}40`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '16px',
            color: it.color,
            flexShrink: 0,
          }}>
            {it.icon}
          </div>
          <div>
            <div style={{ fontSize: '13px', fontWeight: 600, color: '#16191f' }}>{it.title}</div>
            {it.sub && (
              <div style={{ fontSize: '12px', color: '#687078', marginTop: '2px' }}>{it.sub}</div>
            )}
            {it.links && (
              <div style={{ marginTop: '4px', display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                {it.links.map(lk => (
                  <a
                    key={lk.label}
                    href={lk.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ fontSize: '12px', color: '#0073bb' }}
                  >
                    {lk.label}
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  )
}

/* ── Projects table widget ──────────────────────────────────────────── */
const HOME_PROJECTS = [
  {
    id: 'mlops-pipeline-v2',
    desc: 'End-to-end ML training + deployment pipeline on AWS',
    stack: 'Python, SageMaker, Step Functions, ECR',
    type: 'MLOps',
    status: 'running',
    region: 'eu-central-1',
  },
  {
    id: 'devops-agent-poc',
    desc: 'AI-powered DevOps automation agent with Claude',
    stack: 'Python, AWS Bedrock, Lambda, DynamoDB',
    type: 'AI/DevOps',
    status: 'active',
    region: 'eu-west-1',
  },
  {
    id: 'cloud-cost-optimizer',
    desc: 'Automated tagging, rightsizing, and savings plans mgmt',
    stack: 'Terraform, AWS Cost Explorer, Lambda, SNS',
    type: 'FinOps',
    status: 'running',
    region: 'eu-central-1',
  },
  {
    id: 'k8s-security-hardening',
    desc: 'CIS benchmark automation for Kubernetes clusters',
    stack: 'Kubernetes, Falco, OPA Gatekeeper, Helm',
    type: 'Security',
    status: 'stopped',
    region: 'eu-west-1',
  },
]

const STATUS_STYLES = {
  running: { dot: '#1d8102', text: 'running' },
  active: { dot: '#ec7211', text: 'active' },
  stopped: { dot: '#0073bb', text: 'stopped' },
}

function StatusBadge({ status }) {
  const st = STATUS_STYLES[status] || STATUS_STYLES.stopped
  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', fontSize: '12px' }}>
      <span style={{
        display: 'inline-block',
        width: '8px',
        height: '8px',
        borderRadius: '50%',
        backgroundColor: st.dot,
        flexShrink: 0,
      }} />
      {st.text}
    </span>
  )
}

function ProjectsWidget({ navigate }) {
  return (
    <div>
      {/* Toolbar */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        padding: '8px 14px',
        borderBottom: '1px solid #eaeded',
        flexWrap: 'wrap',
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          border: '1px solid #aab7b8',
          borderRadius: '2px',
          backgroundColor: '#fff',
          padding: '0 8px',
          height: '26px',
          flex: 1,
          minWidth: '160px',
          maxWidth: '260px',
        }}>
          <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#687078" strokeWidth="2.5" style={{ marginRight: '6px', flexShrink: 0 }}>
            <circle cx="11" cy="11" r="7"/><line x1="16.5" y1="16.5" x2="22" y2="22"/>
          </svg>
          <input
            placeholder="Filter projects..."
            style={{ border: 'none', outline: 'none', fontSize: '12px', color: '#16191f', width: '100%', background: 'transparent' }}
          />
        </div>
        <button style={{ ...s.btnSecondary, fontSize: '12px', padding: '4px 10px' }}>
          Actions ▾
        </button>
        <button
          style={{ ...s.btnPrimary, fontSize: '12px', padding: '4px 10px' }}
          onClick={() => navigate('projects')}
        >
          + Launch project ▾
        </button>
      </div>

      {/* Table */}
      <div style={{ overflowX: 'auto' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '13px' }}>
          <thead>
            <tr style={{ backgroundColor: '#fafafa' }}>
              <th style={thStyle}>
                <input type="checkbox" style={{ cursor: 'pointer' }} />
              </th>
              <th style={thStyle}>Project ID</th>
              <th style={thStyle}>Description</th>
              <th style={thStyle}>Tech Stack</th>
              <th style={thStyle}>Type</th>
              <th style={thStyle}>Status</th>
              <th style={thStyle}>Region</th>
            </tr>
          </thead>
          <tbody>
            {HOME_PROJECTS.map((p, i) => (
              <tr key={p.id} style={{ backgroundColor: i % 2 === 0 ? '#fff' : '#fafafa', borderBottom: '1px solid #eaeded' }}>
                <td style={tdStyle}>
                  <input type="checkbox" style={{ cursor: 'pointer' }} />
                </td>
                <td style={tdStyle}>
                  <a href="#" style={{ color: '#0073bb', fontFamily: 'monospace', fontSize: '12px' }}>
                    {p.id}
                  </a>
                </td>
                <td style={{ ...tdStyle, maxWidth: '200px', color: '#545b64' }}>{p.desc}</td>
                <td style={{ ...tdStyle, color: '#545b64', fontSize: '11px' }}>{p.stack}</td>
                <td style={tdStyle}>
                  <span style={{
                    backgroundColor: '#f0f4ff',
                    color: '#0073bb',
                    fontSize: '11px',
                    padding: '2px 6px',
                    borderRadius: '2px',
                    border: '1px solid #d0e4f0',
                  }}>{p.type}</span>
                </td>
                <td style={tdStyle}>
                  <StatusBadge status={p.status} />
                </td>
                <td style={{ ...tdStyle, fontSize: '12px', color: '#545b64', fontFamily: 'monospace' }}>
                  {p.region}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

const thStyle = {
  padding: '7px 12px',
  textAlign: 'left',
  fontSize: '11px',
  fontWeight: 700,
  color: '#687078',
  textTransform: 'uppercase',
  letterSpacing: '0.3px',
  borderBottom: '2px solid #eaeded',
  whiteSpace: 'nowrap',
}

const tdStyle = {
  padding: '8px 12px',
  fontSize: '13px',
  color: '#16191f',
  verticalAlign: 'middle',
}

/* ── Certifications mini widget ─────────────────────────────────────── */
const CERTS_MINI = [
  { name: 'AWS Solutions Architect Pro', exp: 'Dec 2026' },
  { name: 'AWS DevOps Engineer Pro', exp: 'Mar 2027' },
  { name: 'Certified Kubernetes Admin', exp: 'Aug 2026' },
]

function CertsWidget({ navigate }) {
  return (
    <div style={s.widgetBody}>
      <div style={{ display: 'flex', alignItems: 'flex-end', gap: '10px', marginBottom: '12px' }}>
        <div style={{ fontSize: '48px', fontWeight: 700, color: '#16191f', lineHeight: 1 }}>4</div>
        <div style={{ paddingBottom: '6px' }}>
          <div style={{ fontSize: '13px', color: '#545b64' }}>Active certifications</div>
          <div style={{ fontSize: '11px', color: '#1d8102', marginTop: '2px' }}>● All current</div>
        </div>
      </div>

      <div style={{ borderTop: '1px solid #eaeded', paddingTop: '10px' }}>
        {CERTS_MINI.map((c, i) => (
          <div key={i} style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '6px 0',
            borderBottom: i < CERTS_MINI.length - 1 ? '1px solid #f5f5f5' : 'none',
          }}>
            <button
              onClick={() => navigate('certifications')}
              style={{ background: 'none', border: 'none', color: '#0073bb', fontSize: '12px', cursor: 'pointer', textAlign: 'left', padding: 0 }}
            >
              {c.name}
            </button>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexShrink: 0 }}>
              <span style={{ fontSize: '11px', color: '#687078' }}>Exp: {c.exp}</span>
              <span style={{ color: '#1d8102', fontSize: '14px' }}>✓</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

/* ── Home page ──────────────────────────────────────────────────────── */
export default function Home({ navigate }) {
  return (
    <div style={s.page}>
      {/* Page header */}
      <div style={s.pageHeader}>
        <div style={s.pageTitleRow}>
          <h1 style={s.pageTitle}>Console Home</h1>
          <button style={{ ...s.infoIcon, background: 'none', border: 'none', cursor: 'pointer' }} title="Information">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#687078" strokeWidth="2">
              <circle cx="12" cy="12" r="10"/>
              <line x1="12" y1="8" x2="12" y2="12"/>
              <line x1="12" y1="16" x2="12.01" y2="16"/>
            </svg>
          </button>
        </div>
        <div style={s.headerActions}>
          <button style={s.btnSecondary}>Reset to default layout</button>
          <button style={s.btnPrimary}>+ Add widgets</button>
        </div>
      </div>

      {/* Widget grid */}
      <div style={s.grid3}>
        {/* Row 1 */}
        <Widget
          title="Recently used skills"
          footerLink="View all skills"
          footerLinkLabel="View all skills →"
          onFooterClick={() => navigate('skills')}
        >
          <SkillIconGrid navigate={navigate} />
        </Widget>

        <Widget
          title="Profile stats"
          footerLink="Download resume"
          footerLinkLabel="Download Resume →"
          onFooterClick={() => window.open('https://github.com/prathamo28', '_blank')}
        >
          <ProfileStats />
        </Widget>

        <Widget title="About Prathamesh">
          <AboutWidget />
        </Widget>

        {/* Row 2 — Projects spans 2 cols */}
        <div style={{ gridColumn: '1 / span 2' }}>
          <Widget
            title="Projects"
            footerLink="View all projects"
            footerLinkLabel="View all projects →"
            footerRight="Showing 4 of 12"
            onFooterClick={() => navigate('projects')}
          >
            <ProjectsWidget navigate={navigate} />
          </Widget>
        </div>

        <Widget
          title="Certifications"
          footerLink="View all certifications"
          footerLinkLabel="View all certifications →"
          onFooterClick={() => navigate('certifications')}
        >
          <CertsWidget navigate={navigate} />
        </Widget>
      </div>
    </div>
  )
}
