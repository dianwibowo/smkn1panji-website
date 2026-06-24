'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function LoginPage() {
  const [password, setPassword] = useState('')
  const [error, setError] = useState(false)
  const router = useRouter()

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError(false)

    const res = await fetch('/api/auth', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ password }),
    })

    if (res.ok) {
      router.push('/')
      router.refresh()
    } else {
      setError(true)
    }
  }

  return (
    <div style={{
      minHeight: '100vh', display: 'flex', alignItems: 'center',
      justifyContent: 'center', background: '#f5f5f5', fontFamily: 'Arial, sans-serif'
    }}>
      <div style={{
        background: '#fff', borderRadius: 12, padding: '40px 32px',
        boxShadow: '0 2px 16px rgba(0,0,0,0.08)', width: 320, textAlign: 'center'
      }}>
        <img src="/images/logo.png" alt="Logo SMKN 1 Panji" style={{ height: 64, marginBottom: 20 }}
          onError={(e) => { (e.target as HTMLImageElement).style.display = 'none' }} />
        <h1 style={{ fontSize: 18, fontWeight: 600, color: '#1a3a5c', marginBottom: 4 }}>
          SMKN 1 Panji Situbondo
        </h1>
        <p style={{ fontSize: 13, color: '#888', marginBottom: 28 }}>
          Website sedang dalam pengembangan
        </p>
        <form onSubmit={handleSubmit}>
          <input
            type="password"
            placeholder="Masukkan password akses"
            value={password}
            onChange={e => setPassword(e.target.value)}
            style={{
              width: '100%', padding: '10px 14px', borderRadius: 8, border: '1px solid #ddd',
              fontSize: 14, marginBottom: 12, boxSizing: 'border-box',
              outline: error ? '2px solid #e74c3c' : 'none'
            }}
          />
          {error && (
            <p style={{ color: '#e74c3c', fontSize: 12, marginBottom: 12 }}>
              Password salah. Silakan coba lagi.
            </p>
          )}
          <button type="submit" style={{
            width: '100%', padding: '10px 0', borderRadius: 8, border: 'none',
            background: '#1a3a5c', color: '#fff', fontSize: 14, fontWeight: 500,
            cursor: 'pointer'
          }}>
            Masuk
          </button>
        </form>
      </div>
    </div>
  )
}
