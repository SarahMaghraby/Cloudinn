import { TestBed, inject } from '@angular/core/testing';

import { CharactersListService } from './characters-list.service';

describe('CharactersListService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CharactersListService]
    });
  });

  it('should be created', inject([CharactersListService], (service: CharactersListService) => {
    expect(service).toBeTruthy();
  }));
});
