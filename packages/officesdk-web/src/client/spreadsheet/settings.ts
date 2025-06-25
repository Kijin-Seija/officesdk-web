import type { SpreadsheetSDKOptions } from '../../shared';
import type { SheetMenuOptions as SpreadsheetMenuOptions, SheetToolbarOptions as SpreadsheetToolbarOptions} from '@officesdk/editor-sdk-core/combine';
export type { SheetMenuOptions as SpreadsheetMenuOptions, SheetToolbarOptions as SpreadsheetToolbarOptions} from '@officesdk/editor-sdk-core/combine';
export interface SpreadsheetSettings {
  /**
   * menu settings
   */
  menu?: {
    disabled?: boolean
    hidden?: boolean
    custom?: SpreadsheetMenuOptions['custom'];
    features?: SpreadsheetMenuOptions['features']
  };
  /**
   * Toolbar related settings
   */
  toolbar?: {
    disabled?: boolean
    hidden?: boolean
    features?: SpreadsheetToolbarOptions['features'];
  };
}

export function createSpreadsheetOptions(settings?: SpreadsheetSettings): SpreadsheetSDKOptions | null {
  return {
    menu: settings?.menu,
    toolbar: settings?.toolbar,
  };
}
