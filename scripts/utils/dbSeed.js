const {Pool} = require('pg');
const {promisify} = require('util');
const {readFileSync} = require('fs');

const pool = new Pool();

const query = promisify(pool.query).bind(pool);

async function main() {
  const users = JSON.parse(readFileSync('./data/users.json'));
  const categories = JSON.parse(readFileSync('./data/categories.json'));
  const products = JSON.parse(readFileSync('./data/products.json'));
  const orders = JSON.parse(readFileSync('./data/orders.json'));

  await query('TRUNCATE users CASCADE');
  await query('TRUNCATE categories CASCADE');
  await query('TRUNCATE products CASCADE');
  await query('TRUNCATE orders CASCADE');

  await query('INSERT INTO users (name, email, password_hash, password_salt, is_active, role) VALUES $1', [users]);
  await query('INSERT INTO categories (name, description, parent_id) VALUES $1', [categories]);
  await query('INSERT INTO products (name, description, price, stock, category_id, sku) VALUES $1', [products]);
  await query('INSERT INTO orders (user_id, total, status, payment_method, paid) VALUES $1', [orders]);
}

main().catch(console.error);
