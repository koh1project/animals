import { FC } from 'react';

import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import { CollectionShibesContainer, ShibeItem } from './CollectionShibes.styles';

interface collectionShibesProps {
  urlList: string[];
  clicked: Function;
}

const CollectionShibes: FC<collectionShibesProps> = ({ urlList, clicked }) => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('sm'));
  const numCol = matches ? 2 : 3;

  const cellHeight = 150;
  return (
    <CollectionShibesContainer cellHeight={cellHeight} cols={numCol}>
      {urlList.map((url) => (
        <ShibeItem
          key={url}
          onClick={() => {
            console.log(url);
            clicked(url);
          }}
          cols={1}
        >
          <img src={url} alt="Shibe" />
        </ShibeItem>
      ))}
    </CollectionShibesContainer>
  );
};

export default CollectionShibes;
