# Personal Workflow Add-On

This directory is passed to the official BMAD installer via `--custom-content`.

Its role is intentionally small:

- provide an add-on packaging anchor for this distribution
- keep customization update-safe
- leave official BMAD command semantics intact

The installer now filters official BMAD skills at the packaging layer instead of shipping custom commands from this module.
