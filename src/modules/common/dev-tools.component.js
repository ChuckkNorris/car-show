import React from 'react';
import {createDevTools} from 'redux-devtools';
import LogMonitor from 'redux-devtools-log-monitor';
import DockMonitor from 'redux-devtools-dock-monitor';

/**
 * Create the DevTools component and export it.
 */
const DevTools = createDevTools(
  <DockMonitor
    /**
     * Hide or show the dock with "ctrl-h".
     */
    toggleVisibilityKey='alt-h'
    /**
     * Change the position of the dock with "ctrl-q".
     */
    changePositionKey='alt-q'
    defaultIsVisible={false}
  >
    <LogMonitor theme='tomorrow' />
  </DockMonitor>
);
export default DevTools;
