import React from 'react';
import PropTypes from 'prop-types';
import $ from 'jquery';
global.__CITY__ = require('../cityInfo');
const styles = {
    city:{
        margin: "3px 4px",
        padding: "6px 12px",
        fontSize: "14px",
        color:'#666',
        boxSizing:'border-box',
        border:'1px solid #ddd',
        borderRadius:'2px',
        backgroundColor:'#fff'
    }
}
class City extends React.Component{
    constructor(props, context) {
        super(props, context);
        this.json = global.__CITY__
        this.state = {
            provinceIndex: -1,
            cityIndex: -1,
        };
    }
    componentWillMount = () => {
        if (this.props.cityName != '') {
            var arr = this.props.cityName.split(' ');
            this.json.map(function(array, index){
                if (array.name == arr[0] ) {
                    this.json[index].city.map(function(cityName,cityIndex){
                        if (cityName.name == arr[1]) {
                            this.setState({
                                provinceIndex:index,
                                cityIndex:cityIndex
                            });
                        }
                    }.bind(this));                
                }
            }.bind(this));
        }
    } 
    componentDidMount = () => {
        if (this.props.cityName != '') {
            var arr = this.props.cityName.split(' ');
            $('#province').val(arr[0]);
            $('#city').val(arr[1]);
            $('#county').val(arr[2]);
        }        
    }
    provinceOption = () => {
        return this.json.map(function(array, index){
            return (<option key={index} data-index={index}>{array.name}</option>);
        });
    };
    cityOption = () => {
        if(this.state.provinceIndex == -1){
            return false;
        }else{
            return this.json[this.state.provinceIndex].city.map(function(array, index){
                return (<option key={index} data-index={index}>{array.name}</option>);
            });
        }
    };
    countyOption = () => {
        if(this.state.cityIndex == -1){
            return false;
        }else{
            return this.json[this.state.provinceIndex].city[this.state.cityIndex].area.map(function(array, index){
                return (<option key={index} data-index={index}>{array}</option>);
            });
        }
    };
    provinceChange = (event) => {
        var e = event.target;
        var changeC = 0
        var indexing = e.options[e.selectedIndex].getAttribute("data-index");
        this.setState({
            cityIndex:-1,
            provinceIndex:indexing
        });
        this.refs.city.value = "-1";
        this.refs.county.value = "-1";
        var cIndex = this.refs.city.getAttribute("data-index");
        if (cIndex == null) {
            changeC = 1
        }
        this.props.callbackParent(e.value,indexing,1,changeC);
    };
    cityChange = (event) => {
        var e = event.target;
        var changeC = 0
        var indexing = e.options[e.selectedIndex].getAttribute("data-index");
        var cIndex = this.refs.county.getAttribute("data-index");
        if (cIndex == null) {
            changeC = 2
        }
        if (indexing == -1) {
            this.setState({
                cityIndex:-1,
                provinceIndex:indexing
            });
            this.refs.province.value = "-1";
        }
        this.setState({
            cityIndex:indexing,
        });
        this.refs.county.value = "-1";
        this.props.callbackParent(e.value,indexing,2,changeC);
    };
    countryChange = (event) => {
        var e = event.target;
        var indexing = e.options[e.selectedIndex].getAttribute("data-index");
        if (indexing == -1) {
            this.setState({
                cityIndex:-1,
                provinceIndex:indexing
            });
            this.refs.province.value = "-1";
        }
        this.props.callbackParent(e.value,indexing,3);
    }
    render(){
        return (
            <span>
                <select name={this.props.provinceName ? this.props.provinceName : "province"} id="province" style={styles.city} ref="province" onChange={this.provinceChange}>
                    <option key="-1" value="-1" data-index="-1">省份</option>
                    {this.provinceOption()}
                </select>
                <select name={this.props.cityName ? this.props.cityName : "city"} style={styles.city} id="city" onChange={this.cityChange} ref="city">
                    <option key="-1" value="-1" data-index="-1">地级市</option>
                    {this.cityOption()}
                </select>
                <select name={this.props.countyName ? this.props.countyName : "county"} style={styles.city} id="county" onChange={this.countryChange} ref="county">
                    <option key="-1" value="-1" data-index="-1">市、县级市</option>
                    {this.countyOption()}
                </select>
            </span>
        );
    }
};
City.contextTypes = {
  router:PropTypes.object.isRequired
};
export default City;