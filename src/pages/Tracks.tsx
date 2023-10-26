import styled from '@emotion/styled';
import { FC } from 'react';
import { Container, GeneralBox, GeneralLabel } from '../styled/components';
import { HelmetHead } from '../components/HelmetHead';
import { TrackRow } from '../components/TrackRow';
import { trackAPI } from '../services/TracksService';
const Tracks: FC = () => {
  const { data: tracks, error, isLoading } = trackAPI.useFetchAllTracksQuery(1000);

  const loading = isLoading && <div>Идет загрузка...</div>;
  const errorMessage = error && <div>Произошла ошибка при загрузке объявлений</div>;
  const content = tracks && tracks.map((track) => <TrackRow key={track.id} track={track} />);

  return (
    <>
      <HelmetHead title="Заголовок Главной" descr="Описание Главной" />
      <Wrapper>
        <GeneralBox>
          <GeneralLabel>Треки</GeneralLabel>
          {loading}
          {errorMessage}
          {content}
        </GeneralBox>
      </Wrapper>
      ;
    </>
  );
};

const Wrapper = styled(Container)``;

export default Tracks;
