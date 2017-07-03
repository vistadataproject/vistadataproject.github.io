---
layout: default
title: Parameters
---

## [Parameters](TableOfContents) &#8594; ORAM I10 AUTO PRIM INDICATION
# ORAM I10 AUTO PRIM INDICATION

This is an Indication for care which will automatically be filed as the Primary Indication for each visit to the applicable Clinic. (e.g., if all visits to a non-licensed provider should be filed with Z79.01 Long term (current) use of anticoagulants , you can specify thatwith this parameter. If all visits should also have Z51.81 Encounter for therapeutic drug level monitoring as an automatic Secondary Indication forcare, you can express that by setting the Auto Secondary Indic for Care(ICD-10-CM) parameter. The user will still be able to select additionalindication(s) from the list).

Property | Value
--- | ---
ID | 789
Summary | Auto Primary Indic for Care (ICD-10-CM)
Value Type | pointer
Value Domain | 80:AEMQ
Multiple Instances | false

### Allowable Entities

Precedence | Entity
--- | ---
1 | LOCATION
2 | PACKAGE

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:01 pm</p>{:/}