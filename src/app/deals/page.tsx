import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function getDeals() {
  try {
    const deals = await prisma.deal.findMany({
      include: {
        sponsor: true,
      },
      orderBy: {
        createdAt: 'desc',
      },
    });
    return deals;
  } catch (error) {
    console.error('Error fetching deals:', error);
    return [];
  }
}

export default async function DealsPage() {
  const deals = await getDeals();

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">Investment Opportunities</h1>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
            Browse our curated selection of passive investment opportunities
          </p>
        </div>

        {/* Filters */}
        <div className="mt-8 flex flex-wrap gap-4 justify-center">
          <button className="px-4 py-2 rounded-full bg-indigo-100 text-indigo-800 hover:bg-indigo-200">
            All
          </button>
          <button className="px-4 py-2 rounded-full bg-white text-gray-700 hover:bg-gray-100">
            Real Estate
          </button>
          <button className="px-4 py-2 rounded-full bg-white text-gray-700 hover:bg-gray-100">
            Energy
          </button>
          <button className="px-4 py-2 rounded-full bg-white text-gray-700 hover:bg-gray-100">
            Private Equity
          </button>
        </div>

        {/* Deals Grid */}
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {deals.map((deal) => (
            <div
              key={deal.id}
              className="bg-white overflow-hidden shadow rounded-lg hover:shadow-lg transition-shadow duration-300"
            >
              <div className="p-6">
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800">
                    {deal.assetClass}
                  </span>
                  {deal.accreditedOnly && (
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-amber-100 text-amber-800">
                      Accredited Only
                    </span>
                  )}
                </div>
                <h3 className="mt-4 text-lg font-medium text-gray-900">{deal.title}</h3>
                <p className="mt-3 text-sm text-gray-500 line-clamp-3">{deal.description}</p>
                <div className="mt-4">
                  <p className="text-sm font-medium text-gray-500">Minimum Investment</p>
                  <p className="text-lg font-semibold text-gray-900">
                    ${deal.minInvestment.toLocaleString()}
                  </p>
                </div>
                <div className="mt-4 flex items-center">
                  <div className="flex-shrink-0">
                    <p className="text-sm font-medium text-gray-500">Sponsor</p>
                    <p className="text-sm font-medium text-gray-900">{deal.sponsor.name}</p>
                  </div>
                  <div className="ml-auto">
                    <a
                      href={deal.dealUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700"
                    >
                      View Deal
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 