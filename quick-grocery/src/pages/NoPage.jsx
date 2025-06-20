import React from 'react';

export default function NoPage() {
    return (
        <div style={{
            minHeight: '100vh',
            background: 'inear-gradient(135deg, #e8f5e9 0%, #a5d6a7 100%)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center'
        }}>
            <div style={{
                background: '#fff',
                padding: '40px 60px',
                borderRadius: '16px',
                boxShadow: '0 4px 24px rgba(76, 175, 80, 0.15)',
                textAlign: 'center'
            }}>
                <h1 style={{ color: '#388e3c', fontSize: '3rem', marginBottom: '16px' }}>404</h1>
                <h2 style={{ color: '#43a047', marginBottom: '12px' }}>No Page Found</h2>
                <p style={{ color: '#388e3c', marginBottom: '24px' }}>
                    Sorry, the page you are looking for does not exist.
                </p>
                <a
                    href="/"
                    style={{
                        color: '#fff',
                        background: '#66bb6a',
                        padding: '10px 24px',
                        borderRadius: '8px',
                        textDecoration: 'none',
                        fontWeight: 'bold',
                        transition: 'background 0.2s'
                    }}
                >
                    Go Home
                </a>
            </div>
        </div>
    );
}
