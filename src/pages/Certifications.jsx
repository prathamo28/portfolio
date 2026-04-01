const CERTS = [
  {
    name: 'AWS Certified Solutions Architect – Professional',
    abbr: 'SAP',
    issuer: 'Amazon Web Services',
    level: 'Professional',
    issued: 'Dec 2023',
    expires: 'Dec 2026',
    status: 'Active',
    credId: 'SAP-C02',
    color: '#ec7211',
    verifyUrl: 'https://aws.amazon.com/certification/certified-solutions-architect-professional/',
  },
  {
    name: 'AWS Certified DevOps Engineer – Professional',
    abbr: 'DOP',
    issuer: 'Amazon Web Services',
    level: 'Professional',
    issued: 'Mar 2024',
    expires: 'Mar 2027',
    status: 'Active',
    credId: 'DOP-C02',
    color: '#ec7211',
    verifyUrl: 'https://aws.amazon.com/certification/certified-devops-engineer-professional/',
  },
  {
    name: 'Certified Kubernetes Administrator (CKA)',
    abbr: 'CKA',
    issuer: 'Cloud Native Computing Foundation',
    level: 'Professional',
    issued: 'Aug 2023',
    expires: 'Aug 2026',
    status: 'Active',
    credId: 'CKA-2023',
    color: '#326ce5',
    verifyUrl: 'https://www.cncf.io/certification/cka/',
  },
  {
    name: 'AWS Certified Security – Specialty',
    abbr: 'SCS',
    issuer: 'Amazon Web Services',
    level: 'Specialty',
    issued: 'Jun 2023',
    expires: 'Jun 2026',
    status: 'Active',
    credId: 'SCS-C02',
    color: '#d13212',
    verifyUrl: 'https://aws.amazon.com/certification/certified-security-specialty/',
  },
]

const thStyle = {
  padding: '8px 16px',
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
  padding: '12px 16px',
  fontSize: '13px',
  color: '#16191f',
  verticalAlign: 'middle',
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
  summaryRow: { display: 'flex', gap: '16px', marginBottom: '16px' },
  summaryCard: {
    backgroundColor: '#ffffff',
    border: '1px solid #d5dbdb',
    borderRadius: '3px',
    padding: '16px 20px',
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
    flex: 1,
  },
  btnSecondary: { backgroundColor: '#ffffff', border: '1px solid #aab7b8', borderRadius: '3px', color: '#16191f', fontSize: '13px', padding: '5px 12px', cursor: 'pointer', fontFamily: 'inherit' },
}

export default function Certifications({ navigate }) {
  return (
    <div style={s.page}>
      <div style={s.secondaryNav}>
        <nav style={s.breadcrumb} aria-label="Breadcrumb">
          <button style={s.breadcrumbLink} onClick={() => navigate('home')}>Console Home</button>
          <span style={s.breadcrumbSep}>›</span>
          <span style={{ color: '#16191f' }}>Certifications</span>
        </nav>
      </div>

      <div style={s.pageContent}>
        <div style={s.pageHeader}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <h1 style={s.pageTitle}>Certifications</h1>
            <span style={{ backgroundColor: '#f0f4ff', color: '#0073bb', fontSize: '11px', padding: '1px 7px', borderRadius: '10px', border: '1px solid #d0e4f0', fontWeight: 600 }}>
              {CERTS.length}
            </span>
          </div>
          <div style={{ display: 'flex', gap: '8px' }}>
            <button style={s.btnSecondary}>Export</button>
            <button style={s.btnSecondary}>Verify credentials</button>
          </div>
        </div>

        {/* Summary cards */}
        <div style={s.summaryRow}>
          <div style={s.summaryCard}>
            <div style={{ fontSize: '40px', fontWeight: 700, color: '#1d8102', lineHeight: 1 }}>4</div>
            <div>
              <div style={{ fontSize: '14px', fontWeight: 600, color: '#16191f' }}>Active certifications</div>
              <div style={{ fontSize: '12px', color: '#1d8102', marginTop: '3px' }}>● All current · No expirations within 90 days</div>
            </div>
          </div>
          <div style={s.summaryCard}>
            <div style={{ fontSize: '40px', fontWeight: 700, color: '#ec7211', lineHeight: 1 }}>3</div>
            <div>
              <div style={{ fontSize: '14px', fontWeight: 600, color: '#16191f' }}>AWS Certifications</div>
              <div style={{ fontSize: '12px', color: '#687078', marginTop: '3px' }}>Professional &amp; Specialty level</div>
            </div>
          </div>
          <div style={s.summaryCard}>
            <div style={{ fontSize: '40px', fontWeight: 700, color: '#326ce5', lineHeight: 1 }}>1</div>
            <div>
              <div style={{ fontSize: '14px', fontWeight: 600, color: '#16191f' }}>CNCF Certifications</div>
              <div style={{ fontSize: '12px', color: '#687078', marginTop: '3px' }}>Kubernetes Administrator</div>
            </div>
          </div>
        </div>

        {/* Table */}
        <div style={s.panel}>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr>
                  <th style={{ ...thStyle, width: '40px' }}>
                    <input type="checkbox" style={{ cursor: 'pointer' }} />
                  </th>
                  <th style={thStyle}>Certification</th>
                  <th style={thStyle}>Issuer</th>
                  <th style={thStyle}>Level</th>
                  <th style={thStyle}>Issued</th>
                  <th style={thStyle}>Expires</th>
                  <th style={thStyle}>Status</th>
                  <th style={thStyle}>Actions</th>
                </tr>
              </thead>
              <tbody>
                {CERTS.map((c, i) => (
                  <tr key={c.credId} style={{ backgroundColor: i % 2 === 0 ? '#ffffff' : '#fafafa' }}>
                    <td style={tdStyle}>
                      <input type="checkbox" style={{ cursor: 'pointer' }} />
                    </td>
                    <td style={tdStyle}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <div style={{
                          width: '32px', height: '32px',
                          backgroundColor: c.color,
                          borderRadius: '3px',
                          display: 'flex', alignItems: 'center', justifyContent: 'center',
                          color: '#fff', fontSize: '10px', fontWeight: 700,
                          flexShrink: 0,
                        }}>
                          {c.abbr}
                        </div>
                        <div>
                          <div style={{ color: '#0073bb', fontWeight: 600, fontSize: '13px' }}>
                            {c.name}
                          </div>
                          <div style={{ fontSize: '11px', color: '#687078', marginTop: '1px' }}>
                            ID: {c.credId}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td style={{ ...tdStyle, color: '#545b64' }}>{c.issuer}</td>
                    <td style={tdStyle}>
                      <span style={{
                        backgroundColor: c.level === 'Professional' ? '#fff8f2' : '#f5f0ff',
                        color: c.level === 'Professional' ? '#ec7211' : '#7b42bc',
                        fontSize: '11px', padding: '2px 7px',
                        borderRadius: '2px',
                        border: `1px solid ${c.level === 'Professional' ? '#ec721140' : '#7b42bc40'}`,
                        fontWeight: 600,
                      }}>
                        {c.level}
                      </span>
                    </td>
                    <td style={{ ...tdStyle, color: '#545b64', fontSize: '12px' }}>{c.issued}</td>
                    <td style={{ ...tdStyle, color: '#545b64', fontSize: '12px' }}>{c.expires}</td>
                    <td style={tdStyle}>
                      <span style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', fontSize: '12px', color: '#1d8102' }}>
                        <span style={{ display: 'inline-block', width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#1d8102' }} />
                        {c.status}
                      </span>
                    </td>
                    <td style={tdStyle}>
                      <a
                        href={c.verifyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ fontSize: '12px', color: '#0073bb' }}
                      >
                        Verify ↗
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
