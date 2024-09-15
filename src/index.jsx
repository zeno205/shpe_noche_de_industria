import { hydrate, prerender as ssr } from 'preact-iso';

import './style.css';

export function App() {
	return (
		<div className="min-h-screen bg-white">
			<div className="hero bg-gradient-to-r from-[#003087] to-[#00A0DF] text-white relative">
				<div className="hero-overlay bg-[url('https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp')] opacity-20 bg-cover bg-center"></div>
				<div className="hero-content text-center">
					<div className="max-w-3xl py-6">
						<h1 className="mb-2 text-3xl sm:text-4xl lg:text-5xl font-bold text-[#FDB913]">Welcome to</h1>
						<h1 className="mb-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#F26522]">Noche de Industria</h1>
						<p className="text-base md:text-lg">
							Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni fugit mollitia cupiditate quos! Repellendus, aperiam quia aliquid, veniam reiciendis excepturi porro autem quisquam, exercitationem nobis dolore culpa error quasi assumenda.
						</p>
					</div>
				</div>
			</div>

			<div className="container mx-auto py-8 md:py-10 px-4">
				<h1 className="text-3xl md:text-4xl font-bold text-center text-[#003087] pb-8 md:pb-10">
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
				<div className="container mx-auto text-center">
					<p>&copy; 2024 SHPE at University of South Florida. All rights reserved.</p>
				</div>
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
