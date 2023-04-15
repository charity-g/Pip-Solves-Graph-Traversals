import React from "react";
import {PropTypes} from "prop-types";

class Vertice extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            start: false,
            visited: false,
        };
    }

    visit() {
        this.setState({
            visited: true,
        });
    }

    render () {
        const i = this.props.id;
        return this.state.visited ? 
        (<div>
            <button className="Vertice_v">Vertice {i}</button>
        </div>): 
        (<div>
            <button className="Vertice_unv" onClick={() => this.visit()}>Vertice {i} </button>
        </div>);
    }
}

Vertice.defaultProps = {
    id: -1,
};

Vertice.propTypes = {
    id: PropTypes.number,
}

export default Vertice;