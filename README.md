Forked from https://github.com/simplabs/ember-promise-modals with specific changes for https://github.com/TryGhost/Admin.

Not recommended for general use, this package will be removed if upstream becomes compatible with our requirements.

Custom changes:
- added `.finally()` to modal instances so the Promise-like interface is more complete. Useful for cleanup after a modal is resolved/rejected without duplication
- added `beforeClose()` as an option that can be passed when opening a modal, if the function returns `false` then the modal close will be aborted
- dropped passthrough of `focusTrapOptions.onDeactivate` when closing modal as it causes `@close` return values to be lost
  - https://github.com/simplabs/ember-promise-modals/issues/565
