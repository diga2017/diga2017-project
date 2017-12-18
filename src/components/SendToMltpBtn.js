import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

class SendBtn extends Component {
  constructor(props) {
    super(props);
    const {
        selectedRegionLevelId,
        selectedRegionId,
        selectedScenarioCollectionId,
        selectedTimePeriodId,
        selectedIndicatorIds,
        selectedScenarioIds

    } = this.props;
    this.sendParams = this.sendParams.bind(this);
  }

sendParams() {
    var rgnLvlId = this.props.selectedRegionLevelId;
    var rgnId = this.props.selectedRegionId;
    var scnColId = this.props.selectedScenarioCollectionId;
    var scnIds = this.props.selectedScenarioIds;
    var IndId = this.props.selectedIndicatorIds;
    var timeId = this.props.selectedTimePeriodId;

    window.location.href =
      "http://mela2.metla.fi/mela/tupa/index.php?lk" +
      rgnLvlId +
      "&ko=" +
      rgnId +
      "&ty=" +
      scnIds +
      "&ka=" +
      timeId;
      
  }

  render() {
    return <div>
    <button type="button" class="btn btn-secondary" onClick={this.sendParams}>
    Send parameters to MeLaTuPa
  </button>
    </div>;
  }
}

export default SendBtn;
