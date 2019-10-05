import React, { Component } from 'react';
import './InputForm.css'
import { connect } from 'react-redux';
class InputForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            message: ''
        }
    }

    changeInput = (e) => {
        const value = e.target.value;
        this.setState({
            title: 'input' === e._targetInst.elementType ? value : this.state.title,
            message: 'textarea' === e._targetInst.elementType ? value : this.state.message
        })
    }
    render() {
        const { addForm } = this.props;
        return (
            <div className="input-form">
                <div>
                    <div className="form-group row">
                        <label htmlFor="inputEmail3" className="col-sm-4 col-form-label">Title</label>
                        <div className="col-sm-8">
                            <input type="title" onChange={(e) => this.changeInput(e)} className="form-control" id="titleId" placeholder="title" />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="inputPassword3" className="col-sm-4 col-form-label">Message</label>
                        <div className="col-sm-8">
                            <textarea type="text" onChange={(e) => this.changeInput(e)} className="form-control" id="inputPassword3" placeholder="message" />
                        </div>
                    </div>
                </div>
                <button  onClick={() => addForm(this.state)}  className="btn btn-primary">Add</button>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        addForm: (state) => {
            dispatch({ type: 'ADD_DATA', payload: state })
        }
    }
}

cons

export default connect(null, mapDispatchToProps)(InputForm);