import { testSDK } from './tests/sdk';
import { testSelection } from './tests/selection';
import { testZoom } from './tests/zoom';
import { testContent } from './tests/content';
import { testExport } from './tests/export';

function main(): void {
  const root = document.getElementById('root');

  if (!root) {
    throw new Error('root element not found');
  }

  testSDK(root);
  testExport(root);
  testSelection(root);
  testZoom(root);
  testContent(root);
}

main();
