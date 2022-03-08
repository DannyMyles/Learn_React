/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
class Home extends Component {
    state = {  }
    render() {
        return (
            <div class="jumbotron">
                <h1 class="display-4 ml-5">Learn React!</h1>
                    <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
                    <hr class="my-4"></hr>
                    <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
                    <p class="lead">
                <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
                </p>
            </div>
        );
    }
}

export default Home;