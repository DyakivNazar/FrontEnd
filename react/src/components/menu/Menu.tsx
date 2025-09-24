import {Link} from "react-router-dom";
import './menu.css'

const Menu = () => {
    return (
        <div>
            <ul className={'menu'}>
                <li><Link to={'complex'}>all data</Link></li>
                <li><Link to={'users'}>users</Link></li>
                <li><Link to={'posts'}>posts</Link></li>
                <li><Link to={'comments'}>comments</Link></li>
            </ul>
        </div>
    );
};

export default Menu;