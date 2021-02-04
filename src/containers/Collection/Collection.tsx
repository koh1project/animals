import { FC } from 'react';

import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import { CollectionContainer, CollectionItem } from './Collection.styles';
import AddCircleIcon from '../../components/AddCircleIcon/AddCircleIcon';
import Spinner from '../../components/Spinner/Spinner';

interface collectionProps {
  urlList: string[];
  clicked: Function;
  onClickAddIcon: Function;
  loading: boolean;
}

const Collection: FC<collectionProps> = ({ urlList, clicked, onClickAddIcon, loading }) => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('sm'));
  const numCol = matches ? 2 : 3;
  const cellHeight = 150;

  const lastItem = loading ? <Spinner /> : <AddCircleIcon onClickAddIcon={onClickAddIcon} />;

  return (
    <CollectionContainer cellHeight={cellHeight} cols={numCol}>
      {urlList.map((url) => (
        <CollectionItem
          key={url}
          onClick={() => {
            console.log(url);
            clicked(url);
          }}
          cols={1}
        >
          <img src={url} alt="Shibe" />
        </CollectionItem>
      ))}
      <CollectionItem cols={1}> {lastItem}</CollectionItem>
    </CollectionContainer>
  );
};

export default Collection;
