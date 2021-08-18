export const modules = import.meta.glob('../public/assets/images/projects/pali-wallet/*');

export const getImagesArray = (modules) => {
  const images = {};

  for (const path in modules) {
    images[path] = {
      id: path,
      path
    }
  }

  return images;
}
