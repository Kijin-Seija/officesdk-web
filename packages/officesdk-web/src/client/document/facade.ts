import type { Client, RPCReturnMapProxy } from '@officesdk/rpc';
import type { DocumentMethods, DocumentSelection, EditorContent, DocumentZoom,
  DocumentTOCs,
  DocumentOutline, 
  DocumentWindow,
  DocumentExportType,
  DocumentParagraphs
} from '../../shared';
import { createSelectionFacade } from './selection';
import { createContentFacade } from '../editor/content';
import { createZoomFacade } from './zoom';
import { createTOCsFacade } from './tocs';
import { createOutlineFacade } from '../editor/outline';
import { createWindowFacade } from './window';
import { createParagraphsFacade } from './paragraphs';

export interface DocumentFacade {
  /**
   * 导出文档
   */
  readonly export: (type: DocumentExportType) => Promise<void>;

  /**
   * 选区实例
   */
  readonly selection: RPCReturnMapProxy<DocumentSelection>;

  /**
   * 主动保存内容
   */
  readonly content: RPCReturnMapProxy<EditorContent>;

  /**
   * 缩放实例
   */
  readonly zoom: RPCReturnMapProxy<DocumentZoom>;

  /**
   * 目录实例
   */
  readonly TOCs: RPCReturnMapProxy<DocumentTOCs>;

  /**
   * 目录实例
   */
  readonly outline: RPCReturnMapProxy<DocumentOutline>;
  /**
   * 窗口实例
   */
  readonly window: RPCReturnMapProxy<DocumentWindow>
  /**
   * 段落实例
   */
  readonly paragraphs: RPCReturnMapProxy<DocumentParagraphs>;



  // TODO: 初始化流程控制，初始化各类异常
}

export function createDocumentFacade(client: Client<DocumentMethods>): DocumentFacade {
  const { methods } = client;
  const selection = createSelectionFacade(methods);
  const content = createContentFacade(methods);
  const zoom = createZoomFacade(methods);
  const TOCs = createTOCsFacade(methods);
  const outline = createOutlineFacade<{ text: string }>(methods);
  const docxWindow = createWindowFacade(methods);
  const paragraphs = createParagraphsFacade(methods);
  
  return {
    export: async (type: DocumentExportType) => {
      return methods.export(type);
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
    get TOCs() {
      return TOCs;
    },
    get outline() {
      return outline;
    },
    get window() {
      return docxWindow
    },
    get paragraphs() {
      return paragraphs;
    }
    
  };
}
