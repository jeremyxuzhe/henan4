import React, { Component } from 'react';
import {
    TabContent,
    TabPane,
    Nav,
    NavItem,
    NavLink,
    Button,
    ButtonGroup,
    Collapse,
    Card,
    CardBody
} from 'reactstrap';

import classnames from 'classnames';

class Tabs extends Component {

    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);

        this.state = {
            activeTab: '1',
            cSelected: [],
            dropdownOpen: false,
            collapse: false,
            status: 'Closed'
        };

        this.onEntering = this.onEntering.bind(this);
        this.onEntered = this.onEntered.bind(this);
        this.onExiting = this.onExiting.bind(this);
        this.onExited = this.onExited.bind(this);
        this.toggleCollapse = this.toggleCollapse.bind(this);

        this.onRadioBtnClick = this.onRadioBtnClick.bind(this);
        this.onCheckboxBtnClick = this.onCheckboxBtnClick.bind(this);

    }

    onEntering() {
        this.setState({ status: 'Opening...' });
    }

    onEntered() {
        this.setState({ status: 'Opened' });
    }

    onExiting() {
        this.setState({ status: 'Closing...' });
    }

    onExited() {
        this.setState({ status: 'Closed' });
    }

    onRadioBtnClick(rSelected) {
        this.setState({ rSelected });
    }
    onCheckboxBtnClick(selected) {
        const index = this.state.cSelected.indexOf(selected);
        if (index < 0) {
            this.state.cSelected.push(selected);
        } else {
            this.state.cSelected.splice(index, 1);
        }
        this.setState({ cSelected: [...this.state.cSelected] });
    }

    toggle(tab) {
        if (this.state.activeTab !== tab) {
            this.setState({
                activeTab: tab
            });
        }
        this.setState({
            dropdownOpen: !this.state.dropdownOpen
        });
    }

    toggleCollapse() {
        this.setState({ collapse: !this.state.collapse });
    }

    render() {
        return (
            <div>
                <table width="100%" border="0"  bgcolor="#F2F2F2">
                    <tbody><tr>
                        <td align="left">
                            <div align="left" >联系我们</div>

                            <hr />

                                <table border="0"  width="100%">

                                    <tbody>



                                    </tbody>
                                </table>

                                <ul>
                                    <li >河南省加拿大同乡会真诚欢迎河南老乡的加盟，如果您希望加盟本会,请即于网站注册会员或发邮件至：<a href="mailto:join@henanca.com">join@henanca.com</a></li>
                                    <li >对本网站有任何建议，请发邮件至：<a href="mailto:webmaster@henanca.com">webmaster@henanca.com </a></li>
                                </ul>

                        </td>
                    </tr>
                    </tbody></table>
            </div>
        );
    }
}

const Contact = () => (
    <div className="page mb-5">
        <Tabs />
    </div>
);

export default Contact;
