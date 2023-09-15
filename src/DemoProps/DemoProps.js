import React, { Component } from 'react'
import UsereCard from './UsereCard'
import { faker } from '@faker-js/faker'

export default class DemoProps extends Component {
    state = {
        user: "Mon",
        title: "AAAAAAAA"
    }
    //state ở đâu thì viết setState ở đó
    handleChangeName = () => {      //airline.flightNumber()                
        this.setState({ user: faker.animal.dog() })
    }
    render() {
        return (
            <div>
                <h2>DemoProps</h2>
                <UsereCard userData={this.state.user} title="Profile"
                    handleChange={this.handleChangeName}
                />
            </div>
        )
    }
}
