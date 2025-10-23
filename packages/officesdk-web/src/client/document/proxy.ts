import type { RPCClientProxy } from '@officesdk/rpc';
import type { DocumentMethods, DocumentExportType } from '../../shared';

/**
 * 定义 Document 的 RPC 代理的客户端调用接口
 * @returns
 */
export function createDocumentProxy(): RPCClientProxy<DocumentMethods> {
  return (context) => {
    const { invoke } = context;

    return {
      ready: async () => {
        return invoke('ready', []);
      },
      export: async (type: DocumentExportType) => {
        return invoke('export', [type]);
      },
      getSelection: async () => {
        return invoke('getSelection', []);
      },

      getContent: async () => {
        return invoke('getContent', []);
      },

      getZoom: async () => {
        return invoke('getZoom', []);
      },

      getTOCs: async () => {
        return invoke('getTOCs', []);
      },

      getOutline: async () => {
        return invoke('getOutline', []);
      },
      getWindow: async () => {
        return invoke('getWindow', [])
      },
      getParagraphs: async () => {
        return invoke('getParagraphs', []);
      },
    };
  };
}
