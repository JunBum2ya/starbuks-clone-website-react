interface MainMenuItemProps {
  name: string,
  contents: {
      name: string,
      contents: string[]
  }[],
  textureContents: {
      title: string,
      detail: string,
      isNew: boolean
  }[]
}

export default MainMenuItemProps;