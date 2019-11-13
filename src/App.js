//TODO: STEP 1 - Import the useState hook.
import React, { useState } from 'react';
import './App.css';
import BottomRow from './BottomRow';

function App() {
	//TODO: STEP 2 - Establish your application's state with some useState hooks.  You'll need one for the home score and another for the away score.
	const [ home, setHome ] = useState(100);
	const [ away, setAway ] = useState(0);

	return (
		<div className='container'>
			<section className='scoreboard'>
				<div className='topRow'>
					<div className='home'>
						<h2 className='home__name'>The Doctor</h2>

						{/* TODO STEP 3 - We need to change the hard-coded values in these divs to accept dynamic values from our state. */}

						<div className='home__score'>{home}</div>
					</div>
					<div className='timer'>00:01</div>
					<div className='away'>
						<h2 className='away__name'>The Daleks</h2>
						<div className='away__score'>{away}</div>
					</div>
				</div>
				<BottomRow />
			</section>
			<section className='buttons'>
				<div className='homeButtons'>
					{/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
					<button onClick={() => setHome(home + 100)} className='homeButtons__touchdown'>
						The Tardis
					</button>
					<button onClick={() => setHome(home + 10)} className='homeButtons__fieldGoal'>
						Sonic Screwdriver
					</button>
				</div>
				<div className='awayButtons'>
					<button onClick={() => setAway(away + 100)} className='awayButtons__touchdown'>
						Dalek Fleet
					</button>
					<button onClick={() => setAway(away + 10)} className='awayButtons__fieldGoal'>
						Death Ray
					</button>
				</div>
			</section>
		</div>
	);
}

export default App;
