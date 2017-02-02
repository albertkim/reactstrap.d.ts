declare module 'reactstrap' {
  type Colors = 'default' | 'primary' | 'success' | 'info' | 'warning' | 'danger'
  
  interface AlertProps {
    className?: string
    color?: Colors // default: 'success'
    isOpen?: boolean  // default: true
    toggle?: Function
    tag?: Function | string

    // Set any of the timeouts to 0 to disable animation
    transitionAppearTimeout?: number
    transitionEnterTimeout?: number
    transitionLeaveTimeout?: number
  }

  export class Alert extends React.Component<AlertProps, void> {
    
  }

  interface BadgeProps {
    pill?: any
    color?: Colors
  }

  export class Badge extends React.Component<BadgeProps, void> {

  }

  interface DropdownProps {
    disabled?: boolean
    dropup?: boolean
    group?: boolean
    isOpen: boolean
    tag?: string // default: 'div'
    tether?: any
    toggle?: Function
    caret?: any
  }

  export class Dropdown extends React.Component<DropdownProps, void> {

  }

  interface DropdownToggleProps {
    caret?: boolean
    color?: string
    className?: string
    disabled?: boolean
    onClick?: Function
    'data-toggle'?: string
    'aria-haspopup'?: boolean
    // For DropdownToggle usage inside a Nav
    nav?: boolean
    // Defaults to Button component
    tag?: any
    size?: string
    
  }
  
  export class DropdownToggle extends React.Component<DropdownToggleProps, void> {
    
  }

  export class DropdownMenu extends React.Component<void, void> {
    
  }

  interface DropdownItemProps {
    header?: any
    onClick?: Function
  }

  export class DropdownItem extends React.Component<DropdownItemProps, void> {
    
  }

  interface ModalProps {
    isOpen:  boolean
    // boolean to control the state of the popover
    toggle:  Function
    // callback for toggling isOpen in the controlling component
    size?: string
    // control backdrop, see http://v4-alpha.getbootstrap.com/components/modal/#options
    backdrop?: boolean | 'static'
    keyboard?: boolean
    // zIndex defaults to 1000.
    zIndex?: number | string
  }

  export class Modal extends React.Component<ModalProps, void> {

  }

  export class ModalHeader extends React.Component<React.HTMLProps<HTMLDivElement>, void> {

  }

  export class ModalFooter extends React.Component<React.HTMLProps<HTMLDivElement>, void> {

  }

  export class ModalBody extends React.Component<React.HTMLProps<HTMLDivElement>, void> {

  }

  interface CollapseProps extends React.HTMLProps<HTMLDivElement> {
    isOpen: boolean
    navbar?: boolean
    delay?: number
    onOpened?: Function
    onClosed?: Function
  }

  export class Collapse extends React.Component<CollapseProps, void> {

  }

  interface NavbarProps extends React.HTMLProps<HTMLDivElement> {
    light?: boolean
    inverse?: boolean
    full?: boolean
    fixed?: string
    color?: string
    role?: string
    toggleable?: boolean | string
    tag?: Function | string
  }

  export class Navbar extends React.Component<NavbarProps, void> {

  }

  interface NavbarTogglerProps extends React.HTMLProps<HTMLDivElement> {
    type?: string
    right?: boolean
    left?: boolean
    tag?: Function | string
  }

  export class NavbarToggler extends React.Component<NavbarTogglerProps, void> {

  }

  interface NavbarBrandProps extends React.HTMLProps<HTMLDivElement> {
    tag?: Function | string
    to?: string
  }

  export class NavbarBrand extends React.Component<NavbarBrandProps, void> {

  }

  interface NavProps extends React.HTMLProps<HTMLDivElement> {
    inline?: boolean
    disabled?: boolean
    tabs?: boolean
    pills?: boolean
    stacked?: boolean
    navbar?: boolean
    tag?: Function | string
  }

  export class Nav extends React.Component<NavProps, void> {

  }

  interface NavItemProps extends React.HTMLProps<HTMLDivElement> {
    tag?: Function | string
    to?: string
  }

  export class NavItem extends React.Component<NavItemProps, void> {

  }

  interface NavLinkProps extends React.HTMLProps<HTMLDivElement> {
    disabled?: boolean
    active?: boolean
    tag?: Function | string
    to?: string
  }

  export class NavLink extends React.Component<NavLinkProps, void> {

  }
}
