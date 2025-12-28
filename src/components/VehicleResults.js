import VehicleCard from "./VehicleCard";

export default function VehicleResults({ results, emiBudget }) {
  return (
    <div className="mt-10">
      <h2 className="text-xl font-semibold mb-4">
        Cars within your EMI budget: {emiBudget}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {results.map((car) => (
          <VehicleCard key={car.id} car={car} />
        ))}
      </div>
    </div>
  );
}
