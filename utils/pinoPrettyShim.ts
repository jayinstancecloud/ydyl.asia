export default function pinoPrettyShim() {
  // No-op pretty printer used to satisfy bundlers in environments
  // where pino-pretty is not available (e.g. browser/serverless).
  return (data: unknown) => data
}
