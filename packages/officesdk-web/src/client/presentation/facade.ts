import type { Client, RPCReturnMapProxy } from '@officesdk/rpc';
import type {
  PresentationMethods,
  PresentationSelection,
  EditorContent,
  PresentationZoom,
  PresentationSlides,
  PresentationExportType,
} from '../../shared';
import { createSelectionFacade } from './selection';
import { createContentFacade } from '../editor/content';
import { createZoomFacade } from './zoom';
import { createSlidesFacade } from './slides';

export interface PresentationFacade {
  readonly export: (type: PresentationExportType) => Promise<void>
  /**
   * 选区实例
   */
  readonly selection: RPCReturnMapProxy<PresentationSelection>;

  /**
   * 内容实例
   */
  readonly content: RPCReturnMapProxy<EditorContent>;

  /**
   * 缩放实例
   */
  readonly zoom: RPCReturnMapProxy<PresentationZoom>;

  /**
   * 幻灯片集合实例
   */
  readonly slides: RPCReturnMapProxy<PresentationSlides>;
}

export function createPresentationFacade(client: Client<PresentationMethods>): PresentationFacade {
  const { methods } = client;
  const selection = createSelectionFacade(methods);
  const content = createContentFacade(methods);
  const zoom = createZoomFacade(methods);
  const slides = createSlidesFacade(methods);

  return {
    export: async (type: PresentationExportType): Promise<void> => {
      return client.methods.export(type)
    },
    get selection() {
      return selection;
    },
    get content() {
      return content;
    },
    get zoom() {
      return zoom;
    },
    get slides() {
      return slides;
    },
  };
}
