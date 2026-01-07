//api calling with asyncwait
const posts_info = async () => {
  try {
    const result = await fetch("https://jsonplaceholder.typicode.com/posts/1");
    const data = await result.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};
posts_info();
