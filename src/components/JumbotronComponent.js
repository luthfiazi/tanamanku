import React from 'react';
import { Jumbotron, Button, Container } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInfo } from '@fortawesome/free-solid-svg-icons'
 

const JumbotronComponent = (props) => {
    return (
        <div>
            <Jumbotron>
                <Container>
                    <h1 className="display-3">{props.title}</h1>
                    <p className="lead">Menanam Berarti Memelihara, cintailah ciptaan sang pencipta sebagai rasa syukur kepada tuhan</p>
                    <hr className="my-2" />
                    <p>Tanaman merupakan obat teraphy untuk mata </p>
                    <p className="lead">
                        <Button color="success"> <FontAwesomeIcon icon={faInfo} /> See More</Button>
                    </p>
                </Container>
            </Jumbotron>
        </div>
    );
};

export default JumbotronComponent;