import Image from "next/image";
import Hero from "@/components/Hero";
import SearchBar from "@/components/SearchBar";
import CustomFilter from "@/components/CustomFilter";
import { fetchTheCars } from "../../utils";

export default async function Home() {

	const allCars = await fetchTheCars();

	console.log(allCars)
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
			</div>
		</main>
	);
}
