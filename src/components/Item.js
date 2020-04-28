import React from 'react';
import { Button } from 'reactstrap';

const Item = props => {
    let { index, number, options } = props;
    let { lat, lng } = options._lngLat;
    return (
        <tr>
            <th scope="row" className="text-center align-middle text-info">{number}</th>
            <td className="text-center align-middle text-success">{lat.toFixed(4)} </td>
            <td className="text-center align-middle text-success">{lng.toFixed(4)}</td>
            <td className="text-center align-middle text-success">
                <Button
                    outline 
                    color="danger"
                    size="sm"
                    onClick={() => props.click(index)}
                >
                    <i className="fas fa-times"></i>
                </Button>
            </td>
        </tr>
    );
};

export default Item