import type { DocxMenuOptions, DocxToolbarOptions } from '@officesdk/editor-sdk-core/combine';
import type { DocumentSDKOptions } from '../../shared';

export interface DocumentSettings {
  /**
   * menu settings
   */
  menu?: {
    disabled?: boolean
    hidden?: boolean
    custom?: DocxMenuOptions['custom'];
    features?: DocxMenuOptions['features'];
  };
  /**
   * toolbar settings
   */
  toolbar?:{
    disabled?: boolean
    hidden?: boolean
    features?: DocxToolbarOptions['features']
  }
  
}

export function createDocumentOptions(settings?: DocumentSettings): DocumentSDKOptions | null {
  return {
    menu: settings?.menu,
    toolbar: settings?.toolbar
  };
}
