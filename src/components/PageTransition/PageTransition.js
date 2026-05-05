import React from "react"
import { TransitionGroup, CSSTransition } from "react-transition-group"

/**
 * Route-level enter/exit animation (Gatsby wrapPageElement).
 * Class names and timing match global `.page-transition-*` (see global.css).
 */
export default function PageTransition({ location, children }) {
  const pathname = location && location.pathname ? location.pathname : ""
  return (
    <TransitionGroup component={null}>
      <CSSTransition key={pathname} timeout={200} classNames="page-transition">
        <div className="page-transition-root">{children}</div>
      </CSSTransition>
    </TransitionGroup>
  )
}
