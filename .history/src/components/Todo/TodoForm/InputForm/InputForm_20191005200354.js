import React, { Component } from 'react';
import { ADD_DATA, EDIT_DATA } from '../../../../actions/index'
import './InputForm.css'
import { connect } from 'react-redux';
class InputForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id:'',
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

    componentWillReceiveProps (nextProps) {
        console.log(nextProps)
        this.setState({
            id: nextProps.editData.id,
            title: nextProps.editData.title,
            message: this.props.editData.message
        })
    }


    render() {
        const { addForm , editForm} = this.props;
        const { message } = this.props.editData;
        const { title } = this.props.editData;
        const { id } = this.props.editData;
        const { edit } = this.props 
        return (
            <div className="input-form">
                <div>
                    <div className="form-group row">
                        <label htmlFor="inputEmail3" className="col-sm-4 col-form-label">Title</label>
                        <div className="col-sm-8">
                            <input type="title" defaultValue = { title }  onChange={(e) => this.changeInput(e)} className="form-control" id="titleId" placeholder="title" />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="inputPassword3" className="col-sm-4 col-form-label">Message</label>
                        <div className="col-sm-8">
                            <textarea type="text" defaultValue = { message } onChange={(e) => this.changeInput(e)} className="form-control" id="inputPassword3" placeholder="message" />
                        </div>
                    </div>
                </div>
                {
                    edit ? <button type="submit" onClick={() => editForm({...this.state, id})} className="btn btn-primary">Edit</button> 
                    : <button type="submit" onClick={() => addForm({...this.state, id})} className="btn btn-primary">Add</button>
                }
                
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        addForm: (state) => {
            dispatch({ type: ADD_DATA, payload: state })
        },
        editForm: (state) => {
            dispatch({ type: EDIT_DATA, payload: state })
        }
    }
}

const mapStateToProps = (state, ownProps) => {
    return   state;
}

export default connect(mapStateToProps, mapDispatchToProps)(InputForm);