import Link from "next/link";

export default function EmiResults({ cars }) {
  if (!cars || cars.length === 0) return null;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
      {cars.map((car) => (
        <div key={car.id} className="border p-4">
          {car.banner_image && (
            <img
              src={car.banner_image}
              alt={car.name}
              className="mb-3"
            />
          )}

          <h3 className="font-semibold">{car.name}</h3>

          <p className="text-sm">
            Monthly EMI: <strong>{car.emi}</strong>
          </p>

          <Link
            href={`/cars/${car.slug}`}        className="inline-block mt-3 underline"
          >
            View Car
          </Link>
        </div>
      ))}
    </div>
  );
}
