import React, { Component } from 'react'
import chunk from 'lodash/chunk'

import { withStyles } from '@material-ui/styles'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

import { Navbar } from '../../components'
import { Page, Col, Row } from '../../common'
import { goTo } from '../../services/navigation'
import Storage from '../../services/storage/storage'

import './MnemonicPhrase.scss'
import styles from './styles'

class MnemonicPhrase extends Component {
  constructor(props) {
    super(props)

    this.state = {
      ...props
    }

    Storage.set('is_mnemonic_set', false)
    Storage.set('is_password_set', false)
    Storage.set('mnemonic', props.mnemonic)
  }

  _createRows(items) {
    return items.map((item, key) => {
      return (
        <Row
          flex="1"
          justifyContent="center"
          className="Phrase--item"
          key={key}
        >
          <Col flex="1 0px" alignItems="center" className="Phrase--index">
            <Typography variant="h6">{item.index}</Typography>
          </Col>
          <Col flex="3">
            <Typography variant="h6">&nbsp;{item.item}</Typography>
          </Col>
        </Row>
      )
    })
  }

  _createColumns(arr) {
    let _arr = arr.map((item, index) => {
      return {
        index: index + 1,
        item: item
      }
    })

    let _chunks = chunk(_arr, 2)

    return _chunks.map((row, index) => {
      return (
        <Row flex="1" className="padding" key={index}>
          {this._createRows(row)}
        </Row>
      )
    })
  }

  onClickAgree(words) {
    goTo('MnemonicPhraseConfirm', {
      ...this.state
    })
  }

  render() {
    // this will take too much process every event
    // need to fix performance later
    // better create icons for every numbers

    const { classes } = this.props
    let words = this.state.mnemonic
    let arrWords = words.split(' ')

    return (
      <Page className="MnemonicPhrase">
        <Navbar backButton={true} />
        <div className="Content">
          <Col>
            <Col flex="10" className="Padding--row">
              <Typography variant="subtitle1" gutterBottom>
                This is your only way to backup. Write this down and store it
                somewhere safe.
              </Typography>
              {this._createColumns(arrWords)}
            </Col>
            <Col flex="2" className="Padding--row">
              <div className={classes.button}>
                <Button
                  variant="outlined"
                  size="medium"
                  color="primary"
                  onClick={this.onClickAgree.bind(this, arrWords)}
                >
                  Got it
                </Button>
              </div>
            </Col>
          </Col>
        </div>
      </Page>
    )
  }
}

export default withStyles(styles)(MnemonicPhrase)
