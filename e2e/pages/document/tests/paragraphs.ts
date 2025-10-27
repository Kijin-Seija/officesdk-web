import { createRenderTitle, createRenderContent } from '../../shared/renderer';
import { createEditor } from '../client';

export function testParagraphs(root: HTMLElement) {
  const renderTitle = createRenderTitle({ container: root });
  const renderContent = createRenderContent({ container: root });

  renderTitle('Test Paragraphs');
  testGetAll(
    renderContent({
      height: 1 + 21 * 4
    })
  )
  
  testGetOne(
    renderContent({
      height: 1 + 21 * 4
    })
  )

  testCount(
    renderContent({
      height: 1 + 21 * 4
    })
  )
}

async function testGetAll(content: HTMLElement): Promise<void> {
  const { editor, output } = await createEditor(content);
  output('getting paragraphs: ');
  
  const paragraphs = await editor.paragraphs.getAll();
  if (!paragraphs) {
    throw new Error('getAll paragraphs failed');
  }
  output(`Received paragraphs: ${paragraphs}`);
  
  const ranges = await Promise.all(paragraphs.map(para => para.getRange()));
  output(`Received ranges: ${ranges}`);
  const texts = await Promise.all(ranges.map(range => range.getText()));
  output(`Received texts: ${texts}`);
}

async function testGetOne(content: HTMLElement): Promise<void> {
  const { editor, output } = await createEditor(content);
  output('getting paragraph: ');
  
  const paragraph = await editor.paragraphs.getOne();
  if (!paragraph) {
    throw new Error('getOne paragraph failed');
  }
  output(`Received paragraph: ${paragraph}`);
  
  const range = await paragraph.getRange();
  if (!range) {
    throw new Error('getRange paragraph failed');
  }
  output(`Received range: ${range}`);
  
  const text = await range.getText();
  if (!text) {
    throw new Error('getText range failed');
  }
  output(`Received text: ${text}`);
}

async function testCount(content: HTMLElement): Promise<void> {
  const { editor, output } = await createEditor(content);
  output('counting paragraphs: ');
  
  const count = await editor.paragraphs.count();
  if (count === undefined) {
    throw new Error('count paragraphs failed');
  }
  output(`Received count: ${count}`);
}
