import React from "react";
import {PropTypes} from "prop-types";

class Vertice extends React.Component {
    constructor(props) {
        super(props);
    }

    render () {
        const i = this.props.id;
        return (<div>
        <button className="Vertice">Vertice {i}</button>
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