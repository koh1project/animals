import { FC } from 'react';

import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import { CollectionContainer, CollectionItem } from './Collection.styles';

interface collectionProps {
  urlList: string[];
  clicked: Function;
}

const Collection: FC<collectionProps> = ({ urlList, clicked }) => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('sm'));
  const numCol = matches ? 2 : 3;

  const cellHeight = 150;
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
    </CollectionContainer>
  );
};

export default Collection;
