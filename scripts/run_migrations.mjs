import { neon } from '@neondatabase/serverless';

const sql = neon(process.env.POSTGRES_URL);

async function runMigrations() {
  console.log('[v0] Starting database migrations...');
  
  try {
    // Read and execute the SQL files
    const fs = await import('fs');
    const path = await import('path');
    const { fileURLToPath } = await import('url');
    
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);
    
    // Execute create structure script
    console.log('[v0] Creating posts structure...');
    const createScript = fs.readFileSync(path.join(__dirname, '001_create_posts_structure.sql'), 'utf-8');
    await sql(createScript);
    console.log('[v0] Posts structure created successfully');
    
    // Execute seed script
    console.log('[v0] Seeding sample data...');
    const seedScript = fs.readFileSync(path.join(__dirname, '002_seed_sample_posts.sql'), 'utf-8');
    await sql(seedScript);
    console.log('[v0] Sample data seeded successfully');
    
    console.log('[v0] All migrations completed successfully!');
  } catch (error) {
    console.error('[v0] Migration error:', error);
    throw error;
  }
}

runMigrations();
