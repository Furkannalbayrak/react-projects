import { useState } from 'react'
import './App.css'
import './css/events.css'
import './css/repos.css'
import './css/userInformation.css'
import { useDispatch, useSelector } from 'react-redux'
import { getUser, getUserEvent, getUserRepos } from './redux/githubSlice';
import { IoLogoGithub } from "react-icons/io";
import GitHubUser from './components/GitHubUser';
import Loading from './components/Loading';

function App() {

  const { error } = useSelector((state) => state.github)

  const dispatch = useDispatch();
  const [name, setName] = useState("");

  const callAPI = () => {
    dispatch(getUser(name));
    dispatch(getUserRepos(name));
    dispatch(getUserEvent(name));

    if (!name) {
      alert("Lütfen bir kullanıcı adı giriniz !");
    }
  }

  return (
    <div>
      <Loading />

      <div className='cotainer'>
        <div className='firstContainer'>
          <IoLogoGithub className='githubLogo' />
          <input className='getName' type="text" placeholder='GitHub kullanıcı adınızı giriniz' value={name} onChange={(e) => setName(e.target.value)} />
          <button className='search' onClick={callAPI} >  Search</button>
        </div>

        <div>
          {
            error && error ? <p style={{ color: "red", textAlign: "center", marginTop: "40px", fontSize: "1.5rem" }}>Kullanıcı Bulunamadı !</p>
              : <div >
                <GitHubUser />
              </div>
          }
        </div>

      </div>

    </div>
  )
}

export default App
