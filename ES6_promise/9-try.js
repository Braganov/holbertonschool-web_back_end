/**
 * Creates and returns an array with the results of a math function execution
 * @param {Function} mathFunction - Math function to execute
 * @return {Array} Array containing function result or error and a processing message
 */
export default function guardrail(mathFunction) {
  const queue = [];

  try {
    const result = mathFunction();
    queue.push(result);
  } catch (error) {
    queue.push(error.toString());
  } finally {
    queue.push('Guardrail was processed');
  }

  return queue;
}
