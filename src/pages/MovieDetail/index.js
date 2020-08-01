import React, { useState, useEffect, useCallback }  from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
/* Components */
import CardMovieDetail from '../../components/CardMovieDetail';
/* Style Components */
import { Container } from './styled';
/* Hooks */
import { useMovies } from '../../infraestructure/hooks';
/* Constants */
import { BASE_PATH_IMG } from '../../infraestructure/config/const';

const MovieDetail = ({ match }) => {
  const [ processing, setProcessing ] = useState(false);
  const [ movie, setMovie ] = useState(null);
  const { getMovieByIdRequest } = useMovies();

  const load = useCallback(async () => {
    const { msg, err } = await getMovieByIdRequest(match.params.id);
    if(!err) {
      setMovie(msg);
    }
  }, [getMovieByIdRequest, match.params.id]);

  useEffect(() => {
    if(!processing) {
      load();
      setProcessing(true);
    }
  }, [load, processing]);

  return (
    <Container>
      <div className="movie__filter">
        <i className="material-icons">movie</i>
        <h2>MOVIE # <small>{match.params.id}</small></h2>
      </div>
      {!processing ? (
        <div style={{justifyContent: 'flex-end', width: '100%'}}>
          Loading information wait moment please...
          <SkeletonTheme color="#ccc" highlightColor="lightgray">
            <Skeleton width={600} height={500} />
          </SkeletonTheme>
        </div>
      ) : (
        <>
          <hr />
          {movie && (
            <div className="movie__row">
              <img
                className="movieDetail__logo"
                src={`${BASE_PATH_IMG}/w500${movie.poster_path}`}
                alt={movie.original_title}
              />
              <div className="movieDetail__text">
                <h4>{movie.original_language} {movie.adult && (<i className="material-icons" title="Adults">accessibility_new</i>)}</h4>
              </div>
            </div>
          )}
          <hr />
          {movie && (<CardMovieDetail {...movie} />)}
        </>
      )}
    </Container>
  )
}

MovieDetail.propTypes = {
  match: PropTypes.oneOfType([PropTypes.object]),
};

MovieDetail.defaultProps = {
  match: {},
};


export default withRouter(MovieDetail);
