import { db } from "@/lib/db";

export interface SearchOptions {
  query?: string;
  categorySlug?: string;
  limit?: number;
}

export interface SearchResultTemplate {
  id: string;
  slug: string;
  title: string;
  description: string;
  isPremium: boolean;
  categorySlug: string;
  categoryName: string;
  status: string;
}

export interface TemplateSearchService {
  search(options: SearchOptions): Promise<SearchResultTemplate[]>;
}

// 1. PostgreSQL Concrete Search Service
export class PostgresSearchService implements TemplateSearchService {
  async search({ query, categorySlug, limit = 20 }: SearchOptions): Promise<SearchResultTemplate[]> {
    let catId: string | null = null;
    if (categorySlug) {
      const cat = await db.category.findUnique({
        where: { slug: categorySlug },
        select: { id: true }
      });
      if (cat) catId = cat.id;
    }

    const dbTemplates = await db.template.findMany({
      where: {
        status: "PUBLISHED", // Only return published templates
        ...(catId ? { categoryId: catId } : {}),
        ...(query ? {
          OR: [
            { title: { contains: query, mode: "insensitive" } },
            { description: { contains: query, mode: "insensitive" } }
          ]
        } : {})
      },
      include: {
        category: true
      },
      take: limit
    });

    return dbTemplates.map((t: any) => ({
      id: t.id,
      slug: t.slug,
      title: t.title,
      description: t.description,
      isPremium: t.isPremium,
      categorySlug: t.category.slug,
      categoryName: t.category.name,
      status: t.status
    }));
  }
}

// 2. Meilisearch Mock Driver for Future Scaling
export class MeilisearchSearchService implements TemplateSearchService {
  async search({ query, categorySlug, limit = 20 }: SearchOptions): Promise<SearchResultTemplate[]> {
    console.log(`[Meilisearch] Performing search index match for query: "${query}" in category: "${categorySlug}"`);
    
    // Stub returns mock structure matching standard items
    const postgresDriver = new PostgresSearchService();
    return postgresDriver.search({ query, categorySlug, limit });
  }
}

// 3. Centralized Search Service Provider Factory
export function getSearchService(): TemplateSearchService {
  if (process.env.MEILISEARCH_HOST && process.env.MEILISEARCH_KEY) {
    return new MeilisearchSearchService();
  }
  return new PostgresSearchService();
}
