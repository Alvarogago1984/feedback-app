
export const getImagePath = (imageName: string | undefined) => {
  return require(`../../../assets/user-images/${imageName}`);
};