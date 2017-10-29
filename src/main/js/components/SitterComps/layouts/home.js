
import React from 'react';
import { Signupform } from 'js/components/SitterComps/signup/signupform.js';
import { Header } from 'js/components/SitterComps/header/header.js';
import { Featurelist } from 'js/components/SitterComps/features/featurelist.js';
import BookMe from '../../BookMe.js';

export class HomeLayout extends React.Component {
    render(){
        return (
            <div>
                <Header />
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <Featurelist />
                        </div>
                        <div className="col-md-5 col-md-offset-1">
                          <Signupform />
                        </div>
                    </div>
                    <BookMe />
                </div>
            </div>
        );
    }
}
