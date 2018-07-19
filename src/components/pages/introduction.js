import React, { Component } from 'react';

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
                <div>
                    <table width="97%" border="0" >
                        <tbody><tr valign="bottom">
                            <td><h1 align="center" className="style1">加拿大河南同乡会章程</h1>
                                <h3 align="center"> (初稿：1998年6月 修订稿:2005年4月) </h3>
                                <h2 align="center">第一章 总 则 </h2>
                                <p align="left"><strong>名称：</strong>加拿大河南同乡会。(THE HENAN ASSOCIATION OF CANADA) </p>
                                <p align="left"><strong>宗旨：</strong>本会为非政治性，非盈利性的民间组织。本会的宗旨是加强河南同乡之间的友谊和交流，凝聚乡亲力量，相互支持，共同发展，协助河南同乡融入加拿大主流社会。 促进加拿大和河南省之间在科技、文化和经济等各个领域的交流与合作。</p>
                                <h2 align="center"> 第二章 会 员 </h2>
                                <p align="left"><strong>会员资格：</strong>凡河南籍或曾在河南学习过或工作过的人士及其配偶家属均可申请加入本会成为会员。 </p>
                                <p align="left"><strong>会员义务：</strong>会员应遵守加拿大法律，认同本会章程，如会时自愿交纳会费，爱乡，爱会。</p>
                                <p align="left"> <strong>会员权利：</strong>会员有权享用本会所举办的各种服务项目和活动。 </p>
                                <h2 align="center">第三章 经 费 </h2>
                                <p align="left"><strong>              经费来源</strong>：</p>
                                <p align="left" className="para1">会员入会会费（一次性）：个人$10，家庭$20。<br />
                                    会员自愿捐款。<br />
                                    各界热心人士捐款。 <br />
                                    理事会成员会费。</p>
                                <p align="left">&nbsp;</p>
                                <p align="right"> 加拿大河南同乡会 2005年4月 </p></td>
                        </tr>
                        </tbody></table>
                </div>
            </div>
        );
    }
}

const Introduction = () => (
    <div className="page mb-5">
        <Tabs />
    </div>
);

export default Introduction;
