import { CustomComponentsModule } from './custom-components.module';

describe('CustomComponentsModule', () => {
  let customComponentsModule: CustomComponentsModule;

  beforeEach(() => {
    customComponentsModule = new CustomComponentsModule();
  });

  it('should create an instance', () => {
    expect(customComponentsModule).toBeTruthy();
  });
});
