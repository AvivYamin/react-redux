import React from 'react'
import { useSelector } from 'react-redux'
import Loading from './Loading';
import Error from './Error';
import Body from '../Body/Body';

const General = () => {
    const error = useSelector(state => state.nav.error);
    const loading = useSelector(state => state.nav.loading);
    const cityName = useSelector(state => state.nav.cityName);

    return (
        <div>
            {!cityName ? <h2>Select A City</h2> : loading ? <Loading /> : error ? <Error /> : <Body />}
        </div>
    )
}

export default General
