import React, { Component } from 'react';
import { Page, Row, Col } from '../../common'
import { Navbar } from '../../components';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import { chunk } from 'underscore';
import './Dashboard.scss';

class Dashboard extends Component {
  constructor(props) {
    super(props)

    this.state = {
      items: [
        {
          model: {},
          label: '123',
          icon: 'card_travel',
          onClick: () => {
            console.log('onClick', this.model)
          }
        },
        {
          model: {},
          label: '123',
          icon: 'card_travel',
          onClick: () => {
            console.log('onClick', this.model)
          }
        },
        {
          model: {},
          label: '123',
          icon: 'card_travel',
          onClick: () => {
            console.log('onClick', this.model)
          }
        },
        {
          model: {},
          label: '123',
          icon: 'card_travel',
          onClick: () => {
            console.log('onClick', this.model)
          }
        }
      ]
    }
  }

  onClickRestoreRecover() {
  }

  onRenderWidget(item, i) {
    return (
      <div className="Dashboard--widget" key={i} onClick={item.onClick}>
        <div>
          <Icon>{item.icon}</Icon>
        </div>
        <div>
          <span>
            { item.label }
          </span>
        </div>
      </div>
    )
  }

  onRenderAddWidget() {
    let addItem = {
      model: {},
      label: 'Add new wallet',
      icon: 'add_circle_outline',
      onClick: () => {
        this.setState({
          items: [
            ...this.state.items,
            {
              model: {},
              label: '123',
              icon: 'card_travel',
              onClick: () => {
                console.log('onClick', this.model)
              }
            }
          ]
        })
      }
    }

    return this.onRenderWidget(addItem, this.state.items.length)
  }

  onRenderList() {
    return this.state.items.map(this.onRenderWidget)
  }

  render() {
    let _renderedItems = this.onRenderList();
    let _renderedAddItem = this.onRenderAddWidget();

    return (
      <Page className="Dashboard">
        <Navbar/>
        <div className="Content">
          <Row flex="1" justifyContent="center">
            <Button variant="outlined" color="secondary" className="Button" size="large" onClick={this.onClickRestoreRecover.bind(this)}>
              Restore recovery
            </Button>
          </Row>
          <Row flex="11" justifyContent="center">
            <Col flex="1">
              <div className="Dashboard--widget-container">
                {_renderedItems}
                {_renderedAddItem}
              </div>
            </Col>
          </Row>
        </div>
      </Page>
    );
  }
}

export default Dashboard;
