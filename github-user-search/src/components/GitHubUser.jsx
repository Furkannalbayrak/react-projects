import React from 'react'
import { useSelector } from 'react-redux'
import { FaLocationDot, FaXTwitter } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import Repos from './Repos';
import Events from './Events';

function GitHubUser() {

    const { user, userRepos, userEvents } = useSelector((store) => store.github);

    if (!user || !user.login) return null;

    return (
        <div className='github-profile-container'>
            <div className='card'>
                
                {/* --- ÜST KISIM (SOL: Profil, SAĞ: Repolar) --- */}
                <div className='top-section'>
                    
                    {/* SOL KISIM: Profil Bilgileri */}
                    <div className='profile-sidebar'>
                        <div className='profile-header'>
                            <img src={user.avatar_url} alt={user.login} className='avatar' />
                            <h2 className='name'>{user.name}</h2>
                            <h3 className='login'>{user.login}</h3>
                            <p className='bio'>{user.bio}</p>
                        </div>

                        <div className='profile-details'>
                            {user.company && <div className='detail-item'><span>Şirket:</span> {user.company}</div>}
                            <div className='detail-item'><span>Repo:</span> {user.public_repos}</div>
                            <div className='detail-item'><span>Takipçi:</span> {user.followers}</div>
                            <div className='detail-item'><span>Takip:</span> {user.following}</div>
                            {user.hireable && <div className='detail-item hireable'><span>Durum:</span> İş Arıyor</div>}
                            {user.location && <div className='detail-item'><FaLocationDot /> {user.location}</div>}
                            {user.email && <div className='detail-item'><MdEmail /> {user.email}</div>}
                            {user.twitter_username && <div className='detail-item'><FaXTwitter /> {user.twitter_username}</div>}
                        </div>
                    </div>

                    {/* SAĞ KISIM: Repolar */}
                    <div className='repos-grid'>
                        <h3 className='section-title'>Son Repolar</h3>
                        <div className='repos-wrapper'>
                            {userRepos && userRepos.map((repo, index) => (
                                <Repos index={index} key={repo.id} />
                            ))}
                        </div>
                    </div>
                </div>

                {/* --- ALT KISIM (Eventler - Full Width) --- */}
                <div className='bottom-section'>
                    <h3 className='section-title'>Son Aktiviteler (Events)</h3>
                    <div className='events-list'>
                        {userEvents && userEvents.map((event, index) => (
                            <Events index={index} key={event.id} />
                        ))}
                    </div>
                </div>

            </div>
        </div>
    )
}

export default GitHubUser