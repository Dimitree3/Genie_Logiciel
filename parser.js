export function parse(stream) {
  switch (stream) {
    case '0X123':
      return ['moveForward'];
    case '0X789':
      return ['moveBackward'];
    case '0XABC':
      return ['stop'];
  }
}