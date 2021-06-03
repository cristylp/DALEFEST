import React, {Component} from 'react'
import { Link } from 'gatsby'
// import { Navbar, Nav, Container } from 'react-bootstrap';
import Scroll from './scroll'
import { Menu, X } from 'react-feather'
import { Location } from '@reach/router'
import Logo from "../images/LOGO.png"
import "./Navbar.css"
import Hoja from '../images/hojas_nav.png'

const ListLink = props => (
    <li>
        <Link to={props.to}>{props.children}</Link>
    </li>
);

export class Navigation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            openMenu: false,
            backgroundClass: ''
        };
    }

    state = {
      active: false,
      activeSubNav: false,
      currentPath: false,
    }

    handleScroll = () => {
        const { visibilityClass } = this.state;
        if (window.pageYOffset > 300) {
            if (visibilityClass !== 'navbar-shrink') {
                this.setState({ visibilityClass: 'navbar-shrink' });
            }
        } else {
            if (visibilityClass === 'navbar-shrink') {
                this.setState({ visibilityClass: '' });
            }
        };
        const { backgroundClass} = this.state;
        if (window.pageYOffset > 100) {
            if ( backgroundClass !== 'background-color') {
                this.setState({ backgroundClass: 'background-color' });
            }
        } else {
            if (backgroundClass === 'background-color') {
                this.setState({ backgroundClass: '' });
            }
        };
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
        this.setState({ currentPath: this.props.location.pathname })
    }
    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }


  handleMenuToggle = () => this.setState({ active: !this.state.active })

  // Only close nav if it is open
  handleLinkClick = () => this.state.active && this.handleMenuToggle()
  // keyboard events
  handleLinkKeyDown = ev => {
    if (ev.keyCode === 13) {
      this.state.active && this.handleMenuToggle()
    }
  }

  toggleSubNav = subNav =>
    this.setState({
      activeSubNav: this.state.activeSubNav === subNav ? false : subNav
    })
  keyToggleSubNav = (e, subNav) => {
    // key o is for open so you can enter key to open
    if (e.keyCode === 79 || e.keyCode === 27) {
      this.toggleSubNav(subNav)
    }
  }



    render() {
        const { backgroundClass } = this.state;
        const { active} = this.state,
          { subNav } = this.props,

          NavLink = ({to, className, children, ...props }) => (
            <Link
              to={to}
              className={`NavLink ${ to === this.state.currentPath ? 'active' : ''}${className}`}
              onClick={this.handleLinkClick}
              onKeyDown={this.handleLinkKeyDown}
              tabIndex={0}
              aria-label="Navigation"
              role="button"
              {...props}
            >
              {children}
            </Link>
          )

         return (
          <nav className={`Nav ${backgroundClass} ${active ? 'Nav-active' : ''}`} id="navbar">
          <img src={Hoja} alt="" id="hoja-nav"/>
            <div className='Nav--Container container'>
                <NavLink
                  to='/'
                >
                  <img src={Logo} className='nav-logo' alt='EC Horses Logo'/>
                </NavLink>

                <div  className='Nav--Links' >

                  <div className="navitems">
                    <NavLink to='/rsvp' className="navlink"
                    activeClassName="active">
                        RSVP
                    </NavLink>

                    <NavLink to='/hoteles' className="navlink"
                     activeClassName="active">
                        Hoteles
                    </NavLink>

                    <NavLink to='/eventos' className="navLink"
                     activeClassName="active">
                      Eventos
                    </NavLink>

                    <NavLink to='/panama' className="navlink"
                     activeClassName="active">
                      Conoce Panamá
                    </NavLink>

                    <NavLink to='#' className="navlink"
                     activeClassName="active">
                      Regalo
                    </NavLink>

                    <NavLink to='/salon' className="navlink"
                     activeClassName="active">
                      Salón de Belleza
                    </NavLink>

                  </div>

               </div>

                <button
                  className='Button-blank Nav--MenuButton'
                  onClick={this.handleMenuToggle}
                  tabIndex={0}
                  aria-label='Navigation'
                >
                  {active ? <X /> : <Menu size={30}  />}
                </button>
              </div>
            </nav>
           )
         }
      }

      export default ({subNav}) => (
         <Location>{route => <Navigation subNav={subNav} {...route} />}</Location>
      )
