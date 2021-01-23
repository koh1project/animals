import React from 'react';

interface ShibeItemProps {
  url: string;
}

const ShibeItem = (props: ShibeItemProps) => <img src={props.url} alt="alt" />;

export default ShibeItem;
