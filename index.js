const faker = require("faker");

function randomIntFromInterval(min, max) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function getRandomMedias(maxMedias = 6) {
  const mediaCategory = [
    "abstract",
    "animals",
    "business",
    "cats",
    "city",
    "food",
    "nightlife",
    "fashion",
    "people",
    "nature",
    "sports",
    "technics",
    "transport"
  ];
  const medias = [];

  for (let i = 0; i < randomIntFromInterval(1, maxMedias); i++) {
    const category =
      mediaCategory[randomIntFromInterval(0, mediaCategory.length - 1)];
    medias.push({
      mediaUrl: faker.image.imageUrl(800, 600, category, true, true),
      mediaType: "image"
    });
  }

  return medias;
}

module.exports = () => {
  const TOTAL_USERS = 20;
  const TOTAL_POSTS = 50;
  const TOTAL_STORIES = 50;

  const data = {
    users: [],
    posts: [],
    stories: []
  };

  for (let i = 1; i <= TOTAL_USERS; i++) {
    data.users.push({
      id: i,
      username: faker.name.firstName().toLowerCase(),
      fullName: `${faker.name.firstName()} ${faker.name.lastName()}`,
      avatarUrl: faker.image.avatar()
    });
  }

  for (let i = 1; i <= TOTAL_POSTS; i++) {
    data.posts.push({
      id: i,
      user: data.users[randomIntFromInterval(0, TOTAL_USERS - 1)],
      medias: getRandomMedias(),
      location: faker.address.city(),
      description: faker.lorem.paragraphs(1),
      isLoved: false,
      isSaved: false,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    });
  }

  for (let i = 1; i <= TOTAL_STORIES; i++) {
    data.stories.push({
      id: i,
      isRead: false,
      user: data.users[randomIntFromInterval(0, TOTAL_USERS - 1)],
      medias: getRandomMedias()
    });
  }

  return data;
};
