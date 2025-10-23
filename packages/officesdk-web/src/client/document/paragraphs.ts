import type { RPCReturnMapProxy, RPCReturnMethods } from "@officesdk/rpc";
import type { DocumentMethods, DocumentParagraphs } from "../../shared";

export function createParagraphsFacade(
  methods: RPCReturnMethods<DocumentMethods>,
): RPCReturnMapProxy<DocumentParagraphs> {
  let paragraphsCache: Promise<RPCReturnMapProxy<DocumentParagraphs>> | null = null;

  const getParagraphs = async (): Promise<RPCReturnMapProxy<DocumentParagraphs>> => {
    if (paragraphsCache) {
      return paragraphsCache;
    }

    paragraphsCache = methods.getParagraphs();
    return paragraphsCache;
  };

  return {
    getAll: async (): Promise<RPCReturnMapProxy<DocumentParagraphs>> => {
      const paragraphs = await getParagraphs();
      return paragraphs.getAll();
    },
    getOne: async (index: number): Promise<RPCReturnMapProxy<DocumentParagraphs> | null> => {
      const paragraphs = await getParagraphs();
      return paragraphs.getOne(index);
    },
    count: async (): Promise<number> => {
      const paragraphs = await getParagraphs();
      return paragraphs.count();
    },
  }
}
