/* Experience page — styled like EC2 Instances table */
import { Fragment } from 'react'

const EXPERIENCE = [
  {
    id: 'i-001',
    company: 'Nordea Bank',
    role: 'Senior Platform Engineer / SRE',
    period: 'Jan 2023 – Present',
    location: 'Warsaw, Poland (Remote)',
    type: 'Full-time',
    status: 'running',
    tech: 'AWS, EKS, Terraform, GitHub Actions, Prometheus, Grafana, Vault',
    highlights: [
      'Architected multi-account AWS landing zone serving 200+ engineers',
      'Reduced infra provisioning time from 3 days to 4 hours via IDP',
      'Led Kubernetes migration of 40+ microservices from EC2 to EKS',
      'Achieved 99.99% SLA across production services with SLI/SLO framework',
    ],
  },
  {
    id: 'i-002',
    company: 'Capgemini',
    role: 'Cloud DevOps Engineer (AWS)',
    period: 'Jun 2020 – Dec 2022',
    location: 'Pune, India',
    type: 'Full-time',
    status: 'stopped',
    tech: 'AWS, Docker, Kubernetes, Jenkins, Terraform, Python, Ansible',
    highlights: [
      'Built CI/CD pipelines for 15+ applications using Jenkins + GitHub Actions',
      'Automated AMI baking and EC2 fleet management with Packer + Ansible',
      'Implemented DevSecOps practices: SAST, DAST, secret scanning in pipelines',
      'Reduced AWS spend by 35% via rightsizing and savings plan optimization',
    ],
  },
  {
    id: 'i-003',
    company: 'Wipro Technologies',
    role: 'Cloud Infrastructure Engineer',
    period: 'Aug 2018 – May 2020',
    location: 'Bengaluru, India',
    type: 'Full-time',
    status: 'stopped',
    tech: 'AWS, Linux, Bash, Python, CloudFormation, Nagios',
    highlights: [
      'Managed 200+ Linux servers across AWS and on-premises environments',
      'Automated routine ops tasks with Bash + Python, saving 20 hrs/week',
      'Migrated legacy apps to AWS: EC2, RDS, S3, CloudFront',
      'On-call SRE rotation: MTTR reduced by 45% via runbook automation',
    ],
  },
]

const STATUS_STYLES = {
  running: { dot: '#1d8102', text: 'Current', bg: '#f0fff4' },
  stopped: { dot: '#687078', text: 'Previous', bg: '#f8f8f8' },
}

const thStyle = {
  padding: '8px 14px',
  textAlign: 'left',
  fontSize: '11px',
  fontWeight: 700,
  color: '#687078',
  textTransform: 'uppercase',
  letterSpacing: '0.3px',
  borderBottom: '2px solid #eaeded',
  backgroundColor: '#fafafa',
  whiteSpace: 'nowrap',
}

const tdStyle = {
  padding: '0',
  verticalAlign: 'top',
  borderBottom: '1px solid #eaeded',
}

const s = {
  page: { minHeight: 'calc(100vh - 36px)', backgroundColor: '#f2f3f3' },
  secondaryNav: { backgroundColor: '#ffffff', borderBottom: '1px solid #d5dbdb', height: '34px', display: 'flex', alignItems: 'center', padding: '0 24px' },
  breadcrumb: { display: 'flex', alignItems: 'center', gap: '4px', fontSize: '12px' },
  breadcrumbLink: { color: '#0073bb', background: 'none', border: 'none', cursor: 'pointer', fontSize: '12px', padding: 0, fontFamily: 'inherit' },
  breadcrumbSep: { color: '#ec7211', fontSize: '11px', fontWeight: 700 },
  pageContent: { padding: '20px 24px' },
  pageHeader: { display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px', flexWrap: 'wrap', gap: '10px' },
  pageTitle: { fontSize: '20px', fontWeight: 700, color: '#16191f' },
  panel: { backgroundColor: '#ffffff', border: '1px solid #d5dbdb', borderRadius: '3px', overflow: 'hidden' },
  btnSecondary: { backgroundColor: '#ffffff', border: '1px solid #aab7b8', borderRadius: '3px', color: '#16191f', fontSize: '13px', padding: '5px 12px', cursor: 'pointer', fontFamily: 'inherit' },
}

function StatusBadge({ status }) {
  const st = STATUS_STYLES[status] || STATUS_STYLES.stopped
  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', fontSize: '12px' }}>
      <span style={{ display: 'inline-block', width: '8px', height: '8px', borderRadius: '50%', backgroundColor: st.dot, flexShrink: 0 }} />
      {st.text}
    </span>
  )
}

export default function Experience({ navigate }) {
  return (
    <div style={s.page}>
      <div style={s.secondaryNav}>
        <nav style={s.breadcrumb} aria-label="Breadcrumb">
          <button style={s.breadcrumbLink} onClick={() => navigate('home')}>Console Home</button>
          <span style={s.breadcrumbSep}>›</span>
          <span style={{ color: '#16191f' }}>Experience</span>
        </nav>
      </div>

      <div style={s.pageContent}>
        <div style={s.pageHeader}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <h1 style={s.pageTitle}>Experience</h1>
            <span style={{ backgroundColor: '#f0f4ff', color: '#0073bb', fontSize: '11px', padding: '1px 7px', borderRadius: '10px', border: '1px solid #d0e4f0', fontWeight: 600 }}>
              {EXPERIENCE.length} positions
            </span>
          </div>
          <div style={{ display: 'flex', gap: '8px' }}>
            <button style={s.btnSecondary}>
              <a href="https://github.com/prathamo28" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>
                View GitHub ↗
              </a>
            </button>
          </div>
        </div>

        {/* Stats bar */}
        <div style={{
          display: 'flex', gap: '12px', marginBottom: '16px', flexWrap: 'wrap',
        }}>
          {[
            { label: 'Total experience', value: '8+ years' },
            { label: 'Companies', value: '3' },
            { label: 'Countries', value: '2 (India, Poland)' },
            { label: 'Specialization', value: 'AWS · DevOps · SRE · Security' },
          ].map(stat => (
            <div key={stat.label} style={{
              backgroundColor: '#ffffff',
              border: '1px solid #d5dbdb',
              borderRadius: '3px',
              padding: '10px 16px',
              flex: '1',
              minWidth: '160px',
            }}>
              <div style={{ fontSize: '11px', color: '#687078', textTransform: 'uppercase', letterSpacing: '0.3px', marginBottom: '4px' }}>
                {stat.label}
              </div>
              <div style={{ fontSize: '14px', fontWeight: 700, color: '#16191f' }}>
                {stat.value}
              </div>
            </div>
          ))}
        </div>

        <div style={s.panel}>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr>
                  <th style={{ ...thStyle, width: '40px' }}>
                    <input type="checkbox" style={{ cursor: 'pointer' }} />
                  </th>
                  <th style={thStyle}>Instance ID</th>
                  <th style={thStyle}>Company</th>
                  <th style={thStyle}>Role</th>
                  <th style={thStyle}>Period</th>
                  <th style={thStyle}>Location</th>
                  <th style={thStyle}>Type</th>
                  <th style={thStyle}>Status</th>
                </tr>
              </thead>
              <tbody>
                {EXPERIENCE.map((exp, i) => (
                  <Fragment key={exp.id}>
                    <tr style={{ backgroundColor: i % 2 === 0 ? '#ffffff' : '#fafafa' }}>
                      <td style={{ ...tdStyle, padding: '12px 14px' }}>
                        <input type="checkbox" style={{ cursor: 'pointer' }} />
                      </td>
                      <td style={{ ...tdStyle, padding: '12px 14px' }}>
                        <span style={{ fontFamily: 'monospace', fontSize: '12px', color: '#0073bb' }}>
                          {exp.id}
                        </span>
                      </td>
                      <td style={{ ...tdStyle, padding: '12px 14px' }}>
                        <div style={{ fontWeight: 600, fontSize: '13px', color: '#16191f' }}>{exp.company}</div>
                      </td>
                      <td style={{ ...tdStyle, padding: '12px 14px' }}>
                        <div style={{ fontSize: '13px', color: '#16191f' }}>{exp.role}</div>
                        <div style={{ fontSize: '11px', color: '#687078', marginTop: '2px' }}>
                          {exp.tech}
                        </div>
                      </td>
                      <td style={{ ...tdStyle, padding: '12px 14px', fontSize: '12px', color: '#545b64', whiteSpace: 'nowrap' }}>
                        {exp.period}
                      </td>
                      <td style={{ ...tdStyle, padding: '12px 14px', fontSize: '12px', color: '#545b64' }}>
                        {exp.location}
                      </td>
                      <td style={{ ...tdStyle, padding: '12px 14px' }}>
                        <span style={{
                          backgroundColor: '#f0f4ff',
                          color: '#0073bb',
                          fontSize: '11px',
                          padding: '2px 7px',
                          borderRadius: '2px',
                          border: '1px solid #d0e4f0',
                        }}>
                          {exp.type}
                        </span>
                      </td>
                      <td style={{ ...tdStyle, padding: '12px 14px' }}>
                        <StatusBadge status={exp.status} />
                      </td>
                    </tr>
                    {/* Highlights row */}
                    <tr style={{ backgroundColor: i % 2 === 0 ? '#fafeff' : '#f9f9f9' }}>
                      <td colSpan={8} style={{ ...tdStyle, padding: '0 14px 12px 56px', borderBottom: '2px solid #eaeded' }}>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                          {exp.highlights.map((h, hi) => (
                            <div key={hi} style={{
                              display: 'flex',
                              alignItems: 'flex-start',
                              gap: '6px',
                              fontSize: '12px',
                              color: '#545b64',
                              backgroundColor: '#f5f5f5',
                              border: '1px solid #eaeded',
                              borderRadius: '2px',
                              padding: '4px 8px',
                              maxWidth: '100%',
                            }}>
                              <span style={{ color: '#ec7211', flexShrink: 0, marginTop: '1px' }}>▸</span>
                              {h}
                            </div>
                          ))}
                        </div>
                      </td>
                    </tr>
                  </Fragment>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
