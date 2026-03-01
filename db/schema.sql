-- Communities
CREATE TABLE communities (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  slug VARCHAR(100) UNIQUE NOT NULL,
  description TEXT,
  location VARCHAR(255),
  hero_image VARCHAR(255),
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Floor Plans
CREATE TABLE floor_plans (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  slug VARCHAR(100) UNIQUE NOT NULL,
  specs JSONB,
  description TEXT,
  hero_image VARCHAR(255),
  community_id INTEGER REFERENCES communities(id),
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Available Homes
CREATE TABLE available_homes (
  id SERIAL PRIMARY KEY,
  community_id INTEGER REFERENCES communities(id),
  floor_plan_id INTEGER REFERENCES floor_plans(id),
  address VARCHAR(255),
  price NUMERIC,
  price_visibility VARCHAR(20) CHECK (price_visibility IN ('show', 'starting_at', 'call', 'hidden')),
  status VARCHAR(20) CHECK (status IN ('available', 'pending', 'sold', 'coming_soon')),
  completion_date DATE,
  hero_image VARCHAR(255),
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Inventory Status History
CREATE TABLE inventory_status_history (
  id SERIAL PRIMARY KEY,
  home_id INTEGER REFERENCES available_homes(id),
  status VARCHAR(20),
  changed_at TIMESTAMP DEFAULT NOW(),
  changed_by VARCHAR(100),
  notes TEXT
);

-- Leads
CREATE TABLE leads (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(100) NOT NULL,
  phone VARCHAR(20),
  message TEXT,
  utm_params JSONB,
  consent_timestamp TIMESTAMP NOT NULL,
  home_id INTEGER REFERENCES available_homes(id),
  community_id INTEGER REFERENCES communities(id),
  floor_plan_id INTEGER REFERENCES floor_plans(id),
  created_at TIMESTAMP DEFAULT NOW(),
  turnstile_token VARCHAR(100) NOT NULL,
  status VARCHAR(20) DEFAULT 'new'
);
