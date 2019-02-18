import React, { Component } from 'react';
import { Page, Row, Col } from '../../common'
import { Navbar } from '../../components';
import { goTo } from '../../services/navigation';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
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
          onClick: (model) => {
            goTo('Wallet', model)
          }
        },
        {
          model: {},
          label: '123',
          icon: 'card_travel',
          onClick: (model) => {
            goTo('Wallet', model)
          }
        },
        {
          model: {},
          label: '123',
          icon: 'card_travel',
          onClick: (model) => {
            goTo('Wallet', model)
          }
        },
        {
          model: {},
          label: '123',
          icon: 'card_travel',
          onClick: (model) => {
            goTo('Wallet', model)
          }
        }
      ]
    };

    this.onRenderWidget.bind(this);
    // this.onClickItem.bind(this);
  }

  onClickRestoreRecover() {}
  
  onClickBackUpChain() {}

  onClickItem(item) {
    if (item.onClick) {
      item.onClick(item.model);
    }
  }

  onRenderWidget(item, i) {
    return (
      <div className="Dashboard--widget" key={i} onClick={this.onClickItem.bind(this, item)}>
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
    const addItem = {
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
              onClick: (model) => {
                goTo('Wallet', model)
                // goTo('Wallet', model)
              }
            }
          ]
        })
      }
    }

    return this.onRenderWidget(addItem, this.state.items.length)
  }

  onRenderList() {
    return this.state.items.map((item, i) => this.onRenderWidget(item, i))
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
          <Row flex="1" justifyContent="center">
            <Button variant="outlined" color="primary" className="Button" size="large" onClick={this.onClickBackUpChain.bind(this)}>
              Backup on chain
            </Button>
          </Row>
        </div>
      </Page>
    );
  }
}

export default Dashboard;
