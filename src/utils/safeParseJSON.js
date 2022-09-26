export default function safeParseJSON(str) {
  try {
    return JSON.parse(str);
  } catch (error) {
    console.error(error);
  }
}
