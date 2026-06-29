import '@angular/compiler';
import { beforeEach } from 'vitest';
import { TestBed } from '@angular/core/testing';
import { BrowserTestingModule, platformBrowserTesting } from '@angular/platform-browser/testing';
import { ɵresolveComponentResources as resolveComponentResources } from '@angular/core';

TestBed.initTestEnvironment(BrowserTestingModule, platformBrowserTesting());

beforeEach(async () => {
  await resolveComponentResources(() => Promise.resolve({ text: () => Promise.resolve('') }));
});
