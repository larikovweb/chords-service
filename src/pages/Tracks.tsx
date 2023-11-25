import styled from '@emotion/styled';
import { FC } from 'react';
import { Container, GeneralBox, GeneralLabel } from '../styled/components';
import { HelmetHead } from '../components/HelmetHead';
import { getData } from '../services/firebaseService';
import useFetchData from '../hooks/useFetchData';

export interface IExercise {
  name: string;
  reps: number;
  myReps: number | null;
}

export interface IWorkout {
  id: number | string;
  title: string;
  url: string;
  exercises: IExercise[];
}

export interface ICourse {
  id: number | string;
  name: string;
  img: string;
  description: string;
  suitableFor: string[];
  focus: string[];
  workouts: IWorkout[];
}

const Tracks: FC = () => {
  const { loading, data, error, refetch } = useFetchData<ICourse>(getData, 'courses');
  console.log(data, loading, error, refetch);

  // const loading = isLoading && <div>Идет загрузка...</div>;
  // const errorMessage = error && <div>Произошла ошибка при загрузке объявлений</div>;
  // const content = tracks && tracks.map((track) => <TrackRow key={track.id} track={track} />);

  return (
    <>
      <HelmetHead title="Заголовок Главной" descr="Описание Главной" />
      <Wrapper>
        <GeneralBox>
          <GeneralLabel>Треки</GeneralLabel>
          {/* {loading}
          {errorMessage}
          {content} */}
        </GeneralBox>
      </Wrapper>
      ;
    </>
  );
};

const Wrapper = styled(Container)``;

export default Tracks;
