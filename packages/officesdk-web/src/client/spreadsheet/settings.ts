import type { SpreadsheetSDKOptions } from '../../shared';
import type { SheetMenuOptions, SheetToolbarOptions } from '@officesdk/editor-sdk-core/sheet';

export interface SpreadsheetSettings {
  /**
   * menu settings
   */
  menu?: {
    disabled?: boolean
    hidden?: boolean
    custom?: SheetMenuOptions['custom'];
    features?: SheetMenuOptions['features']
  };
  /**
   * Toolbar related settings
   */
  toolbar?: {
    disabled?: boolean
    hidden?: boolean
    features?: SheetToolbarOptions['features'];
  };
}

export function createSpreadsheetOptions(settings?: SpreadsheetSettings): SpreadsheetSDKOptions | null {
  return {
    menu: settings?.menu,
    toolbar: settings?.toolbar,
  };
}
