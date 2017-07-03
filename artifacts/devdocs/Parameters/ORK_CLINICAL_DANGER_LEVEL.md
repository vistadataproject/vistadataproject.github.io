---
layout: default
title: Parameters
---

## [Parameters](TableOfContents) &#8594; ORK CLINICAL DANGER LEVEL
# ORK CLINICAL DANGER LEVEL

Package, System, Division indicate the clinical danger level of an ordercheck.  Valid levels include High, Moderate, Low.  The clinical danger level is used in sorting for order check display and prompting for override.

Property | Value
--- | ---
ID | 85
Summary | Order Check Clinical Danger Level
Value Type | set of codes
Value Domain | 1:High;2:Moderate;3:Low
Multiple Instances | true

### Allowable Entities

Precedence | Entity
--- | ---
1 | DIVISION
2 | SYSTEM
3 | PACKAGE

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:01 pm</p>{:/}