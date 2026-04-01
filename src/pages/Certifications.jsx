const CERTS = [
  {
    name: 'AWS Certified Security – Specialty',
    abbr: 'SCS',
    issuer: 'Amazon Web Services',
    level: 'Specialty',
    issued: '–',
    expires: 'Active',
    status: 'Active',
    credId: 'SCS-C02',
    color: '#d13212',
    verifyUrl: 'https://aws.amazon.com/certification/certified-security-specialty/',
  },
  {
    name: 'AWS Certified Solutions Architect – Associate',
    abbr: 'SAA',
    issuer: 'Amazon Web Services',
    level: 'Associate',
    issued: '–',
    expires: 'Active',
    status: 'Active',
    credId: 'SAA-C03',
    color: '#ec7211',
    verifyUrl: 'https://aws.amazon.com/certification/certified-solutions-architect-associate/',
  },
  {
    name: 'HashiCorp Certified: Terraform Associate (002)',
    abbr: 'TF',
    issuer: 'HashiCorp',
    level: 'Associate',
    issued: '–',
    expires: 'Active',
    status: 'Active',
    credId: 'TA-002',
    color: '#7b42bc',
    verifyUrl: 'https://www.hashicorp.com/certifications/terraform-associate',
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

const LEVEL_STYLES = {
  Specialty:    { bg: '#fff0ee', color: '#d13212', border: '#d1321240' },
  Professional: { bg: '#fff8f2', color: '#ec7211', border: '#ec721140' },
  Associate:    { bg: '#f5f0ff', color: '#7b42bc', border: '#7b42bc40' },
  Foundational: { bg: '#f0fff4', color: '#1d8102', border: '#1d810240' },
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
  summaryRow: { display: 'flex', gap: '16px', marginBottom: '16px', flexWrap: 'wrap' },
  summaryCard: {
    backgroundColor: '#ffffff',
    border: '1px solid #d5dbdb',
    borderRadius: '3px',
    padding: '16px 20px',
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
    flex: 1,
    minWidth: '180px',
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
            <div style={{ fontSize: '40px', fontWeight: 700, color: '#1d8102', lineHeight: 1 }}>3</div>
            <div>
              <div style={{ fontSize: '14px', fontWeight: 600, color: '#16191f' }}>Total certifications</div>
              <div style={{ fontSize: '12px', color: '#1d8102', marginTop: '3px' }}>● All current · Active</div>
            </div>
          </div>
          <div style={s.summaryCard}>
            <div style={{ fontSize: '40px', fontWeight: 700, color: '#ec7211', lineHeight: 1 }}>2</div>
            <div>
              <div style={{ fontSize: '14px', fontWeight: 600, color: '#16191f' }}>AWS Certifications</div>
              <div style={{ fontSize: '12px', color: '#687078', marginTop: '3px' }}>Security Specialty · SAA</div>
            </div>
          </div>
          <div style={s.summaryCard}>
            <div style={{ fontSize: '40px', fontWeight: 700, color: '#7b42bc', lineHeight: 1 }}>1</div>
            <div>
              <div style={{ fontSize: '14px', fontWeight: 600, color: '#16191f' }}>HashiCorp</div>
              <div style={{ fontSize: '12px', color: '#687078', marginTop: '3px' }}>Terraform Associate (002)</div>
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
                  <th style={thStyle}>Status</th>
                  <th style={thStyle}>Actions</th>
                </tr>
              </thead>
              <tbody>
                {CERTS.map((c, i) => {
                  const lvl = LEVEL_STYLES[c.level] || LEVEL_STYLES.Associate
                  return (
                    <tr key={c.credId} style={{ backgroundColor: i % 2 === 0 ? '#ffffff' : '#fafafa' }}>
                      <td style={tdStyle}>
                        <input type="checkbox" style={{ cursor: 'pointer' }} />
                      </td>
                      <td style={tdStyle}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                          <div style={{
                            width: '36px', height: '36px',
                            backgroundColor: c.color,
                            borderRadius: '3px',
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                            color: '#fff', fontSize: '9px', fontWeight: 700,
                            flexShrink: 0,
                            textAlign: 'center',
                            lineHeight: 1.2,
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
                          backgroundColor: lvl.bg,
                          color: lvl.color,
                          fontSize: '11px', padding: '2px 7px',
                          borderRadius: '2px',
                          border: `1px solid ${lvl.border}`,
                          fontWeight: 600,
                        }}>
                          {c.level}
                        </span>
                      </td>
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
