import Image from "next/image";
import Hero from "@/components/Hero";
import SearchBar from "@/components/SearchBar";
import CustomFilter from "@/components/CustomFilter";
import { fetchTheCars } from "../../utils";
import CarCard from "@/components/CarCard";

export default async function Home() {
	const allCars = await fetchTheCars();
	const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;
	return (
		<main className="overflow-hidden">
			<Hero />
			<div className="pt-12 padding-x padding-y max-width" id="discover">
				<div id="home__text-container">
					<h1 className="text-4xl font-bold">Car Catalogue</h1>
					<p className="text-black">Explore the cars you might like.</p>
				</div>
				<div className="home__filters">
					<SearchBar />

					<div className="home__filter-container">
						<CustomFilter />
						<CustomFilter />
					</div>
				</div>
				{!isDataEmpty ? (
					<section>
						<div className="home__cars-wrapper">
							{ allCars?.map((car) => 
							<CarCard car={car}/>) }
							</div>
					</section>
				) : (
					<div className="home__error-container">
						<h2 className="text-black text-xl">Oops, Nothing Found.</h2>
					</div>
				)}
			</div>
		</main>
	);
}
