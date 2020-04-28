import React from 'react';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';

const Buttons = props => {

    return (
        <Breadcrumb>
            <BreadcrumbItem
                className={props.isActive ? "text-danger" : "text-muted"}
                onClick={props.activationMap}
            >
                Mapa
            </BreadcrumbItem>
            <BreadcrumbItem
                className={!props.isActive ? "text-danger" : "text-muted"}
                onClick={props.activationResult}
            >
                Współrzędne
            </BreadcrumbItem>
        </Breadcrumb>
    )
}

export default Buttons