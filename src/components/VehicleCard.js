import Image from "next/image";
import Link from "next/link";

export default function VehicleCard({ cars }) {
  return (
    <>
      {cars.map((car) => (
        <div key={car.id} className="border p-4">
          {car.image && (
            <img
              src={car.image}
              alt={car.name}
              className="mb-3"
            />
          )}

          <h3 className="font-semibold">{car.name}</h3>

          <p className="text-sm">
            Monthly EMI: <strong>{car.emi_monthly}</strong>
          </p>

          <Link
            href={`/cars/${car.slug}`}
            className="inline-block mt-3 underline"
          >
            View Car
          </Link>
        </div>
      ))}
    </>
  );
}
