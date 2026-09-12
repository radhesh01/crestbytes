import { forwardRef } from 'react'
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react'
import Link from 'next/link'

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

function isInternalHref(href: string): boolean {
  return href.startsWith('/') && !href.startsWith('//')
}

const Button = forwardRef<HTMLAnchorElement | HTMLButtonElement, ButtonProps>(
  function Button(props, ref) {
    const { variant = 'primary', children, className = '' } = props
    const classes = `btn btn--${variant} ${className}`.trim()

    if (isAnchor(props)) {
      const { href, ...anchorRest } = props
      delete (anchorRest as Partial<AsAnchor>).variant
      delete (anchorRest as Partial<AsAnchor>).className
      delete (anchorRest as Partial<AsAnchor>).children

      if (isInternalHref(href)) {
        return (
          <Link
            href={href}
            className={classes}
            ref={ref as React.Ref<HTMLAnchorElement>}
            {...(anchorRest as Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href'>)}
          >
            {children}
          </Link>
        )
      }

      return (
        <a
          href={href}
          className={classes}
          ref={ref as React.Ref<HTMLAnchorElement>}
          {...anchorRest}
        >
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
      <button
        type={type ?? 'button'}
        className={classes}
        ref={ref as React.Ref<HTMLButtonElement>}
        {...buttonRest}
      >
        {children}
      </button>
    )
  },
)

export default Button