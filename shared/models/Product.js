class Product {
  constructor(db) {
    this.db = db;
  }

  async getPage(page = 1, limit = 20) {
    const client = await this.db.connet();
    try {
      const query = ''; // TODO: implement query that joins categories and brands
    } catch (error) {
      console.error(error);
      throw error;
    } finally {
      client.release();
    }
  }

  async getById(id) {}

  async create(data) {}

  async update(id, data) {}

  async delete(id) {}
}
