import { ParallaxModule } from './parallax.module';

describe('ParallaxModule', () => {
  let parallaxModule: ParallaxModule;

  beforeEach(() => {
    parallaxModule = new ParallaxModule();
  });

  it('should create an instance', () => {
    expect(parallaxModule).toBeTruthy();
  });
});
