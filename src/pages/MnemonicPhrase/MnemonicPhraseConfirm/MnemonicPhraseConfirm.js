import React from 'react'
import PropTypes from 'prop-types'
import shuffle from 'lodash/shuffle'
import chunk from 'lodash/chunk'

import { withStyles } from '@material-ui/styles'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

import BasePage from '../../../common/BasePage'
import Page from '../../../layout/Page'
import { goTo } from '../../../services/navigation'
import { Col, Row } from '../../../common'
import { alertDialog, PrimaryButton, SmallButton } from '../../../components'
import { withAppContext } from '../../../services/Providers/AppStateContext'

import styles from './styles'
import './MnemonicPhraseConfirm.css'

class MnemonicPhraseConfirm extends BasePage {
  title = 'Confirm Mnemonic'
  storage = BasePage.constants.storage
  route = BasePage.constants.route

  navigationProps = {
    title: this.title,
    backButton: true,
  }

  constructor(props) {
    super(props)

    let shuffledWords = shuffle(props.mnemonic.split(' '))

    shuffledWords = shuffledWords.map((word, index) => {
      return {
        order: 0,
        word: word,
        index: index,
        message: '',
      }
    })

    this.state = {
      shuffledWords: shuffledWords,
    }
  }

  onClickSelectPhrase(word) {
    let lastSelectedPhrase = this.state.shuffledWords.reduce((prev, current) =>
      prev.order > current.order ? prev : current
    )
    let clonedShuffledWords = [...this.state.shuffledWords]

    clonedShuffledWords = clonedShuffledWords.map(shuffledWord => {
      if (shuffledWord.index === word.index && shuffledWord.order === 0) {
        return {
          order: lastSelectedPhrase.order + 1,
          word: shuffledWord.word,
          index: shuffledWord.index,
        }
      }

      return shuffledWord
    })

    this.setState({
      shuffledWords: clonedShuffledWords,
    })
  }

  onClickLater() {
    this._next()
  }

  _createRows(row) {
    return row.map((word, i) => {
      return (
        <Row
          key={i}
          flex="1"
          justifyContent="center"
          className="Phrase--item pointer"
          onClick={this.onClickSelectPhrase.bind(this, word)}
        >
          <div className={this.props.classes.smallButtonHolder}>
            <SmallButton
              count={word.order > 0 ? word.order : null}
              title={word.word}
            />
          </div>
        </Row>
      )
    })
  }

  _createColumns(arr) {
    let _chunks = chunk(arr, 2)

    return _chunks.map((row, i) => {
      return (
        <Row flex="1" key={i} className="padding">
          {this._createRows(row)}
        </Row>
      )
    })
  }

  onClickClear() {
    let clonedShuffledWords = [...this.state.shuffledWords]

    clonedShuffledWords = clonedShuffledWords.map(shuffledWord => {
      return {
        order: 0,
        word: shuffledWord.word,
        index: shuffledWord.index,
      }
    })

    this.setState({
      shuffledWords: clonedShuffledWords,
    })
  }

  onClickSubmit() {
    const { shuffledWords } = this.state
    const { mnemonic } = this.props

    let sorted = shuffledWords.sort((a, b) => {
      if (a.order < b.order) {
        return -1
      }
      if (a.order > b.order) {
        return 1
      }
      // a must be equal to b
      return 0
    })

    let mapped = sorted.map(sort => sort.word)
    let selectedMnemonic = mapped.join(' ')

    if (selectedMnemonic !== mnemonic) {
      alertDialog({
        title: 'Oops!!',
        message:
          "You've entered the wrong order of mnemonic phrase. Please try again",
        buttons: [
          {
            text: 'Okay',
            onClick: () => this.onClickClear(),
          },
        ],
      })
    } else {
      this.props.AppContext.persist({ [this.storage.IS_SET_MNEMONIC]: true })
      this._next()
    }
  }

  isDisabledSubmit() {
    return (
      this.state.shuffledWords.findIndex(
        shuffledWord => shuffledWord.order === 0
      ) >= 0
    )
  }

  _next = () => goTo(this.route.NOMINATED_PASSWORD)

  render() {
    const { classes } = this.props
    // need to fix those circles some time

    const _disableSubmit = this.isDisabledSubmit()

    return (
      <Page navigationProps={this.navigationProps}>
        <Col>
          <Col flex="10" className="Padding--row">
            <br />
            <Typography variant="caption" align="center" gutterBottom>
              Tap on the words in the correct order
            </Typography>
            {this._createColumns(this.state.shuffledWords)}
          </Col>
          <br />
          <br />
          <Col flex="2" className="Padding--row">
            <div className="Button--container">
              <div className={classes.buttonHolder}>
                <PrimaryButton
                  type="outlined"
                  size="medium"
                  onClick={this.onClickClear.bind(this)}
                >
                  Clear
                </PrimaryButton>
              </div>
              <div className={classes.buttonHolder}>
                <PrimaryButton
                  type="primary"
                  size="medium"
                  disabled={_disableSubmit}
                  onClick={this.onClickSubmit.bind(this)}
                >
                  Submit
                </PrimaryButton>
              </div>

              <div className={classes.buttonHolder}>
                <PrimaryButton
                  type="secondary"
                  size="medium"
                  onClick={this.onClickLater.bind(this)}
                >
                  Do it later
                </PrimaryButton>
              </div>
            </div>
          </Col>
        </Col>
      </Page>
    )
  }
}

MnemonicPhraseConfirm.propTypes = {
  AppContext: PropTypes.object.isRequired, // withAppContext
  classes: PropTypes.object.isRequired, // withStyles
}

export default withStyles(styles)(withAppContext(MnemonicPhraseConfirm))
