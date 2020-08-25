import { TestBed } from '@angular/core/testing';

import { ShareSocialService } from './share-social.service';

describe('ShareSocialService', () => {
  let service: ShareSocialService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShareSocialService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
