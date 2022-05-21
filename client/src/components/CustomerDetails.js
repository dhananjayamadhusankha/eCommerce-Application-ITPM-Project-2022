import React, {Component} from 'react';
import axios from 'axios';

export default class CustomerDetails extends Component {
    constructor(props){
        super(props);

        this.state={
            customer:{}
        };
    }
//this is not working. need to check again
    componentDidMount(){
        const id = this.props.match.params.id;

        axios.get(`http://localhost:8000/customer/${id}`).then((res)=>{
            if(res.data.success){
                this.setState({
                    customer:res.data.customer
                });
                console.log(this.state.customer);
            }
        });
    }
    
    render() {

        const {name,age,gender,address,NIC,email} = this.state.customer;
        return(
        <div style={{marginTop:'20px'}}>
            <h4>{name}</h4>
            <hr/>
            
            <dl className="row">
                <dt className="col-sm-3">Name</dt>
                <dd className="col-sm-9">{name}</dd>

                <dt className="col-sm-3">Age</dt>
                <dd className="col-sm-9">{age}</dd>

                <dt className="col-sm-3">Gender</dt>
                <dd className="col-sm-9">{gender}</dd>  

                <dt className="col-sm-3">Country</dt>
                <dd className="col-sm-9">{address}</dd>   

                <dt className="col-sm-3">NIC</dt>
                <dd className="col-sm-9">{NIC}</dd>  

                <dt className="col-sm-3">Email</dt>
                <dd className="col-sm-9">{email}</dd>        


            </dl>
        </div>
        )
    }
}