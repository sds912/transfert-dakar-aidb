import React from 'react'

import './style.css'

const   ReservationForm = () => {
	return (
		
		
				<div className="row">
					<div className="booking-form">
						
						<form>
							<div className="row">
								<div className="col-sm-6">
									<div className="form-group">
										<span className="form-label">Nom et Prénom</span>
										<input className="form-control" type="text" placeholder="Enter your name" />
									</div>
								</div>
								<div className="col-sm-6">
									<div className="form-group">
										<span className="form-label">Email</span>
										<input className="form-control" type="email" placeholder="Enter your email" />
									</div>
								</div>
							</div>
							<div className="form-group">
								<span className="form-label">Téléphone</span>
								<input className="form-control" type="tel" placeholder="Enter your phone number" />
							</div>
							<div className="form-group">
								<span className="form-label">Lieu de départ</span>
								<input className="form-control" type="text" placeholder="Enter ZIP/Location" />
							</div>
							<div className="form-group">
								<span className="form-label">Destination</span>
								<select className="form-control">
									<option>Saly</option>
									<option>Thiés</option>
									<option>Ziguinchor</option>
									<option>Matam</option>
									<option>Tambacounda</option>
									<option>Touba</option>
									<option>Fatick</option>
									<option>Kaolack</option>
									<option>Kolda</option>
									<option>Louga</option>
								</select>
								<span className="select-arrow"></span>

							</div>
							<div className="row">
								<div className="col-sm-5">
									<div className="form-group">
										<span className="form-label">Date de Départ</span>
										<input className="form-control" type="date" required />
									</div>
								</div>
								<div className="col-sm-7">
									<div className="row">
										<div className="col-sm-6">
											<div className="form-group">
												<span className="form-label">Heure</span>
												<select className="form-control">
												    <option>00</option>
													<option>01</option>
													<option>02</option>
													<option>03</option>
													<option>04</option>
													<option>05</option>
													<option>06</option>
													<option>07</option>
													<option>08</option>
													<option>09</option>
													<option>10</option>
													<option>11</option>
													<option>12</option>
													<option>13</option>
													<option>14</option>
													<option>15</option>
													<option>16</option>
													<option>17</option>
													<option>18</option>
													<option>19</option>
													<option>20</option>
													<option>21</option>
													<option>22</option>
													<option>23</option>
												</select>
												<span className="select-arrow"></span>
											</div>
										</div>
										<div className="col-sm-6">
											<div className="form-group">
												<span className="form-label">Minutes</span>
												<select className="form-control">
													<option>05</option>
													<option>10</option>
													<option>15</option>
													<option>20</option>
													<option>25</option>
													<option>30</option>
													<option>35</option>
													<option>40</option>
													<option>45</option>
													<option>50</option>
													<option>55</option>
												</select>
												<span className="select-arrow"></span>
											</div>
										</div>
										
									</div>
								</div>
							</div>
							<div className="form-btn">
								<button className="submit-btn">Réserver</button>
							</div>
						</form>
					</div>
				</div>
			
		


	)
}


export default ReservationForm;



