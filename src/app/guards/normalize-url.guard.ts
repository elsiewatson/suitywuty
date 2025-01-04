import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class NormalizeUrlGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(): boolean {
    const url = this.router.url;

    // Check for three or more slashes
    if (url.includes('///')) {
      this.router.navigateByUrl('/404', { replaceUrl: true });
      return false;
    }

    // Normalize URLs with multiple slashes
    const normalizedUrl = url.replace(/\/{2,}/g, '/');
    if (url !== normalizedUrl) {
      this.router.navigateByUrl(normalizedUrl, { replaceUrl: true });
      return false;
    }
    return true;
  }
}
