'use client'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import React from 'react'

export default function LandingPage() {
  const router = useRouter()

  const cardStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '0.75rem',
    padding: '2rem 2.5rem',
    border: '1px solid #333',
    borderRadius: '12px',
    background: '#111118',
    color: '#f0f0f0',
    textDecoration: 'none',
    cursor: 'pointer',
    minWidth: '180px',
  }

  const hoverAnimation = {
    scale: 1.05, 
    y: -4,
    borderColor: '#00d4ff',
    transition: { duration: 0.2 }
  }

  
  return (
    <main style={{
      minHeight: '80vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      background: '#0a0a0f',
      gap: '2rem',
      padding: '2rem',
      scale: 1.2,
    }}>

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={{ textAlign: 'center' }}
      >
        <h1 style={{ color: '#f0f0f0', fontSize: '2rem', fontWeight: 500, margin: 0 }}>
          Phetklao Champarath
        </h1>
        <p style={{ color: '#888899', fontSize: '1rem', marginTop: '0.5rem' }}>
          YZU · International Bachelor Program in Informatics
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap', justifyContent: 'center' }}
      >
        
        <motion.a 
          href="/Portfolio.pdf"
          target="_blank"
          rel="noopener noreferrer"
          style={cardStyle}
          whileHover={hoverAnimation}
        >
          <span style={{ fontSize: '2.5rem' }}>📄</span>
          <span style={{ fontWeight: 500 }}>PDF Portfolio</span>
          <span style={{ fontSize: '0.8rem', color: '#888899' }}>Original document</span>
        </motion.a>

        {/*<motion.button
          onClick={() => router.push('/portfolio')}
          style={{ ...cardStyle, outline: 'none' }}
          whileHover={hoverAnimation}
        >
          <span style={{ fontSize: '2.5rem' }}>🌐</span>
          <span style={{ fontWeight: 500 }}>Web Portfolio</span>
          <span style={{ fontSize: '0.8rem', color: '#888899' }}>Interactive version</span>
        </motion.button>
        */}
        
      </motion.div>

    </main>
  )
}