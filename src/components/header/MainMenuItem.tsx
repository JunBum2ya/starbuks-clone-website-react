import MainMenuItemProps from "../../interface/MainMenuItemProps";

const MainMenuItem = (props: MainMenuItemProps) => {
    return (
        <li className="item">
            <div className="item__name">{props.name}</div>
            <div className="item__contents">
                <div className="contents__menu">
                    <ul className="inner">
                        {props.contents.map((item,index) => {
                            return (
                                <li key={`contents-${index}`}>
                                    <h4>{item.name}</h4>
                                    <ul>
                                        { item.contents.map((item,index) => {
                                            return (
                                                <li key={`detail-contents-${index}`}>{item}</li>
                                            );
                                        }) }
                                    </ul>
                                </li>
                            );
                        })}
                    </ul>
                </div>
                <div className="contents__texture">
                   <div className="inner">
                        { props.textureContents.map((item,index) => (
                            <>
                                <h4 key={`texture-title-${index}`} className={item.isNew ? "new" : ""}>{item.title}</h4>
                                <p key={`texture-detail-${index}`}>{item.detail}</p>
                            </>
                        )) }  
                    </div>
                </div>
            </div>
        </li>
    );
};

export default MainMenuItem;