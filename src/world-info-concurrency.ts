/** Compare both the server and the live host cache with the data used for deletion. */
export function worldInfoChanged(baseline: string, server: unknown, current: unknown): boolean {
  return JSON.stringify(server) !== baseline || JSON.stringify(current) !== baseline;
}
