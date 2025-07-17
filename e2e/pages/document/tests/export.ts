import { createEditor } from '../client';
import { createRenderTitle, createRenderContent } from '../../shared/renderer';
import { DocumentExportType } from '@officesdk/web';

/**
 * Test document export cases.
 * @param root - Root container element for the test UI
 */
export async function testExport(root: HTMLElement): Promise<void> {
  const renderTitle = createRenderTitle({ container: root });
  const renderContent = createRenderContent({ container: root });

  renderTitle('Test export to DOCX');
  await testExportDocx(
    renderContent({
      height: 1 + 21 * 4,
    }),
  );

  renderTitle('Test export to PDF');
  await testExportPdf(
    renderContent({
      height: 1 + 21 * 3,
    }),
  );

  renderTitle('Test export to Image');
  await testExportImage(
    renderContent({
      height: 1 + 21 * 3,
    }),
  );
}

/**
 * Test exporting document to DOCX format
 * @param content - Test UI container element
 */
async function testExportDocx(content: HTMLElement): Promise<void> {
  const { editor, output } = await createEditor(content);

  output('Exporting document to DOCX format...');
  try {
    await editor.export(DocumentExportType.Docx);
    output('Document exported to DOCX successfully');
  } catch (error) {
    output(`Export to DOCX failed: ${error}`);
  }
}

/**
 * Test exporting document to PDF format
 * @param content - Test UI container element
 */
async function testExportPdf(content: HTMLElement): Promise<void> {
  const { editor, output } = await createEditor(content);

  output('Exporting document to PDF format...');
  try {
    await editor.export(DocumentExportType.Pdf);
    output('Document exported to PDF successfully');
  } catch (error) {
    output(`Export to PDF failed: ${error}`);
  }
}

/**
 * Test exporting document to Image format
 * @param content - Test UI container element
 */
async function testExportImage(content: HTMLElement): Promise<void> {
  const { editor, output } = await createEditor(content);

  output('Exporting document to Image format...');
  try {
    await editor.export(DocumentExportType.Image);
    output('Document exported to Image successfully');
  } catch (error) {
    output(`Export to Image failed: ${error}`);
  }
} 