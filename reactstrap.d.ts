declare module 'reactstrap' {
  
  interface AlertProps {
    className?: string
    color?: string // default: 'success'
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
    color?: string
  }

  export class Badge extends React.Component<BadgeProps, void> {

  }

  interface BaseCardProps {
    tag?: Function | string
    className?: string
  }

  interface CardProps extends BaseCardProps {
    inverse?: boolean
    color?: string
    block?: boolean
  }

  export class Card extends React.Component<CardProps, void> {

  }

  export class CardBlock extends React.Component<BaseCardProps, void> {

  }

  export class CardColumns extends React.Component<BaseCardProps, void> {

  }

  export class CardDeck extends React.Component<BaseCardProps, void> {

  }

  export class CardFooter extends React.Component<BaseCardProps, void> {

  }

  export class CardGroup extends React.Component<BaseCardProps, void> {

  }

  export class CardHeader extends React.Component<BaseCardProps, void> {

  }

  export interface CardImgProps extends BaseCardProps {
    top?: boolean
    bottom?: boolean
  }

  export class CardImg extends React.Component<CardImgProps, void> {

  }

  export class CardImgOverlay extends React.Component<BaseCardProps, void> {

  }

  export class CardLink extends React.Component<BaseCardProps, void> {

  }

  export class CardSubtitle extends React.Component<BaseCardProps, void> {

  }

  export class CardText extends React.Component<BaseCardProps, void> {

  }

  export class CardTitle extends React.Component<BaseCardProps, void> {

  }

  type ColumnTypes = string | number | boolean | {
    size?: string
    push?: string | number
    pull?: string | number
    offset?: string | number
  }

  interface ColProps {
    xs?: ColumnTypes
    sm?: ColumnTypes
    md?: ColumnTypes
    lg?: ColumnTypes
    xl?: ColumnTypes
    widths?: any[]
  }

  export class Col extends React.Component<ColProps, void> {

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

  interface ContainerProps {
    fluid?: any
  }

  export class Container extends React.Component<ContainerProps, void> {

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

  interface DropdownMenuProps {
    right?: any
  }

  export class DropdownMenu extends React.Component<DropdownMenuProps, void> {
    
  }

  interface DropdownItemProps {
    header?: any
    disabled?: any
    divider?: any
    onClick?: Function
  }

  export class DropdownItem extends React.Component<DropdownItemProps, void> {
    
  }

  interface FormProps {
    inline?: any
  }

  export class Form extends React.Component<FormProps, void> {

  }

  interface FormGroupProps {
    row?: any
    check?: any
    disabled?: any
    color?: string
    tag?: Function | string
  }

  export class FormGroup extends React.Component<FormGroupProps, void> {

  }

  interface LabelProps {
    for?: string
  }

  export class Label extends React.Component<LabelProps, void> {

  }

  interface InputProps {
    type?: string
    name?: string
    id?: string
    multiple?: any
    placeholder?: string
    state?: string
  }

  export class Input extends React.Component<InputProps, void> {

  }

  interface InputGroupProps {
    tag?: Function | string
    size?: string
    className?: string
  }

  export class InputGroups extends React.Component<InputGroupProps, void> {

  }

  interface InputGroupAddOnProps {
    tag?: Function | string
    className?: string
  }

  export class InputGroupAddon extends React.Component<InputGroupAddOnProps, void> {

  }

  interface InputGroupButton {
    tag?: Function | string
    groupClassName?: string // only used in shorthand
    groupAttributes?: any // only used in shorthand
    className?: string
  }

  export class InputGroupButton extends React.Component<InputGroupButton, void> {

  }

  interface FormTextProps {
    color?: string
  }

  export class FormText extends React.Component<FormTextProps, void> {

  }

  interface JumbotronProps {
    tag?: Function | string
    fluid?: boolean
    className?: string
  }

  export class Jumbotron extends React.Component<JumbotronProps, void> {

  }

  export class ListGroup extends React.Component<void, void> {

  }

  interface ListGroupItemProps {
    color?: string
    disabled?: any
    active?: any
    action?: any
    tag?: Function | string
    to?: string // For react-router Link elements
    href?: string
  }

  export class ListGroupItem extends React.Component<void, void> {

  }

  interface MediaProps {
    body?: boolean
    bottom?: boolean
    children?: boolean
    className?: string
    heading?: boolean
    left?: boolean
    list?: boolean
    middle?: boolean
    object?: boolean
    right?: boolean
    tag?: Function | string
    top?: boolean
    href?: string
    to?: string // For react-router Link elements
    placeholder?: any
    image?: any
  }

  export class Media extends React.Component<MediaProps, void> {

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
    to?: string // For react-router Link elements
  }

  export class NavLink extends React.Component<NavLinkProps, void> {

  }
  export class Row extends React.Component<void, void> {

  }
}
