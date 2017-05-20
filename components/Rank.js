import React from 'react'

class Rank extends React.Component {
    render () {
        return (
            <span>{this.props.ranking}.</span>
        )
    }
}

Rank.propTypes = {
    ranking: React.PropTypes.number.isRequired,
}

export default Rank