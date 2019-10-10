import * as React from 'react';
import { getAll } from '../../services/nobelprize.service';
import {NobelprizeWinner} from "../NobelprizeWinner/nobelprizeWinner";

export class NobelprizeOverview extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            nobelprizes: [],
        };

        getAll().then((response) => {
            console.log(response.message);

            this.setState({
                nobelprizes:  response.message,

            });

        }).catch((error) => {
            console.error(error);
        });
    }

    render() {

        return(
            <div className="overview">
                <div className="col-lg-12">
                    <div className="page-header">
                        <h1>All winners</h1>
                    </div>
                    {
                        this.state.nobelprizes.map((prizes) => {
                            return prizes.laureates.map((laureate, i) =>{
                                   return (<NobelprizeWinner key={`nobelprizeWinner-${i}`} {...laureate} />);
                           })
                        })
                    }
                </div>
             </div>
        )
    }
}