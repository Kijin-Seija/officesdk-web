import type { DocumentParagraphs } from "../../shared";
import { createDocumentRangeProxy } from "./range";

export function createDocumentParagraphsProxy(paragraphs: DocumentParagraphs): DocumentParagraphs {
  return {
    getAll: async () => {
      const paragraphList = await paragraphs.getAll();
      return paragraphList.map(para => {
        getRange: () => {
          const range = para.getRange();
          return createDocumentRangeProxy(range)
        }
      })
    },
    getOne: async (index: number) => {
      const para = await paragraphs.getOne(index);
      return {
        getRange: () => {
          const range = para.getRange();
          return createDocumentRangeProxy(range)
        }
      }
    },
    count: async () => {
      return await paragraphs.count();
    }
  }
}