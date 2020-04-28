import React, { Component } from 'react';
import './App.css';
// Components
import Buttons from './Buttons'
import Map from './Map'
import Item from './Item'
import Table from './Table'
// Mapbox Gl
import mapboxgl from 'mapbox-gl';


class App extends Component {

  state = {
    map: '',
    allMarkers: [],
    activeMap: true,
  };

  lat = '';
  lng = '';

  componentDidMount() {
    this.loadMap()
  };

  loadMap = () => {
    mapboxgl.accessToken = 'pk.eyJ1IjoiZGFvMGRhbyIsImEiOiJjazhscDZqcXUwN3l5M2xzMTd5djB6Z2FuIn0.zle1brsC9vyucloN0JwNRg';
    let map = new mapboxgl.Map({
      container: 'map',
      zoom: 15,
      center: [18.604448669620325, 53.01046747865513],
      style: 'mapbox://styles/mapbox/streets-v9'
    });
    map.doubleClickZoom.disable();

    this.setState({
      map,
    });
  };

  addMarker = (lng, lat) => {
    let { map, allMarkers } = this.state;
    let oneMaker = new mapboxgl.Marker({ draggable: true }).setLngLat([lng, lat]).addTo(map);
    let newAllMarkers = allMarkers;
    newAllMarkers.push({
      index: newAllMarkers.length,
      number: newAllMarkers.length + 1,
      options: oneMaker
    });
    this.updateState(newAllMarkers);
  }

  updateState = allMarkers => {
    this.setState({
      allMarkers
    });
  };

  handleRemoveClick = (index) => {
    let item = this.state.allMarkers.filter(el => el.index === index);
    let allMarkers = this.state.allMarkers.filter(el => el.index !== index);
    let deleteItem = item[0].options;
    deleteItem.remove();
    this.setState({
      allMarkers
    });
  };

  handleMouseMove = () => {
    let latt;
    let long;
    this.state.map.on('mousemove', (e) => {
      latt = e.lngLat.lat;
      long = e.lngLat.lng;
      this.lat = latt;
      this.lng = long;
    });
  };

  handleClickMapButton = () => {
    if (!this.state.activeMap) {
      this.setState({
        activeMap: true
      })
    }
  }
  handleClickResulButton = () => {
    if (this.state.activeMap) {
      this.setState({
        activeMap: false
      })
    }
  }

  render() {
    let { allMarkers, activeMap } = this.state;
    let itemList = allMarkers.map(
      item =>
        <Item
          key={item.index}
          index={item.index}
          number={item.number}
          options={item.options}
          click={this.handleRemoveClick}
        />);

    return (
      <>
        <Buttons
          isActive={activeMap}
          activationMap={this.handleClickMapButton}
          activationResult={this.handleClickResulButton}
        />
        <div className="parent" >
          <Map
            isMapActive={activeMap}
            isEmpty={allMarkers.length}
            object={this.state.map}
            newMarker={() => this.addMarker(this.lng, this.lat)}
            mouseMove={this.handleMouseMove}
          />
          {activeMap ? null :
            <div className='result'>
              <Table itemList={itemList} />
            </div>
          }
        </div>
      </>
    )
  }
}

export default App;
