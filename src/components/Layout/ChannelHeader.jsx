import PropTypes from 'prop-types';

import classes from './ChannelHeader.module.css';

const ChannelHeader = (props) => {
  const { channelName } = props;

  return (
    <header className={classes['channel-header']}>
      <h1>{channelName}</h1>
    </header>
  );
};

ChannelHeader.propTypes = {
  channelName: PropTypes.string.isRequired
};

export default ChannelHeader;
