/**
 * The Guild crest logo. A single brand mark used everywhere (header, footer,
 * mobile menu, corner stamps, sign-offs). Keeps the original API (size,
 * animate, variant, title) so existing usages need no changes.
 */
export default function Seal({
  size = 200,
  animate = false,
  title = 'Guild of Master Craftsman',
  className = '',
  style,
  // `variant` is accepted for backwards-compatibility but no longer changes
  // the mark — the crest is used at every size.
  variant, // eslint-disable-line no-unused-vars
}) {
  return (
    <img
      src="/logo.png"
      width={size}
      height={Math.round(size * 0.966)}
      alt={title}
      draggable="false"
      decoding="async"
      className={`${animate ? 'logo-in ' : ''}${className}`}
      style={{ width: size, height: 'auto', display: 'block', ...style }}
    />
  )
}
