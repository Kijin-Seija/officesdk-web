import type { PresentationSDKOptions } from '../../shared';
import type { PresentationMenuOptions, PresentationToolbarFeatureButtonConfig } from '@officesdk/editor-sdk-core/combine'

export interface PresentationSettings {
  /**
   * 自定义菜单
   */
  menu?: {
    disabled?: boolean
    hidden?: boolean
    custom?: PresentationMenuOptions['custom'];
    features?: PresentationMenuOptions['features']
  };
  /**
   * Toolbar related settings
   */
  toolbar?: {
    disabled?: boolean
    hidden?: boolean
    features?: PresentationToolbarFeatureButtonConfig
  }
}

export function createPresentationOptions(settings?: PresentationSettings): PresentationSDKOptions | null {

  return {
    menu: settings?.menu,
    toolbar: settings?.toolbar
  };
}
