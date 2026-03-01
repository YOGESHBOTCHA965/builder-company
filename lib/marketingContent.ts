// Fetch communities, floor plans, portfolio, process steps, testimonials, FAQs from Sanity
import { sanityClient } from './sanity';

export async function getCommunities() {
  return await sanityClient.fetch(`*[_type == "community"]`);
}

export async function getFloorPlans() {
  return await sanityClient.fetch(`*[_type == "floorPlan"]`);
}

export async function getPortfolioProjects() {
  return await sanityClient.fetch(`*[_type == "portfolioProject"]`);
}

export async function getProcessSteps() {
  return await sanityClient.fetch(`*[_type == "processStep"]`);
}

export async function getTestimonials() {
  return await sanityClient.fetch(`*[_type == "testimonial"]`);
}

export async function getFAQs() {
  return await sanityClient.fetch(`*[_type == "faq"]`);
}
