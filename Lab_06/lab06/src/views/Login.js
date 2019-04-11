import React, {Component} from 'react';
import axios from '../utils/axios';

class Login extends Component{
	state = {
		usuario: '',
		password: ''
	}
	usuarioHandler = e => this.setState({usuarios:e.target.value})
	passwordHandler = e => this.setState({password: e.target.value})
	submitHandler = e => {
		e.preventDefault();
		axios({
			method: 'post',
			url: 'user/signin',
			data: {
				username: this.state.usuario,
				password: this.state.password
			}
		}).then(response => {
			console.log('mi respuesta', response)
		}).catch(error => {
			console.log('hubo un error', error)
		})
	}
	render(){
		return(<form onSubmit={this.submitHandler}>
			<div>
				<label>Usuario</label>
				<input
					type='text'
					placeholder='Usuario para sesión'
					value = {this.state.usuario}
					onChange={this.usuarioHandler}/>
			</div>
			<div>
				<label>Contraseña</label>
				<input
					type='password'
					placeholder='123456'
					value = {this.state.password}
					onChange={this.passwordHandler}/>
			</div>
			<button type='submit'>Iniciar sesión</button>
		</form>);
	}
}

export default Login;