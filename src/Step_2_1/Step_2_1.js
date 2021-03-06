import React, { Component } from 'react';
import { connect } from 'react-redux';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import constants from '../constants';
import BasePage from '../BasePage/BasePage';
import './Step_2_1.css';

class Step_2_1 extends Component {
  constructor (props) {
    super(props);

    this.step = 2;
    this.questionNumber = 1;

    const possibleAnswers = constants.possibleAnswers[this.step][this.questionNumber];

    this.state = {
      possibleAnswers,
      selectedValue: possibleAnswers[0]
    };

    this._handleChange = this.handleChange.bind(this);
    this._nextPage = this.nextPage.bind(this);
  }

  handleChange (e) {
    this.setState({
      selectedValue: e.target.value
    });
  }

  nextPage () {
    const answers = this.props.answers;

    answers[this.step] = [
      this.state.selectedValue
    ];

    this.props.dispatch({
      type: 'CHANGE_ANSWERS',
      value: answers
    });

    this.props.history.push('/questions/2/2');
  }

  render () {
    const contentCmp = (
      <RadioGroup
        className="radio-group-2-1"
        value={this.state.selectedValue}
        onChange={this._handleChange}
      >
        {this.state.possibleAnswers.map((el, index) => {
          return (
            <FormControlLabel
              key={index}
              value={el}
              control={<Radio />}
              label={el}
            />
          );
        })}
      </RadioGroup>
    );

    return (
      <BasePage
        titleText="Are you afraid of the dark?"
        currentPage={this.step}
        totalPages={4}
        contentCmp={contentCmp}
        monsterImg="/img/page_3_monster.png"
        buttonOptions={{
          className: 'on-form',
          text: 'Next',
          onClick: this._nextPage
        }}
      />
    );
  }
}

const mapStateToProps = state => ({
  answers: state.answers
});

export default connect(mapStateToProps)(Step_2_1);
