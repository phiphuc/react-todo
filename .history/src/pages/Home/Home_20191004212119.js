import React, { Component } from 'react';
import {data} from '../../data/data';
import Layout from '../../components/Layout/index'
import TodoList from './../../components/Todo/TodoList/index';
import TodoForm from '../../components/Todo/TodoForm';
import { connect } from 'react-redux';
class Home extends Component {
    constructor(props){
        super(props);
        this.state = {
            data
        }
    }

    render() {
        const { data } = this.props;
        return (
            <Layout>
               <div className="row">
                    <TodoList data= {data} />
                    <TodoForm />
               </div>
            </Layout>
        );
    }
}

// const mapStateToProps = (state, ownProps) => {
//     return {
//         data: state
//     }
// }

// export default connect(mapStateToProps, null)(Home);
export default Home