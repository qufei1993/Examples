import City from './City';

  handleCityChange = (newVal,indexing,type,changeVal) => {
    this.setState({
      errorText:''
    });
    this.setState({
      HotelComplaints:{
        ...this.state.HotelComplaints,
        hotelCity:''
      }
    });
    if (indexing == -1){
      this.setState({
        checkedProvince:'',
        provinceIndex:-1,
        checkedCity:'',
        cityIndex:-1,
        checkedCountry:'',
        countryIndex:-1,
      });
      return false;
    }
    if (changeVal == 2) {
      this.setState({
        checkedCountry:'',
        countryIndex:-1,
      });
    }
    if (changeVal == 1) {
      this.setState({
        checkedCity:'',
        cityIndex:-1,
        checkedCountry:'',
        countryIndex:-1,
      });
    }
    switch(type){
      case 1:
        this.setState({
          checkedProvince:newVal,
          provinceIndex:indexing
        });
        break;
      case 2:
        this.setState({
          checkedCity:newVal,
          cityIndex:indexing
        });
        break;
      case 3:
        this.setState({
          checkedCountry:newVal,
          countryIndex:indexing
        });
        break;
    }
  }
  <p>
    <b>选择的省份是</b> {this.state.checkedProvince}{this.state.provinceIndex} <br/>
    <b>选择的城市是</b> {this.state.checkedCity}{this.state.cityIndex}  <br/>
    <b>选择的乡村是</b> {this.state.checkedCountry}{this.state.countryIndex} <br/>
  </p>
  <City cityName='' callbackParent={this.handleCityChange} />
