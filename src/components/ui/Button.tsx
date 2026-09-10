import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react'

type ButtonVariant = 'primary' | 'secondary' | 'text'

interface BaseProps {
  variant?: ButtonVariant
  children: ReactNode
  className?: string
}

type AsButton = BaseProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'href'> & {
    href?: undefined
  }

type AsAnchor = BaseProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> & {
    href: string
  }

type ButtonProps = AsButton | AsAnchor

function isAnchor(props: ButtonProps): props is AsAnchor {
  return typeof props.href === 'string'
}

function Button(props: ButtonProps) {
  const { variant = 'primary', children, className = '' } = props
  const classes = `btn btn--${variant} ${className}`.trim()

  if (isAnchor(props)) {
    const { href, ...anchorRest } = props
    delete (anchorRest as Partial<AsAnchor>).variant
    delete (anchorRest as Partial<AsAnchor>).className
    delete (anchorRest as Partial<AsAnchor>).children

    return (
      <a href={href} className={classes} {...anchorRest}>
        {children}
      </a>
    )
  }

  const { type, ...buttonRest } = props
  delete (buttonRest as Partial<AsButton>).variant
  delete (buttonRest as Partial<AsButton>).className
  delete (buttonRest as Partial<AsButton>).children
  delete (buttonRest as Partial<AsButton>).href

  return (
    <button type={type ?? 'button'} className={classes} {...buttonRest}>
      {children}
    </button>
  )
}

export default Button