export const API_URL =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:5000'
    : 'https://meal-for.nw.r.appspot.com';
