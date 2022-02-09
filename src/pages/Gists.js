import {useCallback, useEffect} from "react";
import {CircularProgress} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {selectGists, selectGistsError, selectGistsLoading} from "../store/gists/selectors";
import {getAllGists} from "../store/middleware";

export const Gists = () => {
    const dispatch = useDispatch();

    const gists = useSelector(selectGists);
    const error = useSelector(selectGistsError);
    const loading = useSelector(selectGistsLoading);

    const requestGists = () => {
        dispatch(getAllGists());
    };

    useEffect(() => {
        requestGists();
    }, []);

    const renderGist = useCallback((gist) =>
            <li key={gist.id}>{gist.description || 'No description'}</li>,
        []);
    if (error) {
        return (
            <>
                <h3>ОШИБКА!!!</h3>
                <button onClick={requestGists}>Повторите попытку</button>
            </>
        );
    }
    if (loading) {
        return <CircularProgress />
    }

    return <ul>{gists.map(renderGist)}</ul>;
};

export default Gists;