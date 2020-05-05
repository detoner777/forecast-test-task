import React, { Fragment } from 'react';
import CurrentDayTable from './CurrentDayTable/CurrentDayTable';
import CurrentDayMain from './CurrentDayMain/CurrentDayMain';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Spinner from '../../components/UI/Spinner/Spinner';
import './CurrentDay.css';

function CurrentDay(props) {
  return (
    <Fragment>
      {props.citys == false ? (
        <div className="info">No city was entered yet</div>
      ) : (
        <Fragment>
          {props.loading ? (
            <Spinner />
          ) : (
            <Fragment>
              <div className="current-day-wrapp">
                <CurrentDayMain />
                <CurrentDayTable />
              </div>
              <div>
                <Link className="link-redirect" to="/forecast">
                  5 days forecast
                </Link>
              </div>
            </Fragment>
          )}
        </Fragment>
      )}
    </Fragment>
  );
}

const mapStateToProps = (state) => {
  return {
    loading: state.loading,
    citys: state.citys,
  };
};

export default connect(mapStateToProps, null)(CurrentDay);
