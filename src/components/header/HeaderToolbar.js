import React from 'react';
import ScatterPlotObject from '../../templates/ScatterPlotObject';

export default (props) => {
  const toggleDropDown = props.toggleDropDown;
  const getScatterPlotAction = props.getScatterPlotAction;

  window.onclick = function(event) {
    if (!event.target.matches('.btn-dropdown')) {

      let dropdowns = document.getElementsByClassName("dropdown-menu");

      for (let i = 0; i < dropdowns.length; i += 1) {
        let openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }

  return (
    <div className="toolbar-actions">
      <div className="btn-group">
        <button className="btn btn-default">
          <span className="icon icon-folder icon-text"></span>
          New
        </button>
        <button className="btn btn-default" id="import-btn">
          <input type="file" id="upload-file" hidden></input>
          <span className="icon icon-download icon-text"></span>
          Import
        </button>
        <button className="btn btn-default">
          <span className="icon icon-upload icon-text"></span>
          Export
        </button>
        <div className="dropdown">
          <button className="btn btn-default btn-dropdown" onClick={toggleDropDown}>
            <span className="icon icon-layout icon-text"></span>
            Templates
          </button>
          <div id="template-menu" className="dropdown-menu">
            <p id="scatter-plot" onClick={(e)=>getScatterPlotAction(ScatterPlotObject)}>
              <span className="icon icon-chart-line icon-text"></span>
              Scatter Plot
            </p>
            <p>
              <span className="icon icon-chart-area icon-text"></span>
              Area Graph
            </p>
            <p>
              <span className="icon icon-chart-line icon-text"></span>
              Line Graph
            </p>
            <p>
              <span className="icon icon-chart-bar icon-text"></span>
              Bar Chart
            </p>
            <p>
              <span className="icon icon-chart-pie icon-text"></span>
              Pie Chart
            </p>
          </div>
        </div>
      </div>

      <div className="btn-group pull-right">
        <button className="btn btn-default">
          <span className="icon icon-database icon-text"></span>
          Data Management
        </button>
        <button className="btn btn-default">
          <span className="icon icon-popup icon-text"></span>
          Pop Editor
        </button>
        <button className="btn btn-default">
          <span className="icon icon-popup icon-text"></span>
          Pop Render
        </button>
      </div>
    </div>
  );
}