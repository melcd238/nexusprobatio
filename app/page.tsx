import Image from 'next/image';
import startupData from './data/startups.json';

export default function Home() {
  const { startups } = startupData;
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="p-4">
        <h1 className="text-2xl mb-4 text-center">
          Devenez Bêta-Testeur : Découvrez les Start-ups innovantes qui ont
          besoin de vous!
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {startups.map((startup) => (
            <div
              key={startup.id}
              className="bg-white shadow-lg rounded-lg p-6 space-y-4"
            >
              <Image
                src={startup.logoUrl}
                alt={startup.name}
                width={128}
                height={128}
                className="w-32 mx-auto mb-4"
              />
              <h2 className="text-xl mb-2 text-gray-700">{startup.name}</h2>
              <p className="text-gray-700">
                <strong>Description :</strong> {startup.description}
              </p>
              <p className="text-gray-700">
                <strong>Localisation :</strong> {startup.location}
              </p>
              <p className="text-gray-700">
                <strong>Plateformes :</strong> {startup.platforms.join(', ')}
              </p>
              <p className="text-gray-700">
                <strong>Recherche :</strong> {startup.searchCriteria}
              </p>
              <p className="text-gray-700">
                <strong>Rémunération :</strong> {startup.compensation}
              </p>
              <p className="text-gray-700">
                <strong>Retour attendu :</strong> {startup.expectedFeedback}
              </p>
              <p className="text-gray-700">
                <strong>Experience requise :</strong>{' '}
                {startup.requiredExperience}
              </p>
              <p className="text-gray-700">
                <strong>Posté le :</strong> {startup.postedOn}
              </p>
              <p className="text-gray-700">
                <strong>Date limite :</strong> {startup.deadline}
              </p>
              <p className="text-gray-700">
                <strong>Positions disponibles :</strong>{' '}
                {startup.positionsAvailable}
              </p>
              <div>
                <a
                  href={startup.website}
                  className="text-blue-500 hover:underline mr-2"
                >
                  Site web
                </a>
                <a
                  href={startup.socialLinks.linkedin}
                  className="text-blue-500 hover:underline mr-2"
                >
                  LinkedIn
                </a>
                <a
                  href={startup.socialLinks.twitter}
                  className="text-blue-500 hover:underline"
                >
                  Twitter
                </a>
              </div>
              <button
                className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                type="button"
              >
                S&apos;inscrire au test
              </button>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
