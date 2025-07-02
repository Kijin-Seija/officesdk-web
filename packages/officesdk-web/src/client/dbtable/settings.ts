import type { DatabaseTableSDKOptions } from '../../shared';

export interface DatabaseTableSettings {
  fieldContextMenu?: DatabaseTableSDKOptions['fieldContextMenu'];
  viewContextMenu?: DatabaseTableSDKOptions['viewContextMenu'];
  toolbar?: DatabaseTableSDKOptions['toolbar'];
  listBar?: DatabaseTableSDKOptions['listBar'];
}

export function createDatabaseTableOptions(settings?: DatabaseTableSettings): DatabaseTableSDKOptions | null {
  return {
    fieldContextMenu: settings?.fieldContextMenu,
    viewContextMenu: settings?.viewContextMenu,
    toolbar: settings?.toolbar,
    listBar: settings?.listBar,
  };
}
