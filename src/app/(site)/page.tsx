'use client'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import React from 'react'
import { logEvent } from 'firebase/analytics'
import { collection, addDoc, serverTimestamp } from 'firebase/firestore'

import { db, analytics } from '../../lib/firebase'

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

  const handleAction = async (buttonType: string) => {
    if (analytics) {
      logEvent(analytics, 'view_portfolio', {
        type: buttonType,
        clicked_at: new Date().toISOString()
      })
    }

    if (db) {
      try {
        let locationData = {
          ip: "Unknown",
          country: "Unknown",
          region: "Unknown",
          city: "Unknown"
        };

        
        try {
          const response = await fetch('https://ipapi.co/json/');
          if (response.ok) {
            const data = await response.json();
            locationData = {
              ip: data.ip || "Unknown",
              country: data.country_name || "Unknown",
              region: data.region || "Unknown",
              city: data.city || "Unknown"
            };
          }
        } catch (e) {
          console.error("Failed to fetch location, proceeding with defaults:", e);
        }

        
        await addDoc(collection(db, 'click_logs'), {
          button: buttonType,              
          timestamp: serverTimestamp(),    
          userAgent: navigator.userAgent,  

          country: locationData.country,
          region: locationData.region,
          city: locationData.city,
          ip: locationData.ip           
        });

      } catch (error) {
        console.error("Error tracking click to Firestore:", error)
      }
    }
  }

  return (
    <main style={{
      minHeight: '100vh', // ปรับเป็น 100vh เพื่อให้กึ่งกลางหน้าจอพอดีทุกอุปกรณ์
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      background: '#0a0a0f',
      gap: '2rem',
      padding: '2rem',
    }}>

      {/* ส่วนหัวชื่อ */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={{ textAlign: 'center' }}
      >
        <h1 style={{ color: '#f0f0f0', fontSize: '2.5rem', fontWeight: 500, margin: 0 }}>
          Phetklao Champarath
        </h1>
        <p style={{ color: '#888899', fontSize: '1.1rem', marginTop: '0.5rem' }}>
          YZU · International Bachelor Program in Informatics
        </p>
      </motion.div>

      {/* กลุ่มปุ่มกดเลือกดูพอร์ต */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap', justifyContent: 'center' }}
      >
        
        {/* การ์ดที่ 1: ดูแบบ PDF */}
        <motion.a 
          href="/Portfolio.pdf"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => handleAction('pdf')}
          style={cardStyle}
          whileHover={hoverAnimation}
        >
          <span style={{ fontSize: '2.5rem' }}>📄</span>
          <span style={{ fontWeight: 500 }}>PDF Portfolio</span>
          <span style={{ fontSize: '0.8rem', color: '#888899' }}>Original document</span>
        </motion.a>

        {
        <motion.button
          onClick={() => {
            handleAction('web');
            router.push('/portfolio');
            
          }}
          style={{ ...cardStyle, outline: 'none' }}
          whileHover={hoverAnimation}
        >
          <span style={{ fontSize: '2.5rem' }}>🌐</span>
          <span style={{ fontWeight: 500 }}>Web Portfolio</span>
          <span style={{ fontSize: '0.8rem', color: '#888899' }}>Interactive version</span>
        </motion.button>
        }
        
      </motion.div>

    </main>
  )
}