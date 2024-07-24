export default function taskBlock(trueOrFalse) {
  let task = false; // Use `let` for block-scoped variable
  let task2 = true; // Use `let` for block-scoped variable

  if (trueOrFalse) {
    task = true;    // This will now modify the `task` variable defined outside the block
    task2 = false;  // This will now modify the `task2` variable defined outside the block
  }

  return [task, task2];
}
