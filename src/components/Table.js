import React from 'react';

const Table = props => {

    return (
        <table className="table table-hover table-sm">
            <thead>
                <tr>
                    <th scope="col">Numer znacznika:</th>
                    <th scope="col">Szerokość geograficzna:</th>
                    <th scope="col">Długość geograficzna:</th>
                    <th scope="col"></th>
                </tr>
            </thead>
            <tbody>
                {props.itemList}
            </tbody>
        </table>
    );
};

export default Table