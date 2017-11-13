import React from 'react';
import { Thumbnail, Button, Modal, Panel, Image } from 'react-bootstrap';

export class Pet extends React.Component {


	render() {

		return (
              <div>
                <Image src="http://bit.ly/2xvEA7A" responsive />
                    <center><h3>Fido</h3>
                    <p>3 year old Golden Retriever, likes peanut butter and long walks on the beach</p>
                    
                    </center>
                    </div>

    		);
	}
}
