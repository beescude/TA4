import React, { Component } from 'react'
import axios from "axios"
import { backend } from '../App'


export default class ShowEjercicio extends Component {
    render() {
        return (
            <div className="row">
                <div className="row mx-3">
                    <div className="col-md-4">
                        <h4>Cocina con menor consumo: </h4>
                    </div>
                    <div className="col-md-8">
                        <ul className="list-group">
                            {
                                this.state.users.map(user => (
                                    <li className="list-group-item list-group-item-action" key={user.id}
                                        id={user.id} onDoubleClick={this.ondelete}>
                                        {user.nombre + " " + user.apellido}
                                    </li>)
                                )
                            }
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
    state = {
        users: [],
        idEstudiante: '',
        nombreEstudiante: '',
        apellidoEstudiante: ''
    }

    async getEjercicioA() {
        const res = await axios.get(backend.host + ':' + backend.port + '/ejercicioA');
        this.setState({ users: res.data });
    }


    async componentDidMount() {
        await this.getEjercicioA();
        console.log(this.state.users);
    }


    ondelete = async (e) => {
        e.preventDefault();
    }
}
