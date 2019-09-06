import React from "react";
import ReactDOM from "react-dom";
import "./css/styles.scss";
import santorini from "./css/santorini.jpg";
// import { Animated } from "react-animated-css";

var board = [[0, 1, 2], [0, 1, 2], [0, 1, 2]];

export class Tictactoe extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			row1: [0, 0, 0],
			row2: [0, 0, 0],
			row3: [0, 0, 0],
			player1: null,
			winMessage: null,
			messageColor: 1,
			player: 1,
			newGameOnMount: true,
			counter: 1
		};
		this.winLogic = this.winLogic.bind(this);
		this.boxSelect = this.boxSelect.bind(this);
		this.newGame = this.newGame.bind(this);
	}

	winLogic(num) {
		console.log("Win logic running");

		console.log("count", this.state.counter);
		if (this.state.counter === 9 && this.state.winMessage === null) {
			this.setState({
				winMessage: "Nobody wins!",
				messageColor: null
			});
		}

		//vertical win
		if (
			this.state.row1[0] === num &&
			this.state.row2[0] === num &&
			this.state.row3[0] === num
		) {
			console.log(this.state.player1Win);
			this.setState(
				{
					player1: true,
					winMessage: `Player ${num} wins!`,
					messageColor: num
				},
				console.log("message color", this.state.messageColor)
			);
		}

		if (
			this.state.row1[1] === num &&
			this.state.row2[1] === num &&
			this.state.row3[1] === num
		) {
			console.log(this.state.player1Win);
			this.setState(
				{
					player1: true,
					winMessage: `Player ${num} wins!`,
					messageColor: num
				},
				console.log("STATE", this.state)
			);
		}

		if (
			this.state.row1[2] === num &&
			this.state.row2[2] === num &&
			this.state.row3[2] === num
		) {
			console.log(this.state.player1Win);
			this.setState({
				player1: true,
				winMessage: `Player ${num} wins!`,
				messageColor: num
			});
		}

		//horizontal win
		if (
			this.state.row1[0] === num &&
			this.state.row1[1] === num &&
			this.state.row1[2] === num
		) {
			console.log(this.state.player1Win);
			// winMessage = `Player ${num} wins!`;
			this.setState({
				player1: true,
				winMessage: `Player ${num} wins!`,
				messageColor: num
			});
		}

		if (
			this.state.row2[0] === num &&
			this.state.row2[1] === num &&
			this.state.row2[2] === num
		) {
			console.log(this.state.player1Win);
			// winMessage = `Player ${num} wins!`;
			this.setState({
				player1: true,
				winMessage: `Player ${num} wins!`,
				messageColor: num
			});
		}

		if (
			this.state.row3[0] === num &&
			this.state.row3[1] === num &&
			this.state.row3[2] === num
		) {
			console.log(this.state.player1Win);
			// winMessage = `Player ${num} wins!`;
			this.setState({
				player1: true,
				winMessage: `Player ${num} wins!`,
				messageColor: num
			});
		}

		//diagonal win
		if (
			this.state.row1[0] === num &&
			this.state.row2[1] === num &&
			this.state.row3[2] === num
		) {
			console.log(this.state.player1Win);
			// winMessage = `Player ${num} wins!`;
			this.setState({
				player1: true,
				winMessage: `Player ${num} wins!`,
				messageColor: num
			});
		}

		if (
			this.state.row1[2] === num &&
			this.state.row2[1] === num &&
			this.state.row3[0] === num
		) {
			console.log(this.state.player1Win);
			// winMessage = `Player ${num} wins!`;
			this.setState({
				player1: true,
				winMessage: `Player ${num} wins!`,
				messageColor: num
			});
		}
	}

	newGame() {
		if (this.state.newGameOnMount === true) {
			const newGame = document.querySelector(".newGameLoadAnimation");
			newGame.className = "newGame";
			newGame.classList.remove("animation");
			window.requestAnimationFrame(function() {
				newGame.classList.add("animation");
			});
		} else if (this.state.newGameOnMount === false) {
			const newGame = document.querySelector(".newGame");

			newGame.classList.remove("animation");
			window.requestAnimationFrame(function() {
				newGame.classList.add("animation");
			});
		}

		this.setState({
			row1: [0, 0, 0],
			row2: [0, 0, 0],
			row3: [0, 0, 0],
			player1: null,
			winMessage: null,
			messageColor: 1,
			player: 1,
			newGameOnMount: false,
			counter: 1
		});
	}

	boxSelect(index, row) {
		console.log("id", index);
		if (row === 3) {
			if (this.state.player === 1) {
				this.state.row3.splice(index, 1, 1);
				console.log(this.state.row3);
				this.setState(
					{
						player: 2,
						counter: this.state.counter + 1
					},
					this.winLogic(1)
				);
			} else {
				this.state.row3.splice(index, 1, 2);
				console.log(this.state.row3);
				this.setState(
					{
						player: 1,
						counter: this.state.counter + 1
					},
					this.winLogic(2)
				);
			}
		}
		if (row === 2) {
			if (this.state.player === 1) {
				this.state.row2.splice(index, 1, 1);
				console.log(this.state.row2);
				this.setState(
					{
						player: 2,
						counter: this.state.counter + 1
					},
					this.winLogic(1)
				);
			} else {
				this.state.row2.splice(index, 1, 2);
				console.log(this.state.row2);
				this.setState(
					{
						player: 1,
						counter: this.state.counter + 1
					},
					this.winLogic(2)
				);
			}
		}
		if (row === 1) {
			if (this.state.player === 1) {
				this.state.row1.splice(index, 1, 1);
				console.log(this.state.row1);
				this.setState(
					{
						player: 2,
						counter: this.state.counter + 1
					},
					this.winLogic(1)
				);
			} else {
				this.state.row1.splice(index, 1, 2);
				console.log(this.state.row1);
				this.setState(
					{
						player: 1,
						counter: this.state.counter + 1
					},
					this.winLogic(2)
				);
			}
		}
	}

	render() {
		console.log("STATE", this.state);
		const player1Fill = {
			background: "DEEPSKYBLUE"
		};

		const player2Fill = {
			background: "DODGERBLUE"
		};

		return (
			<div className='tictactoeGame'>
				<img className='santoriniImage' src={santorini} alt='Santorini Street' />
				<div className='tictactoeTitle'> Pick a Square!</div>

				<div className='gridContainer'>
					<div className='row1'>
						{board[0].map((index, row) => {
							var style = null;
							if (this.state.row1[index] === 1) {
								style = player1Fill;
							}
							if (this.state.row1[index] === 2) {
								style = player2Fill;
							}
							return (
								<div
									key={index}
									id={index}
									style={style}
									className={this.state.row1[index] === 0 ? "empty" : "filled"}
									onClick={
										this.state.row1[index] === 0 &&
										this.state.winMessage === null
											? e => this.boxSelect(index, 1)
											: null
									}
								/>
							);
						})}
					</div>

					<div className='row2'>
						{board[1].map((index, row) => {
							var style = null;
							if (this.state.row2[index] === 1) {
								style = player1Fill;
							}
							if (this.state.row2[index] === 2) {
								style = player2Fill;
							}
							return (
								<div
									key={index}
									id={index}
									style={style}
									className={this.state.row2[index] === 0 ? "empty" : "filled"}
									onClick={
										this.state.row2[index] === 0 &&
										this.state.winMessage === null
											? e => this.boxSelect(index, 2)
											: null
									}
								/>
							);
						})}
					</div>

					<div className='row3'>
						{board[2].map((index, row) => {
							var style = null;
							if (this.state.row3[index] === 1) {
								style = player1Fill;
							}
							if (this.state.row3[index] === 2) {
								style = player2Fill;
							}
							return (
								<div
									key={index}
									id={index}
									style={style}
									className={this.state.row3[index] === 0 ? "empty" : "filled"}
									onClick={
										this.state.row3[index] === 0 &&
										this.state.winMessage === null
											? e => this.boxSelect(index, 3)
											: null
									}
								/>
							);
						})}
					</div>
				</div>

				<div id='newGame' className='newGameLoadAnimation' onClick={e => this.newGame()}>
					New Game
				</div>

				<div className='gameMessageContainer'>
					<div
						className={
							this.state.messageColor === null
								? "gameMessage"
								: this.state.winMessage === "Player 2 wins!" ||
								  (this.state.player === 2 && this.state.winMessage === null)
								? "gameMessage2"
								: this.state.winMessage === "Player 1 wins!" ||
								  (this.state.player === 1 && this.state.winMessage === null)
								? "gameMessage1"
								: null
						}
					>
						{this.state.winMessage === null
							? `Player ${this.state.player}'s turn!`
							: this.state.winMessage}
					</div>
				</div>
			</div>
		);
	}
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Tictactoe />, rootElement);
