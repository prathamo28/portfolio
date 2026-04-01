/* Experience page — styled like EC2 Instances table */
import { useState } from 'react'

const EXPERIENCE = [
  {
    id: 'i-nordea-001',
    company: 'Nordea',
    role: 'Senior Cloud Site Reliability Engineer',
    period: 'Aug 2024 – Present',
    location: 'Gdansk, Poland',
    type: 'Banking · Full-time',
    status: 'running',
    tech: 'AWS, EKS, Terraform, Datadog, CloudWatch, Helm, ISO27001',
    highlights: [
      'Manage security and governance controls across AWS organisation accounts in a regulated banking environment',
      'Build and maintain Terraform IaC for IAM, networking, and security infrastructure',
      'Administer Kubernetes (EKS) clusters and manage Helm-based workload deployments',
      'Set up monitoring and alerting using Datadog and CloudWatch',
      'Contribute to ISO27001-related compliance automation and cloud security posture management',
    ],
  },
  {
    id: 'i-epam-002',
    company: 'EPAM Systems',
    role: 'Senior Security System Engineer',
    period: 'Dec 2022 – Jul 2024',
    location: 'Gdansk, Poland',
    type: '1 yr 8 mo · Full-time',
    status: 'stopped',
    tech: 'AWS, Transit Gateway, Datadog, CI/CD, AWS Backup, SCPs',
    highlights: [
      'Re-architected AWS network topology using Transit Gateway with centralised network account',
      'Built and managed CI/CD pipelines, improving deployment efficiency',
      'Integrated AWS services with Datadog for monitoring, alerting, and incident tracking',
      'Engineered cross-account, cross-region backup using AWS Backup (S3, EBS, RDS)',
      'Defined and enforced Service Control Policies (SCPs) across AWS Organisation',
    ],
  },
  {
    id: 'i-edelweiss-003',
    company: 'Edelweiss Tokio Life Insurance',
    role: 'Senior Executive DevOps',
    period: 'Mar 2022 – Dec 2022',
    location: 'Mumbai, India',
    type: '10 mo · Full-time',
    status: 'stopped',
    tech: 'Azure, AWS, Azure DevOps',
    highlights: [
      'Managed Azure and AWS multi-cloud infrastructure',
      'Managed Azure DevOps pipelines: permissions, build stages, release processes',
      'Maintained 99.9% uptime through proactive monitoring and on-call incident response',
    ],
  },
  {
    id: 'i-godrej-004',
    company: 'Godrej Housing Finance',
    role: 'Assistant Manager Infrastructure',
    period: 'Oct 2021 – Mar 2022',
    location: 'Mumbai, India',
    type: '6 mo · Full-time',
    status: 'stopped',
    tech: 'AWS, CloudWatch, Grafana, Prometheus, SAST/DAST',
    highlights: [
      'Owned end-to-end cloud infrastructure provisioning and operations',
      'Reduced cloud costs by 20% through rightsizing and reserved instance planning',
      'Implemented cloud security monitoring (config compliance, vulnerability detection, threat detection)',
      'Set up monitoring with CloudWatch, Grafana, and Prometheus',
      'Integrated SAST/DAST and secrets management into CI/CD pipelines',
    ],
  },
  {
    id: 'i-indicia-005',
    company: 'Indicia Worldwide',
    role: 'Cloud and Infrastructure Engineer',
    period: 'Aug 2020 – Sep 2021',
    location: 'Remote',
    type: '1 yr 2 mo · Full-time',
    status: 'stopped',
    tech: 'AWS, Terraform, GitHub Actions, VMware, GuardDuty, WAF',
    highlights: [
      'Designed hybrid infrastructure across cloud and on-premises VMware',
      'Designed and maintained GitHub Actions CI/CD pipelines for Terraform deployments',
      'Configured IAM policies, security groups, WAF, and GuardDuty',
    ],
  },
  {
    id: 'i-abirla-006',
    company: 'Aditya Birla Finance Limited',
    role: 'Cloud Operations Engineer',
    period: 'Jan 2018 – Aug 2020',
    location: 'Goregaon, India',
    type: '2 yrs 8 mo · Full-time',
    status: 'stopped',
    tech: 'AWS, Terraform, Ansible, Jenkins, Docker, Python, Datadog, PagerDuty',
    highlights: [
      'Led zero-downtime migration of all on-premises environments to cloud-native infrastructure',
      'Reduced cloud billing by 40% through rightsizing and resource governance',
      'Automated provisioning and patch management with Terraform, Ansible, Python — cutting deployment effort by 60%',
      'Implemented large-scale Jenkins CI/CD pipelines, containerising apps with Docker',
      'Deployed Sectona PAM for privileged access management',
      'Resolved all security audit findings — firewall hardening, threat detection, compliance controls',
      'Established monitoring with Datadog and PagerDuty',
    ],
  },
]

const STATUS_STYLES = {
  running: { dot: '#1d8102', text: 'Current', bg: '#f0fff4' },
  stopped: { dot: '#0073bb', text: 'Previous', bg: '#f8f8f8' },
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
  const [expanded, setExpanded] = useState(new Set(['i-nordea-001']))

  function toggleRow(id) {
    setExpanded(prev => {
      const next = new Set(prev)
      if (next.has(id)) next.delete(id)
      else next.add(id)
      return next
    })
  }

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
              <a href="https://www.linkedin.com/in/prathamesh-mokal" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>
                View LinkedIn ↗
              </a>
            </button>
            <button style={s.btnSecondary}>
              <a href="https://github.com/prathamo28" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>
                View GitHub ↗
              </a>
            </button>
          </div>
        </div>

        {/* Stats bar */}
        <div style={{ display: 'flex', gap: '12px', marginBottom: '16px', flexWrap: 'wrap' }}>
          {[
            { label: 'Total experience', value: '8+ years' },
            { label: 'Companies', value: '6' },
            { label: 'Countries', value: '2 (India, Poland)' },
            { label: 'Current role', value: 'Nordea · Gdansk' },
            { label: 'Specialization', value: 'AWS · SRE · DevSecOps' },
          ].map(stat => (
            <div key={stat.label} style={{
              backgroundColor: '#ffffff',
              border: '1px solid #d5dbdb',
              borderRadius: '3px',
              padding: '10px 16px',
              flex: '1',
              minWidth: '140px',
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
                  <th style={{ ...thStyle, width: '28px' }}></th>
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
                {EXPERIENCE.map((exp, i) => {
                  const isExpanded = expanded.has(exp.id)
                  const rowBg = i % 2 === 0 ? '#ffffff' : '#fafafa'
                  return (
                    <>
                      <tr
                        key={exp.id}
                        style={{ backgroundColor: rowBg, cursor: 'pointer' }}
                        onClick={() => toggleRow(exp.id)}
                      >
                        <td style={{ ...tdStyle, padding: '12px 6px 12px 14px', fontSize: '11px', color: '#687078' }}>
                          {isExpanded ? '▾' : '▸'}
                        </td>
                        <td style={{ ...tdStyle, padding: '12px 14px' }}>
                          <input type="checkbox" style={{ cursor: 'pointer' }} onClick={e => e.stopPropagation()} />
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
                      {isExpanded && (
                        <tr key={exp.id + '-details'} style={{ backgroundColor: i % 2 === 0 ? '#fafeff' : '#f9f9f9' }}>
                          <td colSpan={9} style={{ ...tdStyle, padding: '0 14px 14px 68px', borderBottom: '2px solid #eaeded' }}>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '5px', paddingTop: '6px' }}>
                              {exp.highlights.map((h, hi) => (
                                <div key={hi} style={{
                                  display: 'flex',
                                  alignItems: 'flex-start',
                                  gap: '8px',
                                  fontSize: '12px',
                                  color: '#545b64',
                                }}>
                                  <span style={{ color: '#ec7211', flexShrink: 0, marginTop: '1px' }}>▸</span>
                                  {h}
                                </div>
                              ))}
                            </div>
                          </td>
                        </tr>
                      )}
                    </>
                  )
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
