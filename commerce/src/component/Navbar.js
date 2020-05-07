import React from 'react';
import './navbar.css';
import Fade from 'react-reveal/Fade';

class Navbar extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            femme : false,
            homme : false,
            accessoire : false,
        }
        this.womenAppear=this.womenAppear.bind(this);
        this.menAppear=this.menAppear.bind(this);
    }
    womenAppear(){
        this.setState(prevState => {
            return { femme: !prevState.femme };
        })    
    }
    menAppear(){
        this.setState(prevState => {
            return { homme: !prevState.homme };
        })    
    }
    render(){
        return(
            <div className='navbar'>
                <p onClick={this.womenAppear}>
                    Femme
                </p>
                {this.state.femme && (
                    <Fade top>
                        <div className='womenCategory'>
                            <p>
                                Coton
                            </p>
                            <p>
                                Soie
                            </p>
                            <p>
                                Dentelle
                            </p>
                            <p>
                                Wax
                            </p>
                            <p>
                                Voile
                            </p>
                        </div>
                    </Fade>
                )}
                <p onClick={this.menAppear}>
                    Homme
                </p>
                {this.state.homme && (
                    <Fade top>
                        <div className='menCategory'>
                            <p>
                                Coton
                            </p>
                            <p>
                                Soie
                            </p>
                        </div>
                    </Fade>
                )}
                <p>
                    Accéssoires
                </p>
                <p>
                    Sur Mesure
                </p>
                <p>
                    Mon Compte
                </p>
                <p>
                    Mentions légales
                </p>
            </div>
        )
    }
}

export default Navbar;