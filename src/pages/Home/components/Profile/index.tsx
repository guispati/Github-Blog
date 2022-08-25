import { ProfileContainer, ProfileInfo } from "./styles";
import { api, githubUsername } from "../../../../lib/axios";
import { useCallback, useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faArrowUpRightFromSquare, faBuilding, faUserGroup } from '@fortawesome/free-solid-svg-icons';

interface User {
    avatar_url: string;
    name: string;
    bio: string;
    html_url: string;
    company: string;
    followers: number;
    login: string;
}

export function Profile() {
    const [user, setUser] = useState<User>({} as User)

    const fetchUser = useCallback(async () => {
        const response = await api.get(`users/${githubUsername}`);

        setUser(response.data);
    }, []);

    useEffect(() => {
        fetchUser();
    }, []);

    return (
        <ProfileContainer>
            <img src={user.avatar_url} alt="Foto de perfil" />
            <ProfileInfo>
                <div>
                    <h1>{user.name}</h1>
                    <a href={user.html_url} target="_blank">
                        <span>Github</span>
                        <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                    </a>
                </div>
                <h2>{user.bio}</h2>

                <ul>
                    <li>
                        <FontAwesomeIcon icon={faGithub} />
                        <span>{user.login}</span>
                    </li>

                    <li>
                        <FontAwesomeIcon icon={faBuilding} />
                        <span>{user.company}</span>
                    </li>

                    <li>
                        <FontAwesomeIcon icon={faUserGroup} />
                        <span>{user.followers} seguidores</span>
                    </li>
                </ul>
            </ProfileInfo>
        </ProfileContainer>
    )
}