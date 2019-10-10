import * as React from 'react';
import { Link } from 'react-router-dom';

export const NobelprizeWinner = (props) => (
    <ul className="list-group">
            <li className="list-group-item d-flex justify-content-between align-items-center">
                Firstname: {props.firstname}, Surname: {props.surname}
                <span>
                    <Link to={`/nobelprizeWinner/${props.id}`}>More Info</Link>
                </span>
            </li>
    </ul>

);