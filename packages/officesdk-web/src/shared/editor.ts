
import type {  EditorOutline } from '@officesdk/editor-sdk-core/combine'

/**
 * 编辑器模式
 * - `standard` 标准模式，会根据用户权限配置不同的功能
 * - `preview` 预览模式，只能查看内容
 */
export enum EditorModeType {
  Standard = 'standard',
  Preview = 'preview'
}

/**
 * 编辑器在 `standard` 模式下的权限模式
 * - `editor` 编辑模式
 * - `viewer` 阅读模式
 * - `reviewer` 评论模式
 */
export enum EditorStandardRole {
  Editor = 'editor',
  Viewer = 'viewer',
  Reviewer = 'reviewer'
}

export type EditorContentMethods = {
  getContent: () => EditorContent;
};

/**
 * 编辑器内容接口
 */
export type EditorContent = {
  /**
   * 主动保存内容
   */
  save: () => void;

  /**
   * 文件内容发生变化时触发回调
   * @param listener
   * @returns
   */
  addContentListener: (listener: (record: EditorContentRecord) => void) => () => void;
};

/**
 * 每次内容发生变化时，会生成一个当前页面唯一的记录。
 */
export interface EditorContentRecord {
  /**
   * 生成内容的时间戳
   */
  timestamp: number;

  /**
   * 内容标识
   */
  id: string;
}

export type EditorOutlineMethods<Content> = {
  getOutline: () => Omit<EditorOutline<Content>, 'setVisible'>;
};


/**
 * 菜单栏按钮配置
 */
export type EditorMenuFeatureButtonConfig<TName extends string> = Record<TName, EditorMenuFeatureButton<TName>>;


/**
 * 菜单栏功能按钮配置
 */
export type EditorMenuFeatureButton<TName extends string> =
  | {
      /**
       * 隐藏按钮，用作在需要隐藏菜单栏时定义
       */
      type: 'hidden';
      /**
       * 按钮名称
       */
      name: TName;
    }
  | {
      type: 'button';
      /**
       * 按钮名称
       */
      name: TName;
      /**
       * 按钮标签（显示文本）
       */
      label: string;
      /**
       * 按钮图标，可以是 base64 的图片信息，也可以是图片 url
       */
      icon?: string;
    };

/**
 * 菜单栏二级以下的菜单入口
 */
export type EditorMenuEntryButton = {
  type: 'entry';

  /**
   * 菜单名称
   */
  name: string;

  /**
   * 菜单图标
   */
  icon?: string;
};

/**
 * 菜单栏自定义按钮配置
 */
export type EditorMenuCustomButton =
  | {
      /**
       * 按钮名称
       */
      name: string;
      /**
       * 链接
       */
      type: 'link';
      /**
       * 按钮文本
       */
      text: string;
      /**
       * 链接地址
       */
      url: string;
    }
  | {
      /**
       * 按钮名称
       */
      name: string;
      /**
       * 按钮，点击后触发 callback 回调
       */
      type: 'button';
      /**
       * 按钮文本
       */
      label: string;
      /**
       * 按钮图标，可以是 base64 的图片信息，也可以是图片 url
       */
      icon?: string;
      /**
       * 按钮点击事件
       */
      callback: () => void;
    };


