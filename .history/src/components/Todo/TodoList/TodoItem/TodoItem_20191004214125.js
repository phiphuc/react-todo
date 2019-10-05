import React, { Component } from 'react';
import { connect } from 'react-redux';
import './TodoItem.css'
class TodoItem extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showData: false
        }
    }

    clickHeader = (e) => {
        this.setState({
            showData: !this.state.showData
        })
    }

    render() {
        const { showData } = this.state;
        const { item, editAction } = this.props
        return (
            <div >
                <div id="faq" role="tablist" aria-multiselectable="true">
                    <div className="card">
                        <div className="card-header" role="tab" id="questionOne" >
                            <div className="row">
                                <div className="col-sm-8 float-left">
                                    <span className="card-title">
                                        <a data-toggle="collapse" onClick={(e) => (this.clickHeader(e))} data-parent="#faq" href="#answerOne" aria-expanded="true" aria-controls="answerOne">
                                            {item.title}</a>
                                    </span>
                                </div>
                                <div className="col-sm-4">
                                    <button onClick={() => (editAction())} type="button" className="btn btn-primary">Sửa</button>
                                    <button type="button" className="btn btn-primary delete">Xóa</button>
                                </div>
                            </div>
                        </div>
                        <div id="answerOne" className={showData ? 'collapse show' : 'collapse hide'} role="tabcard" aria-labelledby="questionOne">
                            <div className="card-body">{item.message}</div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        dispatch1: () => {
            dispatch(actionCreator)
        }
    }
}

export default connect() (TodoItem);