import { hydrate, prerender as ssr } from 'preact-iso';
// import Parallax from './components/Parallax.jsx';

import './style.css';

export function App() {
	return (
		<div className="min-h-screen relative">
			{/* Hero Section */}
			<div className="hero text-white relative min-h-screen">
				<div className="hero-overlay bg-gradient-to-r from-[#003087] to-[#00A0DF] opacity-70"></div>
				<div className="hero-overlay bg-center w-screen h-screen fixed -z-10" style={{ backgroundImage: `url('https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp')` }} ></div>
				<div className="hero-content text-center">
					<div className="max-w-3xl py-12">
						<h1 className="mb-2 text-3xl sm:text-4xl lg:text-6xl font-bold text-[#FDB913] drop-shadow-lg">Welcome to</h1>
						<h1 className="mb-6 text-4xl sm:text-5xl lg:text-7xl font-extrabold text-[#F26522] drop-shadow-xl transition-all duration-300 hover:scale-105">
							Noche de Industria
						</h1>
						<p className="text-base sm:text-2xl uppercase font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#FDB913] to-[#F26522]">
							Turn your passion into profession
						</p>
						<p className="text-base md:text-xl text-white font-light max-w-2xl mx-auto mt-2 leading-relaxed">
							Kickstart your career with <span className="font-semibold text-[#FDB913]">amazing companies</span> and <span className="font-semibold text-[#FDB913]">industry leaders</span>
						</p>
					</div>
				</div>
				<div className="absolute bottom-8 text-center animate-bounce">
					<p className="text-white text-sm mb-1">See Companies</p>
					<svg className="w-6 h-6 mx-auto text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
						<path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
					</svg>
				</div>
			</div>

			<div className="py-16 px-4 bg-white">
				<h1 className="text-4xl lg:text-5xl font-bold text-center text-[#003087] pb-12 drop-shadow-md">
					Participating Companies
				</h1>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
					{[1, 2, 3].map((item) => (
						<div key={item} className="card bg-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
							<figure className="px-10 pt-10 pb-6 bg-gradient-to-br from-[#003087] to-[#00A0DF]">
								<div className="avatar placeholder">
									<div className="bg-white text-[#003087] rounded-full w-24 h-24">
										<span className="text-4xl font-bold">{item}</span>
									</div>
								</div>
							</figure>
							<div className="card-body items-center text-center p-6">
								<h2 className="card-title text-2xl font-bold text-[#003087]">Company {item}</h2>
								<p className="text-gray-600 mb-4">Leading innovator in engineering and technology solutions.</p>
								<div className="card-actions w-full">
									<button className="btn bg-[#00A0DF] hover:bg-[#0082B3] text-white w-full border-none transition-colors duration-300">
										Learn More
									</button>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>


			<footer className="bg-[#003087] text-white py-5">
				<div className="container mx-auto text-center text-xs sm:text-sm">
					<p>&copy; 2024 SHPE at University of South Florida. All rights reserved.</p>
				</div>
				{/* padding at bottom of the page to mitigate bouncing scroll on Safari */}
				<div className="bg-[#003087] w-full h-6 -mb-6"></div>
			</footer>
		</div>
	);
}

if (typeof window !== 'undefined') {
	hydrate(<App />, document.getElementById('app'));
}

export async function prerender(data) {
	return await ssr(<App {...data} />);
}
