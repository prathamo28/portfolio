const NAV_SECTIONS = [
  {
    label: 'Portfolio',
    items: [
      { id: 'home', label: 'Console Home', icon: '⌂' },
    ],
  },
  {
    label: 'Professional',
    items: [
      { id: 'skills', label: 'Skills', icon: '◈' },
      { id: 'projects', label: 'Projects', icon: '◻' },
      { id: 'experience', label: 'Experience', icon: '◇' },
      { id: 'certifications', label: 'Certifications', icon: '◉' },
    ],
  },
  {
    label: 'Connect',
    items: [
      { id: 'github', label: 'GitHub', icon: '⌬', external: 'https://github.com/prathamo28' },
      { id: 'linkedin', label: 'LinkedIn', icon: '⊡', external: 'https://linkedin.com/in/prathamesh-mokal' },
    ],
  },
]

const styles = {
  sidebar: {
    width: '220px',
    minWidth: '220px',
    backgroundColor: '#ffffff',
    borderRight: '1px solid #d5dbdb',
    minHeight: 'calc(100vh - 36px)',
    display: 'flex',
    flexDirection: 'column',
    userSelect: 'none',
    position: 'relative',
    zIndex: 1,
  },
  sidebarHeader: {
    padding: '12px 16px 8px',
    borderBottom: '1px solid #eaeded',
    backgroundColor: '#fafafa',
  },
  sidebarTitle: {
    fontSize: '12px',
    fontWeight: 700,
    color: '#16191f',
    textTransform: 'uppercase',
    letterSpacing: '0.5px',
  },
  sidebarSubtitle: {
    fontSize: '11px',
    color: '#687078',
    marginTop: '2px',
  },
  section: {
    padding: '0',
  },
  sectionLabel: {
    padding: '10px 16px 4px',
    fontSize: '11px',
    fontWeight: 700,
    color: '#687078',
    textTransform: 'uppercase',
    letterSpacing: '0.5px',
    display: 'block',
  },
  navItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    padding: '6px 16px 6px 12px',
    fontSize: '13px',
    color: '#16191f',
    cursor: 'pointer',
    background: 'transparent',
    border: 'none',
    width: '100%',
    textAlign: 'left',
    borderLeft: '3px solid transparent',
    textDecoration: 'none',
    lineHeight: 1.4,
    transition: 'background 0.1s',
  },
  navItemActive: {
    borderLeft: '3px solid #ec7211',
    backgroundColor: '#f0f4f8',
    fontWeight: 600,
    color: '#0073bb',
  },
  navItemHover: {
    backgroundColor: '#f5f5f5',
  },
  navIcon: {
    fontSize: '14px',
    width: '16px',
    textAlign: 'center',
    flexShrink: 0,
    color: '#687078',
  },
  navIconActive: {
    color: '#ec7211',
  },
  divider: {
    height: '1px',
    backgroundColor: '#eaeded',
    margin: '6px 0',
  },
  footer: {
    marginTop: 'auto',
    padding: '12px 16px',
    borderTop: '1px solid #eaeded',
    fontSize: '11px',
    color: '#687078',
  },
  statusDot: {
    display: 'inline-block',
    width: '8px',
    height: '8px',
    borderRadius: '50%',
    backgroundColor: '#1d8102',
    marginRight: '5px',
  },
}

export default function Sidebar({ currentPage, navigate }) {
  return (
    <aside style={styles.sidebar} aria-label="Portfolio navigation">
      <div style={styles.sidebarHeader}>
        <div style={styles.sidebarTitle}>Skills Console</div>
        <div style={styles.sidebarSubtitle}>Prathamesh Mokal</div>
      </div>

      {NAV_SECTIONS.map((section, si) => (
        <div key={si} style={styles.section}>
          <span style={styles.sectionLabel}>{section.label}</span>
          {section.items.map(item => {
            if (item.external) {
              return (
                <a
                  key={item.id}
                  href={item.external}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={styles.navItem}
                >
                  <span style={styles.navIcon}>{item.icon}</span>
                  {item.label}
                  <span style={{ marginLeft: 'auto', fontSize: '10px', color: '#687078' }}>↗</span>
                </a>
              )
            }
            const isActive = currentPage === item.id
            return (
              <button
                key={item.id}
                onClick={() => navigate(item.id)}
                style={{
                  ...styles.navItem,
                  ...(isActive ? styles.navItemActive : {}),
                }}
                aria-current={isActive ? 'page' : undefined}
              >
                <span style={{
                  ...styles.navIcon,
                  ...(isActive ? styles.navIconActive : {}),
                }}>
                  {item.icon}
                </span>
                {item.label}
              </button>
            )
          })}
          {si < NAV_SECTIONS.length - 1 && <div style={styles.divider} />}
        </div>
      ))}

      <div style={styles.footer}>
        <span style={styles.statusDot} />
        <span>Open to opportunities</span>
        <div style={{ marginTop: '6px', color: '#687078' }}>
          Poland · Remote
        </div>
      </div>
    </aside>
  )
}
