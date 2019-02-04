import { StagePageModule } from './stage-page.module';

describe('StagePageModule', () => {
  let stagePageModule: StagePageModule;

  beforeEach(() => {
    stagePageModule = new StagePageModule();
  });

  it('should create an instance', () => {
    expect(stagePageModule).toBeTruthy();
  });
});
