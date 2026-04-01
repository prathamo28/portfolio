/* Skills page — styled like AWS Service detail page */

const s = {
  page: {
    padding: '0',
    minHeight: 'calc(100vh - 36px)',
    backgroundColor: '#f2f3f3',
  },
  secondaryNav: {
    backgroundColor: '#ffffff',
    borderBottom: '1px solid #d5dbdb',
    height: '34px',
    display: 'flex',
    alignItems: 'center',
    padding: '0 24px',
    gap: '0',
  },
  breadcrumb: {
    display: 'flex',
    alignItems: 'center',
    gap: '4px',
    fontSize: '12px',
    color: '#687078',
  },
  breadcrumbLink: {
    color: '#0073bb',
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    fontSize: '12px',
    padding: 0,
    fontFamily: 'inherit',
  },
  breadcrumbSep: {
    color: '#ec7211',
    fontSize: '11px',
    fontWeight: 700,
  },
  pageContent: {
    padding: '20px 24px',
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
  },
  panelsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '16px',
  },
  panel: {
    backgroundColor: '#ffffff',
    border: '1px solid #d5dbdb',
    borderRadius: '3px',
    overflow: 'hidden',
  },
  panelHeader: {
    backgroundColor: '#fafafa',
    borderBottom: '1px solid #eaeded',
    padding: '10px 16px',
    fontSize: '14px',
    fontWeight: 700,
    color: '#16191f',
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
  },
  panelBody: {
    padding: '14px 16px',
  },
  skillRow: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    marginBottom: '12px',
  },
  skillLabel: {
    width: '130px',
    minWidth: '130px',
    fontSize: '13px',
    color: '#16191f',
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
  },
  skillTrack: {
    flex: 1,
    height: '8px',
    backgroundColor: '#eaeded',
    borderRadius: '4px',
    overflow: 'hidden',
  },
  skillFill: {
    height: '100%',
    borderRadius: '4px',
    transition: 'width 0.3s ease',
  },
  skillLevel: {
    width: '44px',
    minWidth: '44px',
    fontSize: '12px',
    fontWeight: 600,
    color: '#545b64',
    textAlign: 'right',
  },
  tagRow: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '5px',
    marginTop: '14px',
    paddingTop: '12px',
    borderTop: '1px solid #eaeded',
  },
  tag: {
    display: 'inline-flex',
    alignItems: 'center',
    padding: '2px 8px',
    borderRadius: '2px',
    fontSize: '11px',
    fontWeight: 400,
    border: '1px solid',
  },
}

const CLOUD_SKILLS = [
  { name: 'AWS', pct: 95, color: '#ec7211', icon: 'AWS' },
  { name: 'Azure', pct: 80, color: '#0078d4', icon: 'AZ' },
  { name: 'GCP', pct: 65, color: '#4285f4', icon: 'GCP' },
]

const CLOUD_TAGS = [
  { label: 'EC2 / EKS', color: '#0073bb' },
  { label: 'VPC / Transit GW', color: '#0073bb' },
  { label: 'IAM / SCPs', color: '#0073bb' },
  { label: 'S3 / CloudFront', color: '#0073bb' },
  { label: 'GuardDuty / Security Hub', color: '#0073bb' },
  { label: 'AWS Backup', color: '#0073bb' },
  { label: 'CloudFormation', color: '#0073bb' },
  { label: 'AKS / Azure DevOps', color: '#0078d4' },
  { label: 'GKE / Cloud Run', color: '#4285f4' },
]

const DEVOPS_SKILLS = [
  { name: 'Kubernetes', pct: 92, color: '#326ce5' },
  { name: 'Terraform', pct: 92, color: '#7b42bc' },
  { name: 'Docker', pct: 88, color: '#0db7ed' },
  { name: 'GitHub Actions', pct: 85, color: '#2088ff' },
  { name: 'Ansible', pct: 80, color: '#d33833' },
  { name: 'Jenkins', pct: 80, color: '#c45000' },
  { name: 'Helm', pct: 78, color: '#326ce5' },
  { name: 'ArgoCD', pct: 75, color: '#e06b32' },
]

const DEVOPS_TAGS = [
  { label: 'Helm', color: '#0073bb' },
  { label: 'ArgoCD', color: '#0073bb' },
  { label: 'Ansible', color: '#0073bb' },
  { label: 'GitLab CI', color: '#0073bb' },
  { label: 'Azure DevOps', color: '#0073bb' },
  { label: 'Python', color: '#0073bb' },
  { label: 'Bash', color: '#0073bb' },
  { label: 'PowerShell', color: '#0073bb' },
  { label: 'ELK Stack', color: '#0073bb' },
]

const SEC_SKILLS = [
  { name: 'DevSecOps', pct: 90, color: '#d13212' },
  { name: 'GuardDuty/Sec Hub', pct: 88, color: '#ec7211' },
  { name: 'SAST / DAST', pct: 88, color: '#7b42bc' },
  { name: 'Datadog', pct: 85, color: '#632ca6' },
  { name: 'Prometheus/Grafana', pct: 85, color: '#e6522c' },
  { name: 'ISO 27001', pct: 82, color: '#1d8102' },
]

const SEC_TAGS = [
  { label: 'AWS GuardDuty', color: '#545b64' },
  { label: 'AWS WAF', color: '#545b64' },
  { label: 'Security Hub', color: '#545b64' },
  { label: 'SAST / DAST', color: '#545b64' },
  { label: 'ISO 27001', color: '#545b64' },
  { label: 'Datadog', color: '#545b64' },
  { label: 'CloudWatch', color: '#545b64' },
  { label: 'PagerDuty', color: '#545b64' },
  { label: 'Incident Response', color: '#545b64' },
]

function SkillBar({ name, pct, color, icon }) {
  return (
    <div style={s.skillRow}>
      <div style={s.skillLabel}>
        {icon && (
          <span style={{
            display: 'inline-flex',
            width: '20px',
            height: '20px',
            backgroundColor: color,
            borderRadius: '2px',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#fff',
            fontSize: '8px',
            fontWeight: 700,
            flexShrink: 0,
          }}>{icon}</span>
        )}
        <span style={{ fontSize: '13px' }}>{name}</span>
      </div>
      <div style={s.skillTrack}>
        <div style={{ ...s.skillFill, width: `${pct}%`, backgroundColor: color }} />
      </div>
      <span style={s.skillLevel}>{pct}%</span>
    </div>
  )
}

function TagRow({ tags }) {
  return (
    <div style={s.tagRow}>
      {tags.map(t => (
        <span key={t.label} style={{
          ...s.tag,
          color: t.color,
          borderColor: t.color + '50',
          backgroundColor: t.color + '10',
        }}>
          {t.label}
        </span>
      ))}
    </div>
  )
}

export default function Skills({ navigate }) {
  return (
    <div style={s.page}>
      {/* Secondary nav / breadcrumb */}
      <div style={s.secondaryNav}>
        <nav style={s.breadcrumb} aria-label="Breadcrumb">
          <button style={s.breadcrumbLink} onClick={() => navigate('home')}>Console Home</button>
          <span style={s.breadcrumbSep}>›</span>
          <span style={{ color: '#16191f' }}>Skills</span>
        </nav>
      </div>

      <div style={s.pageContent}>
        {/* Page header */}
        <div style={s.pageHeader}>
          <div style={s.pageTitleRow}>
            <h1 style={s.pageTitle}>Skills</h1>
            <button style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#687078' }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#687078" strokeWidth="2">
                <circle cx="12" cy="12" r="10"/>
                <line x1="12" y1="8" x2="12" y2="12"/>
                <line x1="12" y1="16" x2="12.01" y2="16"/>
              </svg>
            </button>
          </div>
          <div style={s.headerActions}>
            <button style={s.btnSecondary}>Export</button>
            <button style={s.btnPrimary}>+ Add skill</button>
          </div>
        </div>

        {/* Three panels */}
        <div style={s.panelsGrid}>
          {/* Cloud Platforms */}
          <div style={s.panel}>
            <div style={s.panelHeader}>
              <span style={{ color: '#ec7211' }}>☁</span>
              Cloud Platforms
            </div>
            <div style={s.panelBody}>
              {CLOUD_SKILLS.map(sk => (
                <SkillBar key={sk.name} {...sk} />
              ))}
              <TagRow tags={CLOUD_TAGS} />
            </div>
          </div>

          {/* DevOps & Infrastructure */}
          <div style={s.panel}>
            <div style={s.panelHeader}>
              <span style={{ color: '#0073bb' }}>⚙</span>
              DevOps &amp; Infrastructure
            </div>
            <div style={s.panelBody}>
              {DEVOPS_SKILLS.map(sk => (
                <SkillBar key={sk.name} {...sk} />
              ))}
              <TagRow tags={DEVOPS_TAGS} />
            </div>
          </div>

          {/* Security & Monitoring */}
          <div style={s.panel}>
            <div style={s.panelHeader}>
              <span style={{ color: '#d13212' }}>🛡</span>
              Security &amp; Monitoring
            </div>
            <div style={s.panelBody}>
              {SEC_SKILLS.map(sk => (
                <SkillBar key={sk.name} {...sk} />
              ))}
              <TagRow tags={SEC_TAGS} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
