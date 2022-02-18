import React from 'react';
import { Link, withRouter } from 'react-router-dom';




class _AppHeader extends React.Component {


    render() {

        return (
            <section className="main-container header-container full">
                <div className="header">
                    <Link className="clean-link header-logo" to="/">
                        <div className='logo'>
                            spaceX
                        </div>
                    </Link>

                    <div className='header-nav'>
                        <Link className='btn-explore clean-link' to="/explore" >Explore</Link>
                        <Link className='btn-about clean-link' to="/about">About</Link>
                    </div>

                </div>
            </section>
        )
    }
}

export const AppHeader = withRouter(_AppHeader)