import { PrismaClient } from '@prisma/client';
import { hash } from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  // Create sample sponsors
  const sponsors = await Promise.all([
    prisma.sponsor.create({
      data: {
        name: 'Evergreen Capital',
        website: 'https://evergreen-capital.example.com',
        description: 'Leading private equity firm focusing on sustainable energy investments.',
        googleReviews: 4.8,
        userReviews: 4.7,
      },
    }),
    prisma.sponsor.create({
      data: {
        name: 'Urban Property Group',
        website: 'https://upg.example.com',
        description: 'Experienced real estate investment firm specializing in multi-family and commercial properties.',
        googleReviews: 4.5,
        userReviews: 4.6,
      },
    }),
    prisma.sponsor.create({
      data: {
        name: 'Tech Ventures Fund',
        website: 'https://tvf.example.com',
        description: 'Early-stage technology investment fund with a proven track record.',
        googleReviews: 4.9,
        userReviews: 4.8,
      },
    }),
  ]);

  // Create sample deals
  await Promise.all([
    // Real Estate Deals
    prisma.deal.create({
      data: {
        title: 'Downtown Mixed-Use Development',
        assetClass: 'Real Estate',
        minInvestment: 50000,
        accreditedOnly: true,
        description: 'Class A mixed-use development in prime downtown location. 200 residential units with ground-floor retail.',
        dealUrl: 'https://example.com/deals/downtown-mixed-use',
        sponsorId: sponsors[1].id,
      },
    }),
    prisma.deal.create({
      data: {
        title: 'Multi-Family Housing Portfolio',
        assetClass: 'Real Estate',
        minInvestment: 25000,
        accreditedOnly: false,
        description: 'Portfolio of three multi-family properties in high-growth suburban markets.',
        dealUrl: 'https://example.com/deals/multi-family-portfolio',
        sponsorId: sponsors[1].id,
      },
    }),

    // Energy Deals
    prisma.deal.create({
      data: {
        title: 'Solar Farm Development',
        assetClass: 'Energy',
        minInvestment: 100000,
        accreditedOnly: true,
        description: '50MW solar farm development in sunny Southwest. Power purchase agreement in place.',
        dealUrl: 'https://example.com/deals/solar-farm',
        sponsorId: sponsors[0].id,
      },
    }),
    prisma.deal.create({
      data: {
        title: 'Wind Energy Portfolio',
        assetClass: 'Energy',
        minInvestment: 75000,
        accreditedOnly: true,
        description: 'Portfolio of operational wind farms across three states.',
        dealUrl: 'https://example.com/deals/wind-portfolio',
        sponsorId: sponsors[0].id,
      },
    }),

    // Private Equity Deals
    prisma.deal.create({
      data: {
        title: 'SaaS Growth Fund',
        assetClass: 'Private Equity',
        minInvestment: 250000,
        accreditedOnly: true,
        description: 'Investment fund focusing on high-growth SaaS companies.',
        dealUrl: 'https://example.com/deals/saas-fund',
        sponsorId: sponsors[2].id,
      },
    }),
    prisma.deal.create({
      data: {
        title: 'Healthcare Tech Fund',
        assetClass: 'Private Equity',
        minInvestment: 150000,
        accreditedOnly: true,
        description: 'Fund investing in innovative healthcare technology companies.',
        dealUrl: 'https://example.com/deals/healthcare-tech',
        sponsorId: sponsors[2].id,
      },
    }),
  ]);

  // Create a sample user
  await prisma.user.create({
    data: {
      name: 'Demo User',
      email: 'demo@example.com',
      password: await hash('demo123', 12),
      isAccredited: true,
      subscriptionStatus: 'active',
    },
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  }); 