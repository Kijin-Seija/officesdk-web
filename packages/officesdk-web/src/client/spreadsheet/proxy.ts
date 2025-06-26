import type { RPCClientProxy } from '@officesdk/rpc';

import type { SpreadsheetExportType, SpreadsheetMethods } from '../../shared';

export function createSpreadsheetProxy(): RPCClientProxy<SpreadsheetMethods> {
  return (context) => {
    const { invoke } = context;

    return {
      ready: async () => {
        return invoke('ready', []);
      },
      export: async (type: SpreadsheetExportType) => {
        return invoke('export', [type]);
      },
      getWorkbook: async () => {
        return invoke('getWorkbook', []);
      },

      getActiveSheet: async () => {
        return invoke('getActiveSheet', []);
      },

      getActiveCell: async () => {
        return invoke('getActiveCell', []);
      },

      getSelections: async () => {
        return invoke('getSelections', []);
      },

      getContent: async () => {
        return invoke('getContent', []);
      },
    };
  };
}
