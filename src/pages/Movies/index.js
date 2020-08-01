import React, { useState, useEffect, useCallback } from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
/* Components */
import CardMovie from '../../components/CardMovie';
/* Style Components */
import { Container } from './styled';
/* Hooks */
import { useMovies } from '../../infraestructure/hooks';

const Movies = () => {
  const [ processing, setProcessing ] = useState(false);
  const {
    isLoading,
    data,
    currentPage,
    getMoviesNewsRequest
  } = useMovies();

  const handleLoadMore = async () => {
    await getMoviesNewsRequest(currentPage + 1);
  };

  const load = useCallback(async () => {
    await getMoviesNewsRequest(1);
  }, [getMoviesNewsRequest]);

  useEffect(() => {
    if(!processing) {
      load();
      setProcessing(true);
    }
  }, [load, processing]);

  return (
    <Container>
      <h2>Recommended</h2>
      <div className="recommended__movies">
        {!processing ? (
          <div style={{justifyContent: 'flex-end', width: '100%'}}>
            Loading information wait moment please...
            <SkeletonTheme color="#f42f6391" highlightColor="#444">
              <Skeleton height={34} />
            </SkeletonTheme>
          </div>
        ) : (
          <>
            {data.map((movie) => <CardMovie key={`movie-${movie.id}`} {...movie} /> )}
          </>
        )}
      </div>
      <hr />
      {data && (
        <div className="movie__loadMore" onClick={handleLoadMore}>
          <h4>LOAD MORE...</h4>
        </div>
      )}
    </Container>
  )
};

export default Movies;
