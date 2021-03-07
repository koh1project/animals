import { FC } from 'react';

import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import { CollectionContainer, CollectionItem } from './Collection.styles';
import AddCircleIcon from '../../components/AddCircleIcon/AddCircleIcon';
import Spinner from '../../components/Spinner/Spinner';

export interface collectionProps {
  urlList: string[];
  clicked: Function;
  onClickAddIcon: Function;
  loading: boolean;
}

const Collection: FC<collectionProps> = ({ urlList, clicked, onClickAddIcon, loading }) => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('sm'));
  const numCol = matches ? 3 : 4;
  const cellHeight = 200;

  const lastItem = loading ? (
    <Spinner />
  ) : (
    /* + 追加ローディング用アイコン*/
    <AddCircleIcon onClickAddIcon={onClickAddIcon} />
  );

  return (
    <CollectionContainer cellHeight={cellHeight} cols={numCol} data-test="container-collection">
      {urlList.map((url) => (
        <CollectionItem
        data-test='component-collectionItem'
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
