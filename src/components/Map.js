import React from 'react';

const Map = props => {
    return (
        <>
            <div className="mapContainer">
                <div
                    id="map"
                    // style={{ width: '100%' }}
                    className="map"
                    object={props.object}
                    onDoubleClick={props.newMarker}
                    onMouseMove={props.mouseMove}
                >
                </div>
                {props.isEmpty === 0 ? <p className="text-info">Podwójne kliknięcie dodaje marker</p> : null}
            </div>
        </>
    );
};

export default Map;