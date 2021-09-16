Forked from https://github.com/simplabs/ember-promise-modals with specific changes for https://github.com/TryGhost/Admin.
Not recommended for general use, this package will be removed if upstream becomes compatible with our requirements.

Custom changes:
- added `allowOutsideClick` passthrough from the `modals` service to the `focus-trap` initialisation so `clickOutsideDeactivates` and `allowOutsideClick` and be used in tandem to allow wormholed content such as dropdowns to work inside of a modal
- added `escapeDeactivates` passthrough from the `modals` service to the `focus-trap` initialisation so that deactivation/close event handling can be fully controlled by the consuming app
- added `.finally()` to modal instances so the Promise-like interface is more complete. Useful for cleanup after a modal is resolved/rejected without duplication
