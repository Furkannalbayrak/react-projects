import React from 'react';
import { useSelector } from 'react-redux';
import { FaCodeFork, FaEye } from "react-icons/fa6"; // İkon eklersek çok şık durur
import '../css/repos.css';

function Repos({ index }) {
    const { userRepos } = useSelector((store) => store.github);
    const repo = userRepos[index];

    return (
        <div className='repo-card'>
            <div className='repo-info'>
                <a href={repo.html_url} target="_blank" rel="noreferrer" className='repo-name'>
                    {repo.name}
                </a>
                <div className='repo-meta'>
                    {repo.language && <span className='repo-language'>{repo.language}</span>}
                    <span className={`visibility ${repo.visibility === 'public' ? 'vis-public' : 'vis-private'}`}>
                        {repo.visibility}
                    </span>
                </div>
            </div>

            <div className='repo-stats'>
                <div className='stat-item'>
                    <FaCodeFork className='icon' /> 
                    <span>{repo.forks}</span>
                </div>
                <div className='stat-item'>
                    <FaEye className='icon' /> 
                    <span>{repo.watchers}</span>
                </div>
            </div>
        </div>
    )
}

export default Repos;