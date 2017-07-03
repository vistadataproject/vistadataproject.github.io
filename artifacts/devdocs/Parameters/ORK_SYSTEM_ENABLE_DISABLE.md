---
layout: default
title: Parameters
---

## [Parameters](TableOfContents) &#8594; ORK SYSTEM ENABLE/DISABLE
# ORK SYSTEM ENABLE/DISABLE

Parameter determines if any order checking will occur.  &#x27;E&#x27; or &#x27;Enable&#x27;indicates order checking is enabled and running. &#x27;D&#x27; or &#x27;Disabled&#x27;indicates order checking is disabled and not running.  Can be set at the Institution, System, or Package level.

Property | Value
--- | ---
ID | 93
Summary | Enable or disable order checking system.
Value Type | set of codes
Value Domain | E:Enable;D:Disable
Multiple Instances | false

### Allowable Entities

Precedence | Entity
--- | ---
1 | DIVISION
2 | SYSTEM
3 | PACKAGE

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:01 pm</p>{:/}