import { useState } from 'react'

const styles = {
  widget: {
    backgroundColor: '#ffffff',
    border: '1px solid #d5dbdb',
    borderRadius: '3px',
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden',
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    padding: '10px 14px',
    borderBottom: '1px solid #eaeded',
    backgroundColor: '#ffffff',
    gap: '8px',
    minHeight: '40px',
  },
  dragHandle: {
    color: '#aab7b8',
    fontSize: '12px',
    cursor: 'grab',
    letterSpacing: '-1px',
    flexShrink: 0,
    lineHeight: 1,
  },
  title: {
    fontSize: '14px',
    fontWeight: 700,
    color: '#16191f',
    flex: 1,
    lineHeight: 1.3,
  },
  headerActions: {
    display: 'flex',
    alignItems: 'center',
    gap: '4px',
    flexShrink: 0,
  },
  iconBtn: {
    background: 'transparent',
    border: 'none',
    color: '#687078',
    cursor: 'pointer',
    padding: '2px 5px',
    borderRadius: '2px',
    fontSize: '13px',
    lineHeight: 1,
    display: 'flex',
    alignItems: 'center',
  },
  body: {
    flex: 1,
    padding: '0',
  },
  footer: {
    borderTop: '1px solid #eaeded',
    padding: '8px 14px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    minHeight: '36px',
    backgroundColor: '#fafafa',
  },
  footerLink: {
    color: '#0073bb',
    fontSize: '12px',
    cursor: 'pointer',
    background: 'transparent',
    border: 'none',
    padding: 0,
    display: 'flex',
    alignItems: 'center',
    gap: '4px',
    textDecoration: 'none',
  },
  footerRight: {
    color: '#687078',
    fontSize: '12px',
  },
}

export default function Widget({ title, children, footerLink, footerLinkLabel, footerRight, onFooterClick }) {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div style={styles.widget}>
      <div style={styles.header}>
        <span style={styles.dragHandle} title="Drag to reorder">⋮⋮</span>
        <span style={styles.title}>{title}</span>
        <div style={styles.headerActions}>
          <button
            style={styles.iconBtn}
            title="Info"
            aria-label="Widget information"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#687078" strokeWidth="2">
              <circle cx="12" cy="12" r="10"/>
              <line x1="12" y1="8" x2="12" y2="12"/>
              <line x1="12" y1="16" x2="12.01" y2="16"/>
            </svg>
          </button>
          <button
            style={styles.iconBtn}
            title="Widget options"
            aria-label="Widget options"
            onClick={() => setMenuOpen(o => !o)}
          >
            ⋮
          </button>
        </div>
      </div>

      <div style={styles.body}>{children}</div>

      {(footerLink || footerRight) && (
        <div style={styles.footer}>
          {footerLink && (
            <button
              style={styles.footerLink}
              onClick={onFooterClick}
              aria-label={footerLinkLabel || footerLink}
            >
              {footerLinkLabel || footerLink}
              <span style={{ fontSize: '11px' }}>›</span>
            </button>
          )}
          {footerRight && (
            <span style={styles.footerRight}>{footerRight}</span>
          )}
        </div>
      )}
    </div>
  )
}
