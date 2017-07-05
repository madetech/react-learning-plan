import React from 'react'

class Madlibs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      adjective1: this.props.adjective1,
      adjective2: this.props.adjective2,
      emotion: this.props.emotion,
      noun: this.props.noun,
      place1: this.props.place1,
      pluralNoun1: this.props.pluralNoun1,
      pluralNoun2: this.props.pluralNoun2,
      pluralNoun3: this.props.pluralNoun3,
      verb1: this.props.verb1,
      results: ''
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    this.setState({
      results: "The path of the {this.props.adjective1} man is beset on all sides by the inequities of the {this.props.adjective2} and the tyranny of evil {this.props.pluralNoun1}. Blessed is he, who in the name of charity and good will, shepherds the weak through {this.props.place1}, for he is truly his brother's keeper and the finder of {this.props.pluralNoun2}. And I will strike down upon thee with great vengeance and furious {this.props.emotion} those who would attempt to {this.props.verb1} and destroy my {this.props.pluralNoun3}. And you will know my name is {this.props.noun} when I lay my vengeance upon thee."
    });
    event.preventDefault();
  }

  render () {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          A noun:
          <input
            name="adjective1"
            type="text"
            value={this.state.adjective1}
            onChange={this.handleInputChange} />
        </label>
        <label>
          A noun:
          <input
            name="adjective2"
            type="text"
            value={this.state.adjective2}
            onChange={this.handleInputChange} />
        </label>
        <label>
          A noun:
          <input
            name="emotion"
            type="text"
            value={this.state.emotion}
            onChange={this.handleInputChange} />
        </label>
        <label>
          A noun:
          <input
            name="noun"
            type="text"
            value={this.state.noun}
            onChange={this.handleInputChange} />
        </label>
        <label>
          A noun:
          <input
            name="place1"
            type="text"
            value={this.state.place1}
            onChange={this.handleInputChange} />
        </label>
        <label>
          A noun:
          <input
            name="pluralNoun1"
            type="text"
            value={this.state.pluralNoun1}
            onChange={this.handleInputChange} />
        </label>
        <label>
          A noun:
          <input
            name="pluralNoun2"
            type="text"
            value={this.state.pluralNoun2}
            onChange={this.handleInputChange} />
        </label>
        <label>
          A noun:
          <input
            name="pluralNoun3"
            type="text"
            value={this.state.pluralNoun3}
            onChange={this.handleInputChange} />
        </label>
        <label>
          A noun:
          <input
            name="verb1"
            type="text"
            value={this.state.verb1}
            onChange={this.handleInputChange} />
        </label>
        <button>Submit</button>
      </form>

      <p>{this.props.results}</p>
    )
  }
}

Madlibs.propTypes = {
  adjective1: PropTypes.string.isRequired,
  adjective2: PropTypes.string.isRequired,
  emotion: PropTypes.string.isRequired,
  noun: PropTypes.string.isRequired,
  place1: PropTypes.string.isRequired,
  pluralNoun1: PropTypes.string.isRequired,
  pluralNoun2: PropTypes.string.isRequired,
  pluralNoun3: PropTypes.string.isRequired,
  verb1: PropTypes.string.isRequired
}

export default Madlibs
