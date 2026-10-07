import React from 'react'

export default function BrandLogo({ variant = 'header', className = '' }) {
  const variantClass = variant === 'hero'
    ? 'brand-logo-hero'
    : variant === 'footer'
      ? 'brand-logo-footer'
      : 'brand-logo-header'

  return (
    <img
      src="/thrive-logo.svg"
      alt="Thrive Tribe logo"
      className={`brand-logo ${variantClass} ${className}`.trim()}
    />
  )
}
