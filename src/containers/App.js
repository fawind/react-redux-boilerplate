import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import TestComponent from '../components/testComponent';
import * as Actions from '../actions';

const App = ({ test, actions }) => (
  <div>
    <TestComponent
      model={test}
      increase={actions.increase}
    />
  </div>
);

App.propTypes = {
  test: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
  return {
    test: state.test,
  };
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(Actions, dispatch) };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
