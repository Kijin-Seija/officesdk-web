import type { PresentationSDKOptions } from '../../shared';
import type { PresentationMenuOptions, PresentationToolbarOptions } from '@officesdk/editor-sdk-core/presentation'

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
    features?: PresentationToolbarOptions['features']
  }
}

export function createPresentationOptions(settings?: PresentationSettings): PresentationSDKOptions | null {

  return {
    menu: settings?.menu,
    toolbar: settings?.toolbar
  };
}
