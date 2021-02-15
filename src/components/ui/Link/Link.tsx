import NextLink, { LinkProps as NextLinkProps } from 'next/link'

interface LinkProps extends NextLinkProps {
  href: string
  children: JSX.Element | JSX.Element[] | string
  target?: '_self' | '_blank' | '_parent' | '_top'
}

const Link = ({ href, children, ...props }: LinkProps) => (
  <NextLink href={href}>
    <a {...props}>{children}</a>
  </NextLink>
)

export default Link
