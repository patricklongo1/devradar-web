import React from 'react';

import history from '../../services/history';
import { Button } from './styles';

export default function BigButton() {
    return (
        <Button
            onClick={() => {
                history.push('/main');
            }}
        >
            Comece agora!
        </Button>
    );
}
