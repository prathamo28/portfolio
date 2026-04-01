import { useState } from 'react'

const styles = {
  nav: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1000,
    height: '36px',
    backgroundColor: '#232f3e',
    display: 'flex',
    alignItems: 'center',
    padding: '0 16px',
    gap: '12px',
    boxShadow: '0 1px 3px rgba(0,0,0,0.4)',
  },
  logo: {
    display: 'flex',
    alignItems: 'center',
    gap: '4px',
    cursor: 'pointer',
    textDecoration: 'none',
    flexShrink: 0,
  },
  logoText: {
    color: '#ec7211',
    fontWeight: 700,
    fontSize: '18px',
    letterSpacing: '-0.5px',
    lineHeight: 1,
    fontFamily: "'Open Sans', Arial, sans-serif",
  },
  logoSmile: {
    color: '#ec7211',
    fontSize: '11px',
    marginTop: '-2px',
  },
  gridIcon: {
    color: '#d5dbdb',
    fontSize: '16px',
    cursor: 'pointer',
    padding: '4px 6px',
    borderRadius: '2px',
    flexShrink: 0,
    lineHeight: 1,
    display: 'flex',
    alignItems: 'center',
  },
  searchBar: {
    flex: 1,
    maxWidth: '580px',
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#3a4a5c',
    border: '1px solid #4a5a6c',
    borderRadius: '2px',
    height: '24px',
    padding: '0 8px',
    gap: '6px',
  },
  searchIcon: {
    color: '#9eaab6',
    fontSize: '12px',
    flexShrink: 0,
  },
  searchInput: {
    background: 'transparent',
    border: 'none',
    outline: 'none',
    color: '#d5dbdb',
    fontSize: '13px',
    width: '100%',
    fontFamily: 'inherit',
  },
  rightSection: {
    display: 'flex',
    alignItems: 'center',
    gap: '4px',
    marginLeft: 'auto',
    flexShrink: 0,
  },
  iconBtn: {
    color: '#d5dbdb',
    background: 'transparent',
    border: 'none',
    padding: '4px 7px',
    borderRadius: '2px',
    cursor: 'pointer',
    fontSize: '14px',
    display: 'flex',
    alignItems: 'center',
    lineHeight: 1,
  },
  separator: {
    width: '1px',
    height: '18px',
    backgroundColor: '#4a5a6c',
    margin: '0 4px',
  },
  pill: {
    color: '#d5dbdb',
    background: 'transparent',
    border: 'none',
    padding: '4px 6px',
    borderRadius: '2px',
    cursor: 'pointer',
    fontSize: '13px',
    display: 'flex',
    alignItems: 'center',
    gap: '3px',
    whiteSpace: 'nowrap',
    lineHeight: 1,
  },
  pillOrange: {
    color: '#ec7211',
  },
  caret: {
    fontSize: '9px',
    opacity: 0.8,
  },
}

export default function TopNav({ navigate, currentPage }) {
  const [searchVal, setSearchVal] = useState('')

  return (
    <nav style={styles.nav} role="navigation" aria-label="AWS Console Navigation">
      {/* Logo */}
      <button
        style={styles.logo}
        onClick={() => navigate('home')}
        title="Console Home"
        aria-label="AWS Console Home"
      >
        <span style={styles.logoText}>aws</span>
      </button>

      {/* Grid / Services icon */}
      <button style={styles.gridIcon} title="All services" aria-label="Services menu">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="#d5dbdb">
          <rect x="1" y="1" width="5" height="5" rx="0.5"/>
          <rect x="10" y="1" width="5" height="5" rx="0.5"/>
          <rect x="1" y="10" width="5" height="5" rx="0.5"/>
          <rect x="10" y="10" width="5" height="5" rx="0.5"/>
        </svg>
      </button>

      {/* Search */}
      <div style={styles.searchBar} role="search">
        <svg style={styles.searchIcon} width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#9eaab6" strokeWidth="2.5">
          <circle cx="11" cy="11" r="7"/>
          <line x1="16.5" y1="16.5" x2="22" y2="22"/>
        </svg>
        <input
          style={styles.searchInput}
          type="text"
          placeholder="Search skills, projects, experience..."
          value={searchVal}
          onChange={e => setSearchVal(e.target.value)}
          aria-label="Search"
        />
        <span style={{ color: '#687078', fontSize: '10px', flexShrink: 0 }}>[/]</span>
      </div>

      {/* Right section */}
      <div style={styles.rightSection}>
        {/* Bell */}
        <button style={styles.iconBtn} title="Notifications" aria-label="Notifications">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#d5dbdb" strokeWidth="2">
            <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/>
            <path d="M13.73 21a2 2 0 0 1-3.46 0"/>
          </svg>
        </button>

        {/* Help */}
        <button style={styles.iconBtn} title="Help" aria-label="Help">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#d5dbdb" strokeWidth="2">
            <circle cx="12" cy="12" r="10"/>
            <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/>
            <line x1="12" y1="17" x2="12.01" y2="17"/>
          </svg>
        </button>

        {/* Settings */}
        <button style={styles.iconBtn} title="Settings" aria-label="Settings">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#d5dbdb" strokeWidth="2">
            <circle cx="12" cy="12" r="3"/>
            <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/>
          </svg>
        </button>

        <div style={styles.separator} />

        {/* Region */}
        <button style={styles.pill} title="Region" aria-label="AWS Region">
          eu-central-1
          <span style={styles.caret}>▾</span>
        </button>

        <div style={styles.separator} />

        {/* Account */}
        <button style={{ ...styles.pill, ...styles.pillOrange }} title="Account" aria-label="Account">
          Prathamesh Mokal @ DevOps/SRE
          <span style={{ ...styles.caret, color: '#ec7211' }}>▾</span>
        </button>
      </div>
    </nav>
  )
}
