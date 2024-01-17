const MainMenuItem = (props: MainMenuItemContents) => {
    return (
        <li className="item">
            <div className="item__name">{props.name}</div>
            
        </li>
    );
};

interface MainMenuItemProps {
    name: string,
    conetents: MainMenuItemContents[]
}

interface MainMenuItemContents {
    name: string,
    contents: string[]
}

export default MainMenuItem;