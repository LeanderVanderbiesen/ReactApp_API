import * as React from 'react';
import {getDetail, update, del} from "../../services/nobelprize.service";
import { Link } from 'react-router-dom';

export class NobelprizeWinnerDetail extends React.Component{
    constructor(props) {
        super(props);
            const winnerId = props.match.params.id;
        this.state = {
            nobelprizeWinner: {},
        };

        getDetail(winnerId).then((response) => {
            console.log(response.message);

            this.setState({
                nobelprizeWinner: response.message,
            });
        });
    }

        updateFirstName(firstname) {
            this.setState({
                nobelprizeWinner: {
                    ...this.state.nobelprizeWinner,
                    firstname,
                    name: `${firstname} ${this.state.nobelprizeWinner.surname}`,
                },
            });
        }

        updateSurname(surname){
            this.setState({
                nobelprizeWinner: {
                    ...this.state.nobelprizeWinner,
                    surname,
                    name: `${this.state.nobelprizeWinner.firstName} ${surname}`,
                },
            })
        }

        updateMotivation(motivation) {
            this.setState({
                nobelprizeWinner: {
                    ...this.state.nobelprizeWinner,
                    motivation,
                },
            });
        }

        updateShare(share) {
            this.setState({
                nobelprizeWinner: {
                    ...this.state.nobelprizeWinner,
                    share,
                },
            });
        }

        deleteNobelprizeWinner = (e) => {
                e.preventDefault();
                del(this.state.nobelprizeWinner.id).then((response) => {
                    this.props.history.push('/');
                });
            };

        onSubmit = (e) => {
            console.log(this.state.nobelprizeWinner);
            e.preventDefault();

            const { nobelprizeWinner: { firstname, surname, motivation, share } } = this.state;

            if (firstname && surname && motivation && share)
            {
                update(this.state.nobelprizeWinner.id, this.state.nobelprizeWinner).then((response) => {
                    this.props.history.push('/');
                });
            }else{
                this.setState({
                    error:true,
                });
            }

        };
    render(){
        return(

            <main>
                <div>
                    <h1 className="h1-detail">Edit nobelprize winner</h1>
                    {(this.state.nobelprizeWinner.id) ?(
                        <form onSubmit={this.onSubmit}>

                            <div className="form-group">
                                <label htmlFor="nobelprizeWinner-firstname">Firstname: </label>
                                <input type="text" className="form-control" name="nobelprizeWinner-firstname" id="nobelprizeWinner-firstname" defaultValue={ this.state.nobelprizeWinner.firstname} onChange={(e) => this.updateFirstName(e.target.value)} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="nobelprizeWinner-surname">Surname: </label>
                                <input type="text" className="form-control" name="nobelprizeWinner-surname" id="nobelprizeWinner-surname" defaultValue={ this.state.nobelprizeWinner.surname} onChange={(e) => this.updateSurname(e.target.value)} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="nobelprizeWinner-motivation">Motivation: </label>
                                <input type="text" className="form-control" name="nobelprizeWinner-motivation" id="nobelprizeWinner-motiation" defaultValue={ this.state.nobelprizeWinner.motivation} onChange={(e) => this.updateMotivation(e.target.value)} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="nobelprizeWinner-share">Share: </label>
                                <input type="text" className="form-control" name="nobelprizeWinner-share" id="nobelprizeWinner-share" defaultValue={ this.state.nobelprizeWinner.share} onChange={(e) => this.updateShare(e.target.value)} />
                            </div>
                            { this.state.error ? (<p className="error">Input fields cannot be empty!</p>) : null }
                            <button type="submit" className="btn btn-primary">Submit</button>
                            <div className="controls">
                                <a className="btn delete" onClick={this.deleteNobelprizeWinner}>Delete Nobelprize Winner</a>
                            </div>

                        </form>

                    ) : (
                        <Link to={`/`}>
                        <p>Could not load nobelprize winner, go back.</p>
                        </Link>
                    )}
                </div>

            </main>
        );

    }
}