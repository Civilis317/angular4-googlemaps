/*
* map-config.model.ts
*/
export class MapConfiguration {
  constructor(
    public id: number,
    public title: string,
    public lat: number,
    public lng: number,
    public zoom: number,
    public type?: string
  ) {}
}
