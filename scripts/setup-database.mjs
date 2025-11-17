import pg from 'pg'
import { readFile } from 'fs/promises'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))

async function setupDatabase() {
  console.log('[v0] Starting database setup...')
  
  // Create a Postgres client using the connection string
  const client = new pg.Client({
    connectionString: process.env.POSTGRES_URL
  })

  try {
    await client.connect()
    console.log('[v0] Connected to database')

    // Read and execute create tables SQL
    console.log('[v0] Creating tables...')
    const createTablesSQL = await readFile(
      join(__dirname, '001_create_posts_structure.sql'),
      'utf-8'
    )
    await client.query(createTablesSQL)
    console.log('[v0] Tables created successfully')

    // Read and execute seed data SQL
    console.log('[v0] Seeding sample data...')
    const seedDataSQL = await readFile(
      join(__dirname, '002_seed_sample_posts.sql'),
      'utf-8'
    )
    await client.query(seedDataSQL)
    console.log('[v0] Sample data seeded successfully')

    console.log('[v0] Database setup completed!')
    
  } catch (error) {
    console.error('[v0] Database setup error:', error)
    throw error
  } finally {
    await client.end()
  }
}

setupDatabase()
