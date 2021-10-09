import React from "react";
import {onloadEvent, contract, contract_vote,connect} from "./function_utl";
import a from './AAA.svg';
import './css/main.css';
import './css/daos.css';
import './css/line.css';


export default class Daos extends React.Component {
	componentDidMount() {
		onloadEvent.push(() => {
			contract.methods.getMissionList().call().then((e) => {
				e.map((v, i) => {
					if (v.State >= 2) return;
					let a = i.toString().split('');
					a = new Array(5 - a.length).concat(a);
					for (let x = 0; x < 5; x++) {
						if (a[x] === undefined) a[x] = 0;
					}
					let state = ['', 'Hiring', 'Received', 'Checking', 'Finished', 'Deleted']
					let l = document.createElement('li');
					let apply = function () {
						console.log(contract.defaultAccount);
						contract.methods.takeMission(i).send({from: contract.defaultAccount, gas: 6000000}).then(() => {
							alert('successful');
							window.location.reload();
						}).catch(err => {
							console.error(err);
							alert('failed');
						})
					}

					l.innerHTML += `
                    <div class="row">
                      <div class="col-5 line-right">
                        <h2># ${a.join('')} <span>${v.Title}</span></h2>
                        <p class="main-content">${v.Detail}</p>
                      </div>
                      <div class="col flex-column">
                        <p class="nums">
                          <span class="number">${v.reward}$</span> DCT
                        </p>
                        <p class="percent">${state[v.State]}</p>
                      </div>
                      <div class="col">
                        <a class="btn btn-primary" id=apply_${i}>Apply</a>
                      </div>
                    </div>
                  `;
					document.getElementById('bountyList').appendChild(l);
					document.getElementById(`apply_${i}`).addEventListener('click', apply);

				})
			})
			contract_vote.methods.getProposal().call().then(e => {
				async function a(v) {
					let l = document.createElement('li');
					let s = await contract_vote.methods.getVotingResult(v[0]).call()
					let rate = (s[1] + s[0]) == 0 ? 0 : (s[0] / (s[1] + s[0])).toFixed(2);
					l.innerHTML = `<div class="finance">${v.votingType}</div>
                            <div class="row">
                                <div class="col-8 line-right">
                                    <p>${v.votingDetails}</p>
                                    <div class="row">
                                        <div class="col-8">
                                            <div class="progress">
                                                <div
                                                        class="progress-bar"
                                                        role="progressbar"
                                                        style="width: ${rate}%"
                                                        aria-valuenow="70"
                                                        aria-valuemin="0"
                                                        aria-valuemax="100"
                                                ></div>
                                            </div>
                                        </div>
                                        <div class="col">
                                            <span class="progress-span">${rate * 100}%</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="col content-center">
                                    <p></p>
                                    <a class="btn" href="./votings?id=${v.proposalID}">Enter</a>
                                </div>
                            </div>`
					document.getElementById('v-list').appendChild(l);
				}

				e.map(v => {
					a(v);
				})
			})

		})
	}

	render() {
		return (
			<React.Fragment>
				<div className="first">
					<div className="line-left">
						<div className="line-white"></div>
					</div>
					<div className="line-left-2"></div>
					<div className="line-right">
						<div className="line-white"></div>
					</div>
					<div className="line-right-center"></div>
					<div className="line-right-center-2"></div>
					<div className="line-bottom">
						<div className="line-white"></div>
					</div>
					<div className="line-bottom-2"></div>

				</div>
				<header>
					<ul className="nav justify-content-end">
						<img src="img/logo.png" className="logo" height="50px" alt="" srcSet=""/>

						<li className="nav-item">
							<a className="nav-link active" href="./index.html">Home</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="./explore.html">Explore</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="./personal.html">Personal</a>
							<span className="current-span"></span>
						</li>
						<li className="nav-item">
							<a
								className="nav-link btn btn-primary nav-btn"
								href="#"
								tabIndex="-1"
								aria-disabled="true"
								onClick={connect}
							>Connect</a
							>
						</li>
					</ul>
				</header>
				<main>
					<div className="container">
						<div className="row">
							<div className="col">
								<div className="row">
									<h2>DAO INFOS</h2>
									<div className="dao-info">
										<div className="nav">
											<div className="finance">DAO</div>
											<img src={a} />
											<p className="title">DAOchurch DAO</p>
										</div>
										<p className="label">
											A DAO Focus On Building The Next-Gen Human Coordinating Tool
										</p>
										<p className="num">
											$<span>30000</span> Locked | <span>10</span> members
											<a className="btn" href="#">Apply</a>
										</p>
									</div>
								</div>
								<div className="row">
									<h2>PERSONAL INFOS</h2>
									<div className="dao-info personal">
										<div className="nav">
											<div className="left">
												<img
													width="50"
													height="50"
													src="data:image/jpeg;base64,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"
												/>
												<p className="label">Level 5</p>
												<span className="badge badge-dark">Badge 1</span>
												<span className="badge badge-dark">Badge 2</span>
												<span className="badge badge-dark">Badge 3</span>
											</div>
											<div className="right">
												<p className="title">Next level needs : 3000 XP</p>
												<div className="progress">
													<div
														className="progress-bar"
														role="progressbar"
														style={{width: "70%"}}
														aria-valuenow="70"
														aria-valuemin="0"
														aria-valuemax="100"
													/>
												</div>
												<p className="num num-1">Token Locked: <span>100000</span></p>
												<p className="num">XP Earned: <span>5000</span></p>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="col">
								<h2>VOTINGS</h2>
								<div className="list-container">
									<ul className="votings-list" id="v-list">
									</ul>
								</div>
							</div>
						</div>
						<div className="row">
							<div className="col">
								<h2>BOUNTIES</h2>
								<div className="row list-container">
									<div className="col">
										<ul className="bounties-list" id="bountyList"></ul>
									</div>
									<div className="col"></div>
									<ul className="page-list">
										<li className="current">1</li>
										<li>2</li>
										<li>3</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</main>
				<footer>
					<p className="p-center">GO BACK TO EXPLORE DAOs</p>
					<div className="container">
						<div className="row">
							<div className="col-sm">
								<div className="row">
									<img
										src="img/logo.png"
										className="logo"
										height="157px"
										alt=""
										srcSet=""
									/>
								</div>
								<div className="row">
									<p className="" style={{fontSize: "46px", lineHeight: "50px"}}>
										DAOchurch
									</p>
								</div>
								<div className="row">
									<p style={{fontSize: "12px",lineHeight: "14px"}}>
										NEXT-GEN HUMAN COLLABORATION TOOL
									</p>
								</div>
							</div>
							<div className="col-7 center">
								<p>请输入文本内容请输入文本内容请输入文本内容请输入文本内容</p>
								<p>请输入文本内容请输入文本内容请输入文本内容请输入文本内容</p>
								<p>请输入文本内容请输入文本内容请输入文本内容请输入文本内容</p>
								<p>请输入文本内容请输入文本内容请输入文本内容请输入文本内容</p>
							</div>
							<div className="col-sm icons">
								<div className="row">
									<div className="col">
										<i className="bi-twitter"></i><span>Twitter</span>
									</div>
								</div>
								<div className="row">
									<div className="col">
										<i className="bi-discord"></i><span>Discord</span>
									</div>
								</div>
								<div className="row">
									<div className="col">
										<i className="bi-facebook"></i><span>Meduim</span>
									</div>
								</div>
							</div>
						</div>
					</div>
				</footer>
			</React.Fragment>
		);
	}
}


