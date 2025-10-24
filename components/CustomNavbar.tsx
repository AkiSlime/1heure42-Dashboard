import React from 'react'
import { useColorScheme } from 'sanity'

export function CustomNavbar() {
  const { scheme } = useColorScheme()
  const isDark = scheme === 'dark'

  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0.5rem 1rem',
      borderBottom: `1px solid ${isDark ? '#2a2a2a' : '#e1e5e9'}`,
      backgroundColor: isDark ? '#1a1a1a' : '#ffffff'
    }}>
      <h1 style={{
        margin: 0,
        fontSize: '1.2rem',
        fontWeight: 600,
        color: isDark ? '#ffffff' : '#1a1a1a'
      }}>
        1heure42 Dashboard
      </h1>
    </div>
  )
}