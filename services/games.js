import { GameModel } from '../models/game.js';

class GamesService {
  async getAll({ skip, orderBy, sortBy, age, genre, platform, title }) {
    if (platform && sortBy && orderBy && genre && age && title) {
      const games = await GameModel.find({
        platform: { $all: [platform] },
        genre,
        ageLimit: { $gte: age },
        name: { $regex: title, $options: 'i' },
      })
        .sort({ [sortBy]: orderBy === 'asc' ? 1 : -1 })
        .limit(8)
        .skip(skip);
      const countItems = await GameModel.find({
        platform: { $all: [platform] },
        genre,
        ageLimit: { $gte: age },
        name: { $regex: title, $options: 'i' },
      }).countDocuments();
      return { countItems, games };
    }

    if (platform && sortBy && orderBy && genre && age) {
      const games = await GameModel.find({
        platform: { $all: [platform] },
        genre,
        ageLimit: { $gte: age },
      })
        .sort({ [sortBy]: orderBy === 'asc' ? 1 : -1 })
        .limit(8)
        .skip(skip);
      const countItems = await GameModel.find({
        platform: { $all: [platform] },
        genre,
        ageLimit: { $gte: age },
      }).countDocuments();
      return { countItems, games };
    }

    if (platform && sortBy && orderBy && genre && title) {
      const games = await GameModel.find({
        platform: { $all: [platform] },
        genre,
        name: { $regex: title, $options: 'i' },
      })
        .sort({ [sortBy]: orderBy === 'asc' ? 1 : -1 })
        .limit(8)
        .skip(skip);
      const countItems = await GameModel.find({
        platform: { $all: [platform] },
        genre,
        name: { $regex: title, $options: 'i' },
      }).countDocuments();
      return { countItems, games };
    }

    if (platform && sortBy && orderBy && genre) {
      const games = await GameModel.find({
        platform: { $all: [platform] },
        genre,
      })
        .sort({ [sortBy]: orderBy === 'asc' ? 1 : -1 })
        .limit(8)
        .skip(skip);
      const countItems = await GameModel.find({
        platform: { $all: [platform] },
        genre,
      }).countDocuments();
      return { countItems, games };
    }

    if (platform && sortBy && orderBy && age && title) {
      const games = await GameModel.find({
        platform: { $all: [platform] },
        ageLimit: { $gte: age },
        name: { $regex: title, $options: 'i' },
      })
        .sort({ [sortBy]: orderBy === 'asc' ? 1 : -1 })
        .limit(8)
        .skip(skip);
      const countItems = await GameModel.find({
        platform: { $all: [platform] },
        ageLimit: { $gte: age },
        name: { $regex: title, $options: 'i' },
      }).countDocuments();
      return { countItems, games };
    }

    if (platform && sortBy && orderBy && age) {
      const games = await GameModel.find({
        platform: { $all: [platform] },
        ageLimit: { $gte: age },
      })
        .sort({ [sortBy]: orderBy === 'asc' ? 1 : -1 })
        .limit(8)
        .skip(skip);
      const countItems = await GameModel.find({
        platform: { $all: [platform] },
        ageLimit: { $gte: age },
      }).countDocuments();
      return { countItems, games };
    }

    if (platform && genre && age && title) {
      const games = await GameModel.find({
        platform: { $all: [platform] },
        name: { $regex: title, $options: 'i' },
        ageLimit: { $gte: age },
        genre,
      })
        .limit(8)
        .skip(skip);
      const countItems = await GameModel.find({
        platform: { $all: [platform] },
        name: { $regex: title, $options: 'i' },
        ageLimit: { $gte: age },
        genre,
      }).countDocuments();
      return { countItems, games };
    }

    if (platform && genre && age) {
      const games = await GameModel.find({
        platform: { $all: [platform] },
        ageLimit: { $gte: age },
        genre,
      })
        .limit(8)
        .skip(skip);
      const countItems = await GameModel.find({
        platform: { $all: [platform] },
        ageLimit: { $gte: age },
        genre,
      }).countDocuments();
      return { countItems, games };
    }

    if (platform && genre && title) {
      const games = await GameModel.find({
        platform: { $all: [platform] },
        name: { $regex: title, $options: 'i' },
        genre,
      })
        .limit(8)
        .skip(skip);
      const countItems = await GameModel.find({
        platform: { $all: [platform] },
        name: { $regex: title, $options: 'i' },
        genre,
      }).countDocuments();
      return { countItems, games };
    }

    if (platform && genre) {
      const games = await GameModel.find({
        platform: { $all: [platform] },
        genre,
      })
        .limit(8)
        .skip(skip);
      const countItems = await GameModel.find({
        platform: { $all: [platform] },
        genre,
      }).countDocuments();
      return { countItems, games };
    }

    if (platform && age && title) {
      const games = await GameModel.find({
        platform: { $all: [platform] },
        name: { $regex: title, $options: 'i' },
        ageLimit: { $gte: age },
      })
        .limit(8)
        .skip(skip);
      const countItems = await GameModel.find({
        platform: { $all: [platform] },
        name: { $regex: title, $options: 'i' },
        ageLimit: { $gte: age },
      }).countDocuments();
      return { countItems, games };
    }

    if (platform && age) {
      const games = await GameModel.find({
        platform: { $all: [platform] },
        ageLimit: { $gte: age },
      })
        .limit(8)
        .skip(skip);
      const countItems = await GameModel.find({
        platform: { $all: [platform] },
        ageLimit: { $gte: age },
      }).countDocuments();
      return { countItems, games };
    }

    if (platform && sortBy && orderBy && title) {
      const games = await GameModel.find({
        platform: { $all: [platform] },
        name: { $regex: title, $options: 'i' },
      })
        .sort({ [sortBy]: orderBy === 'asc' ? 1 : -1 })
        .limit(8)
        .skip(skip);
      const countItems = await GameModel.find({
        platform: { $all: [platform] },
        name: { $regex: title, $options: 'i' },
      }).countDocuments();
      return { countItems, games };
    }

    if (platform && sortBy && orderBy) {
      const games = await GameModel.find({ platform: { $all: [platform] } })
        .sort({ [sortBy]: orderBy === 'asc' ? 1 : -1 })
        .limit(8)
        .skip(skip);
      const countItems = await GameModel.find({ platform: { $all: [platform] } }).countDocuments();
      return { countItems, games };
    }

    if (platform && title) {
      const games = await GameModel.find({
        platform: { $all: [platform] },
        name: { $regex: title, $options: 'i' },
      })
        .limit(8)
        .skip(skip);
      const countItems = await GameModel.find({
        platform: { $all: [platform] },
        name: { $regex: title, $options: 'i' },
      }).countDocuments();
      return { countItems, games };
    }

    if (platform) {
      const games = await GameModel.find({ platform: { $all: [platform] } })
        .limit(8)
        .skip(skip);
      const countItems = await GameModel.find({ platform: { $all: [platform] } }).countDocuments();
      return { countItems, games };
    }

    /** All platforms */

    if (sortBy && orderBy && genre && age && title) {
      const games = await GameModel.find({
        genre,
        ageLimit: { $gte: age },
        name: { $regex: title, $options: 'i' },
      })
        .sort({ [sortBy]: orderBy === 'asc' ? 1 : -1 })
        .limit(8)
        .skip(skip);
      const countItems = await GameModel.find({
        genre,
        ageLimit: { $gte: age },
        name: { $regex: title, $options: 'i' },
      }).countDocuments();
      return { countItems, games };
    }

    if (sortBy && orderBy && genre && age) {
      const games = await GameModel.find({
        genre,
        ageLimit: { $gte: age },
      })
        .sort({ [sortBy]: orderBy === 'asc' ? 1 : -1 })
        .limit(8)
        .skip(skip);
      const countItems = await GameModel.find({
        genre,
        ageLimit: { $gte: age },
      }).countDocuments();
      return { countItems, games };
    }

    if (sortBy && orderBy && genre && title) {
      const games = await GameModel.find({
        genre,
        name: { $regex: title, $options: 'i' },
      })
        .sort({ [sortBy]: orderBy === 'asc' ? 1 : -1 })
        .limit(8)
        .skip(skip);
      const countItems = await GameModel.find({
        genre,
        name: { $regex: title, $options: 'i' },
      }).countDocuments();
      return { countItems, games };
    }

    if (sortBy && orderBy && genre) {
      const games = await GameModel.find({
        genre,
      })
        .sort({ [sortBy]: orderBy === 'asc' ? 1 : -1 })
        .limit(8)
        .skip(skip);
      const countItems = await GameModel.find({
        genre,
      }).countDocuments();
      return { countItems, games };
    }

    if (sortBy && orderBy && age && title) {
      const games = await GameModel.find({
        ageLimit: { $gte: age },
        name: { $regex: title, $options: 'i' },
      })
        .sort({ [sortBy]: orderBy === 'asc' ? 1 : -1 })
        .limit(8)
        .skip(skip);
      const countItems = await GameModel.find({
        ageLimit: { $gte: age },
        name: { $regex: title, $options: 'i' },
      }).countDocuments();
      return { countItems, games };
    }

    if (sortBy && orderBy && age) {
      const games = await GameModel.find({
        ageLimit: { $gte: age },
      })
        .sort({ [sortBy]: orderBy === 'asc' ? 1 : -1 })
        .limit(8)
        .skip(skip);
      const countItems = await GameModel.find({
        ageLimit: { $gte: age },
      }).countDocuments();
      return { countItems, games };
    }

    if (genre && age && title) {
      const games = await GameModel.find({
        name: { $regex: title, $options: 'i' },
        ageLimit: { $gte: age },
        genre,
      })
        .limit(8)
        .skip(skip);
      const countItems = await GameModel.find({
        name: { $regex: title, $options: 'i' },
        ageLimit: { $gte: age },
        genre,
      }).countDocuments();
      return { countItems, games };
    }

    if (genre && age) {
      const games = await GameModel.find({
        ageLimit: { $gte: age },
        genre,
      })
        .limit(8)
        .skip(skip);
      const countItems = await GameModel.find({
        ageLimit: { $gte: age },
        genre,
      }).countDocuments();
      return { countItems, games };
    }

    if (genre && title) {
      const games = await GameModel.find({
        name: { $regex: title, $options: 'i' },
        genre,
      })
        .limit(8)
        .skip(skip);
      const countItems = await GameModel.find({
        name: { $regex: title, $options: 'i' },
        genre,
      }).countDocuments();
      return { countItems, games };
    }

    if (genre) {
      const games = await GameModel.find({
        genre,
      })
        .limit(8)
        .skip(skip);
      const countItems = await GameModel.find({
        genre,
      }).countDocuments();
      return { countItems, games };
    }

    if (age && title) {
      const games = await GameModel.find({
        name: { $regex: title, $options: 'i' },
        ageLimit: { $gte: age },
      })
        .limit(8)
        .skip(skip);
      const countItems = await GameModel.find({
        name: { $regex: title, $options: 'i' },
        ageLimit: { $gte: age },
      }).countDocuments();
      return { countItems, games };
    }

    if (age) {
      const games = await GameModel.find({
        ageLimit: { $gte: age },
      })
        .limit(8)
        .skip(skip);
      const countItems = await GameModel.find({
        ageLimit: { $gte: age },
      }).countDocuments();
      return { countItems, games };
    }

    if (sortBy && orderBy && title) {
      const games = await GameModel.find({ name: { $regex: title, $options: 'i' } })
        .sort({ [sortBy]: orderBy === 'asc' ? 1 : -1 })
        .limit(8)
        .skip(skip);
      const countItems = await GameModel.find({
        name: { $regex: title, $options: 'i' },
      }).countDocuments();
      return { countItems, games };
    }

    if (sortBy && orderBy) {
      const games = await GameModel.find()
        .sort({ [sortBy]: orderBy === 'asc' ? 1 : -1 })
        .limit(8)
        .skip(skip);
      const countItems = await GameModel.countDocuments();
      return { countItems, games };
    }

    if (title) {
      const games = await GameModel.find({ name: { $regex: title, $options: 'i' } })
        .limit(8)
        .skip(skip);
      const countItems = await GameModel.find({
        name: { $regex: title, $options: 'i' },
      }).countDocuments();
      return { countItems, games };
    }

    const games = await GameModel.find().limit(8).skip(skip);
    const countItems = await GameModel.countDocuments();
    return { countItems, games };
  }

  async create({ name, ageLimit, rating, price, genre, platform, imageUrl, description }) {
    const game = GameModel({
      name,
      ageLimit,
      rating,
      price,
      genre,
      platform,
      imageUrl,
      description,
    });
    await game.save();
    return game;
  }
}

export const gamesService = new GamesService();
