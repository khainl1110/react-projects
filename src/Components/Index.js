import NoteTakingPageIndex from './NoteTakingPage/NoteTakingPageIndex'
import { BrowserRouter as Router, Link, Route, Routes} from 'react-router-dom'
import PhotoProcessingIndex from './PhotoProcessingPage/PhotoProcessingIndex'


export default function Index() {
    return(
        <Router>
            <div>
                <div className='App'>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/note">Note app</Link></li>
                        <li><Link to ="photo">Photo processing app</Link></li>
                    </ul>
                </div>

                <Routes>
                    <Route exact path="/note" element = {<NoteTakingPageIndex />} />
                    <Route exact path = "/photo" element = {<PhotoProcessingIndex />} />
                </Routes>  
            </div>
        </Router>
    )
}