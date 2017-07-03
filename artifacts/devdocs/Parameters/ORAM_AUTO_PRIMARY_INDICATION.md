---
layout: default
title: Parameters
---

## [Parameters](TableOfContents) &#8594; ORAM AUTO PRIMARY INDICATION
# ORAM AUTO PRIMARY INDICATION

This is an Indication for care which will automatically be filed as the Primary Indication for each visit to the applicable Clinic. (e.g., if all visits to a non-licensed provider should be filed with V58.61 L/T (CURRENT) USE - ANTICOAG as the primary indication, you canspecify that with this parameter. If all visits should also have V58.83 ENCTR THERAP DRUG MONITOR as an automatic Secondary Indication for care, you can express that by setting the Auto Secondary Indic for Care (ICD-9-CM) parameter. The user will still be able to select additional indication(s) from the list).

Property | Value
--- | ---
ID | 603
Summary | Auto Primary Indic for Care (ICD-9-CM)
Value Type | pointer
Value Domain | 80:AEMQ
Multiple Instances | false

### Allowable Entities

Precedence | Entity
--- | ---
1 | LOCATION
2 | PACKAGE

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:01 pm</p>{:/}