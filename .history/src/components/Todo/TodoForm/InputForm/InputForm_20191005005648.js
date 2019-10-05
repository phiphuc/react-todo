import React, { Component } from 'react';
import './InputForm.css'
import { connect } from 'react-redux';
const InputForm = ({addForm}) => {

    const state = {
        title: props.title,
        message: props.message
    }

    changeInput = (e) => {
        const value = e.target.value;
            state.title = 'input' === e._targetInst.elementType ? value : state.title,
            state.message = 'textarea' === e._targetInst.elementType ? value : state.message
        })
    }

    const { title, message } = state;
    return (
        <div className="input-form">
            <div>
                <div className="form-group row">
                    <label htmlFor="inputEmail3" className="col-sm-4 col-form-label">Title</label>
                    <div className="col-sm-8">
                        <input type="title" value={title} onChange={(e) => this.changeInput(e)} className="form-control" id="titleId" placeholder="title" />
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="inputPassword3" className="col-sm-4 col-form-label">Message</label>
                    <div className="col-sm-8">
                        <textarea type="text" value={message} onChange={(e) => this.changeInput(e)} className="form-control" id="inputPassword3" placeholder="message" />
                    </div>
                </div>
            </div>
            <button onClick={() => addForm({ title: title, message: message })} className="btn btn-primary">Add</button>
        </div>
    )
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        addForm: (state) => {
            dispatch({ type: 'ADD_DATA', payload: state })
        }
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        fillData: state.fillData,
        edit: state.edit
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(InputForm);