import React from "react"
import {onloadEvent, contract, contract_vote,connect} from "./function_utl";
import B from "./bbb.svg";
import "./css/line-1.css";
import "./css/main.css";
import T from "./ttt.svg";
import P from "./ppp.svg";


export default class Voting extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			propsId:''
		}
		this.prove = this.prove.bind(this);
		this.reject = this.reject.bind(this);
	}

	vote(v){
		contract_vote.methods.vote(this.state.propsId,v).send({from:contract.defaultAccount,gas: 6000000}).then(()=>{alert('success')}).catch((e)=>{
			console.error(e);
			alert('failed');
		});
	}
	prove(){
		this.vote(true);
	}
	reject(){
		this.vote(false);
	}

	componentDidMount() {
		let propsId = window.location.search.replace('?','').split('=')[1];
		this.setState((e)=>({propsId}))
		onloadEvent.push(() => {
			async function a(e){
				e = e[propsId];
				document.getElementById('title').innerText = e.votingDetails;
				document.getElementById('nums').innerText = e.withdrawAmount;
				document.getElementById('creator').innerText = e.votingCreator;
				let s = await contract_vote.methods.getVotingResult(e[0]).call()
				let rate = (s[1] + s[0]) == 0 ? 0 : (s[0] / (s[1] + s[0])).toFixed(2);
				document.getElementById('rate').innerText = rate*100 + '%';
				document.getElementById('rate_show').style.width = rate*100 + '%';
				document.getElementById('yes').innerText = s[0];
				document.getElementById('no').innerText = s[1];
			}
			contract_vote.methods.getProposal().call().then(a);
		});

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
							<a className="nav-link active" href="./explore.html#explore">Explore</a>
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
							>Connect</a
							>
						</li>
					</ul>
				</header>
				<main>
					<div className="container">
						<div className="row">
							<div className="col-7">
								<h2>DETAILS</h2>
								<div className="details">
									<div className="nav">
										<div className="finance">Finance</div>
										<div className="f00020"># 00020</div>
									</div>
									<h1 id="title">Claim 5000 DCT for Samuel's work this month</h1>
									<p className="label">Amount</p>
									<p className="num"><span id="nums">5000</span> DCT</p>
									<div className="row">
										<div className="col">
											<h3>Created by</h3>
											<div className="people">
												<img src={B} />
												<span className="name" id="creator">Samuel(samuel2k.eth)</span>
											</div>
										</div>

									</div>
								</div>
							</div>
							<div className="col">
								<h2>STATUS</h2>
								<div className="status">
									<p className="ongoing">Ongoing</p>
									<p className="time">Ends at <span>2021-6-06, 03:27</span></p>
									<p className="token">Your DCT Token: <span>5000</span></p>
									<div className="row">
										<button type="button" onClick={this.prove} className="btn btn-primary yes">Yes
										</button>
										<button type="button" onClick={this.reject} className="btn btn-primary no">No
										</button>
									</div>
									<div className="row">
										<div className="col-10">
											<div className="progress">
												<div id="rate_show"
												     className="progress-bar"
												     role="progressbar"
												     style={{width: "64%"}}
												     aria-valuenow="64"
												     aria-valuemin="0"
												     aria-valuemax="100"
												></div>
											</div>
										</div>
										<div className="col">
											<span id="rate" className="progress-span">64%</span>
										</div>
									</div>
									<p className="yes">
										YES: <span id="yes">2000</span><span className="dtc"> DTC</span>
									</p>
									<p className="no">
										NO: <span id="no">1000</span><span className="dtc"> DTC</span>
									</p>
								</div>
							</div>
						</div>
						<div className="row">
							<div className="col">
								<h2>ACTIVITIES</h2>
								<div className="list-container">
									<ul className="main-list">
										<li>
											<img src={T} />
											<span className="title">Taka(TakaLyu.eth)</span>
										</li>
										<li>
											<img src={P} />

											<span className="title text-black">TurboGGS(TurboGGS.eth)</span>
											<span className="time text-black">2021-6-03, 05:27</span>
										</li>
									</ul>
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
									<p className="" style={{fontSize: "46px",lineHeight: "50px"}}>
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


