import PropTypes from 'prop-types';
import { useParams } from 'react-router';
import classes from './ChannelHeader.module.css';

const ChannelHeader = (props) => {
  const {channelId} = useParams()

  return (
    <header className={classes['channel-header']}>
      <h1>{channelId}</h1>
    </header>
  );
};

export default ChannelHeader;
