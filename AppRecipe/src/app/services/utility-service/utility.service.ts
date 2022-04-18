import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UtilityService {
  constructor() {}
  /**
   * get current timestamp in milliseconds
   * @returns current timestamp
   */
  public getTime(): number {
    return Math.floor(Date.now() / 1000);
  }
  /**
   * Given a path, this function return last part (ideally the file name ;))
   * @param filepath path to the file
   * @returns file name
   */
  public fileNameFromPath(filepath: string): string {
    const splittedPath = filepath.split('/');
    return splittedPath[splittedPath.length - 1];
  }
}
