import React from 'react'

export function IconHealth(props){
  return (
    <svg viewBox="0 0 24 24" width="36" height="36" fill="none" stroke="currentColor" strokeWidth="1.5" {...props}>
      <path d="M12 7v10M7 12h10" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="2" y="2" width="20" height="20" rx="4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function IconLearn(props){
  return (
    <svg viewBox="0 0 24 24" width="36" height="36" fill="none" stroke="currentColor" strokeWidth="1.5" {...props}>
      <path d="M4 19.5A9 9 0 0112 3a9 9 0 018 16.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M8 14h8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function IconWork(props){
  return (
    <svg viewBox="0 0 24 24" width="36" height="36" fill="none" stroke="currentColor" strokeWidth="1.5" {...props}>
      <rect x="3" y="7" width="18" height="13" rx="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M16 3h-8v4h8V3z" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export default function Icons(){
  return null
}
