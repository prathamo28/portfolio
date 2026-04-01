import { useState } from 'react'

const ALL_PROJECTS = [
  {
    id: 'mlops-pipeline-v2',
    desc: 'End-to-end ML training + deployment pipeline on AWS SageMaker',
    stack: 'Python, SageMaker, Step Functions, ECR, S3',
    type: 'MLOps',
    status: 'running',
    region: 'eu-central-1',
    repo: 'https://github.com/prathamo28/mlops-pipeline',
  },
  {
    id: 'devops-agent-poc',
    desc: 'AI-powered DevOps automation agent with Claude API + AWS Bedrock',
    stack: 'Python, AWS Bedrock, Lambda, DynamoDB, API Gateway',
    type: 'AI/DevOps',
    status: 'active',
    region: 'eu-west-1',
    repo: 'https://github.com/prathamo28',
  },
  {
    id: 'cloud-cost-optimizer',
    desc: 'Automated tagging, rightsizing, and savings plans management',
    stack: 'Terraform, AWS Cost Explorer, Lambda, SNS, EventBridge',
    type: 'FinOps',
    status: 'running',
    region: 'eu-central-1',
    repo: 'https://github.com/prathamo28',
  },
  {
    id: 'k8s-security-hardening',
    desc: 'CIS benchmark automation for EKS and self-managed Kubernetes clusters',
    stack: 'Kubernetes, Falco, OPA Gatekeeper, Helm, Terraform',
    type: 'Security',
    status: 'stopped',
    region: 'eu-west-1',
    repo: 'https://github.com/prathamo28',
  },
  {
    id: 'infra-as-code-templates',
    desc: 'Reusable Terraform modules for AWS landing zone and multi-account setup',
    stack: 'Terraform, AWS Organizations, Control Tower, SCPs',
    type: 'IaC',
    status: 'active',
    region: 'eu-central-1',
    repo: 'https://github.com/prathamo28',
  },
  {
    id: 'platform-eng-toolkit',
    desc: 'Internal developer platform with self-service infra provisioning',
    stack: 'Python, FastAPI, Terraform Cloud, GitHub Actions, Backstage',
    type: 'Platform',
    status: 'running',
    region: 'eu-west-1',
    repo: 'https://github.com/prathamo28',
  },
]

const STATUS_STYLES = {
  running: { dot: '#1d8102', text: 'running' },
  active:  { dot: '#ec7211', text: 'active' },
  stopped: { dot: '#0073bb', text: 'stopped' },
}

function StatusBadge({ status }) {
  const st = STATUS_STYLES[status] || STATUS_STYLES.stopped
  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', fontSize: '12px' }}>
      <span style={{
        display: 'inline-block',
        width: '8px', height: '8px',
        borderRadius: '50%',
        backgroundColor: st.dot,
        flexShrink: 0,
      }} />
      {st.text}
    </span>
  )
}

const thStyle = {
  padding: '7px 14px',
  textAlign: 'left',
  fontSize: '11px',
  fontWeight: 700,
  color: '#687078',
  textTransform: 'uppercase',
  letterSpacing: '0.3px',
  borderBottom: '2px solid #eaeded',
  whiteSpace: 'nowrap',
  backgroundColor: '#fafafa',
  userSelect: 'none',
}

const tdStyle = {
  padding: '9px 14px',
  fontSize: '13px',
  color: '#16191f',
  verticalAlign: 'middle',
  borderBottom: '1px solid #eaeded',
}

const s = {
  page: { minHeight: 'calc(100vh - 36px)', backgroundColor: '#f2f3f3' },
  secondaryNav: {
    backgroundColor: '#ffffff',
    borderBottom: '1px solid #d5dbdb',
    height: '34px',
    display: 'flex',
    alignItems: 'center',
    padding: '0 24px',
  },
  breadcrumb: { display: 'flex', alignItems: 'center', gap: '4px', fontSize: '12px' },
  breadcrumbLink: { color: '#0073bb', background: 'none', border: 'none', cursor: 'pointer', fontSize: '12px', padding: 0, fontFamily: 'inherit' },
  breadcrumbSep: { color: '#ec7211', fontSize: '11px', fontWeight: 700 },
  pageContent: { padding: '20px 24px' },
  pageHeader: { display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px', flexWrap: 'wrap', gap: '10px' },
  pageTitle: { fontSize: '20px', fontWeight: 700, color: '#16191f' },
  headerActions: { display: 'flex', gap: '8px' },
  btnSecondary: { backgroundColor: '#ffffff', border: '1px solid #aab7b8', borderRadius: '3px', color: '#16191f', fontSize: '13px', padding: '5px 12px', cursor: 'pointer', fontFamily: 'inherit' },
  btnPrimary: { backgroundColor: '#ec7211', border: '1px solid #c45000', borderRadius: '3px', color: '#ffffff', fontSize: '13px', padding: '5px 12px', cursor: 'pointer', fontFamily: 'inherit' },
  panel: { backgroundColor: '#ffffff', border: '1px solid #d5dbdb', borderRadius: '3px', overflow: 'hidden' },
  toolbar: { display: 'flex', alignItems: 'center', gap: '8px', padding: '10px 14px', borderBottom: '1px solid #eaeded', flexWrap: 'wrap' },
  filterInput: { display: 'flex', alignItems: 'center', border: '1px solid #aab7b8', borderRadius: '2px', backgroundColor: '#fff', padding: '0 8px', height: '28px', flex: 1, minWidth: '200px', maxWidth: '320px' },
  count: { fontSize: '12px', color: '#687078', marginLeft: 'auto' },
}

export default function Projects({ navigate }) {
  const [filter, setFilter] = useState('')
  const [selected, setSelected] = useState([])

  const filtered = ALL_PROJECTS.filter(p =>
    !filter ||
    p.id.toLowerCase().includes(filter.toLowerCase()) ||
    p.desc.toLowerCase().includes(filter.toLowerCase()) ||
    p.stack.toLowerCase().includes(filter.toLowerCase()) ||
    p.type.toLowerCase().includes(filter.toLowerCase())
  )

  const toggleAll = () => {
    setSelected(selected.length === filtered.length ? [] : filtered.map(p => p.id))
  }

  const toggleOne = (id) => {
    setSelected(prev => prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id])
  }

  return (
    <div style={s.page}>
      <div style={s.secondaryNav}>
        <nav style={s.breadcrumb} aria-label="Breadcrumb">
          <button style={s.breadcrumbLink} onClick={() => navigate('home')}>Console Home</button>
          <span style={s.breadcrumbSep}>›</span>
          <span style={{ color: '#16191f' }}>Projects</span>
        </nav>
      </div>

      <div style={s.pageContent}>
        <div style={s.pageHeader}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <h1 style={s.pageTitle}>Projects</h1>
            <span style={{
              backgroundColor: '#f0f4ff',
              color: '#0073bb',
              fontSize: '11px',
              padding: '1px 7px',
              borderRadius: '10px',
              border: '1px solid #d0e4f0',
              fontWeight: 600,
            }}>
              {ALL_PROJECTS.length}
            </span>
          </div>
          <div style={s.headerActions}>
            <button style={s.btnSecondary}>Actions ▾</button>
            <button style={s.btnSecondary}>Export</button>
            <button style={s.btnPrimary}>+ Launch project</button>
          </div>
        </div>

        <div style={s.panel}>
          {/* Toolbar */}
          <div style={s.toolbar}>
            <div style={s.filterInput}>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#687078" strokeWidth="2.5" style={{ marginRight: '6px', flexShrink: 0 }}>
                <circle cx="11" cy="11" r="7"/><line x1="16.5" y1="16.5" x2="22" y2="22"/>
              </svg>
              <input
                placeholder="Filter by ID, description, type..."
                value={filter}
                onChange={e => setFilter(e.target.value)}
                style={{ border: 'none', outline: 'none', fontSize: '13px', color: '#16191f', width: '100%', background: 'transparent' }}
              />
            </div>
            {selected.length > 0 && (
              <span style={{ fontSize: '12px', color: '#545b64' }}>
                {selected.length} selected
              </span>
            )}
            <span style={s.count}>
              Showing {filtered.length} of {ALL_PROJECTS.length} projects
            </span>
          </div>

          {/* Table */}
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr>
                  <th style={{ ...thStyle, width: '40px' }}>
                    <input
                      type="checkbox"
                      checked={selected.length === filtered.length && filtered.length > 0}
                      onChange={toggleAll}
                      style={{ cursor: 'pointer' }}
                    />
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
                {filtered.length === 0 ? (
                  <tr>
                    <td colSpan={7} style={{ ...tdStyle, textAlign: 'center', color: '#687078', padding: '32px' }}>
                      No projects match your filter
                    </td>
                  </tr>
                ) : (
                  filtered.map(p => {
                    const isSelected = selected.includes(p.id)
                    return (
                      <tr
                        key={p.id}
                        style={{ backgroundColor: isSelected ? '#f0f7ff' : '#ffffff' }}
                      >
                        <td style={tdStyle}>
                          <input
                            type="checkbox"
                            checked={isSelected}
                            onChange={() => toggleOne(p.id)}
                            style={{ cursor: 'pointer' }}
                          />
                        </td>
                        <td style={tdStyle}>
                          <a
                            href={p.repo}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ color: '#0073bb', fontFamily: 'monospace', fontSize: '12px' }}
                          >
                            {p.id}
                          </a>
                        </td>
                        <td style={{ ...tdStyle, color: '#545b64', maxWidth: '240px' }}>
                          {p.desc}
                        </td>
                        <td style={{ ...tdStyle, color: '#545b64', fontSize: '11px', maxWidth: '200px' }}>
                          {p.stack}
                        </td>
                        <td style={tdStyle}>
                          <span style={{
                            backgroundColor: '#f0f4ff',
                            color: '#0073bb',
                            fontSize: '11px',
                            padding: '2px 7px',
                            borderRadius: '2px',
                            border: '1px solid #d0e4f0',
                          }}>
                            {p.type}
                          </span>
                        </td>
                        <td style={tdStyle}>
                          <StatusBadge status={p.status} />
                        </td>
                        <td style={{ ...tdStyle, fontSize: '12px', color: '#545b64', fontFamily: 'monospace' }}>
                          {p.region}
                        </td>
                      </tr>
                    )
                  })
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
