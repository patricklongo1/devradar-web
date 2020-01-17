/* eslint-disable no-underscore-dangle */
/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';

import { Devs, DevListComp, UserInfo } from './styles';

export default function DevList({ devs }) {
    return (
        <Devs>
            <DevListComp>
                {devs.map(dev => (
                    <li key={dev._id}>
                        <header>
                            <img src={dev.avatar_url} alt={dev.name} />
                            <UserInfo>
                                <strong>{dev.name}</strong>
                                <span>{dev.techs.join(', ')}</span>
                            </UserInfo>
                        </header>
                        <p>{dev.bio ? dev.bio : '-------Bio vazia-------'}</p>
                        <a href={`https://github.com/${dev.github_username}`}>
                            Acessar perfil no GitHub
                        </a>
                    </li>
                ))}
            </DevListComp>
        </Devs>
    );
}

DevList.propTypes = {
    devs: PropTypes.array.isRequired,
};
