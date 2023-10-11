import { Link } from 'react-router-dom';
import './Layout.css'
function Layout({ title, url, id }) {
    return (
        <div className="LayoutWrapper">
            <Link to={`/Single/:${id}`}>
                <img src={url} alt="" className='BirdImg' />
            </Link>
        </div>
    )
}
export default Layout;