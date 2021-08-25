export type Environment = {
  readonly auth0: Readonly<{
    readonly domain: string;
    readonly clientId: string;
  }>;
  readonly production: boolean;
}
