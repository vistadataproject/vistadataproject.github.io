---
layout: default
title: Parameters
---

#### [Developer Documentation](../index) &#187; [Parameters](TableOfContents) &#187; ORAM I10 AUTO PRIM INDICATION<br/>
# ORAM I10 AUTO PRIM INDICATION

This is an Indication for care which will automatically be filed as the Primary Indication for each visit to the applicable Clinic. (e.g., if all visits to a non-licensed provider should be filed with Z79.01 Long term (current) use of anticoagulants , you can specify thatwith this parameter. If all visits should also have Z51.81 Encounter for therapeutic drug level monitoring as an automatic Secondary Indication forcare, you can express that by setting the Auto Secondary Indic for Care(ICD-10-CM) parameter. The user will still be able to select additionalindication(s) from the list).

## Properties

Property | Value
--- | ---
Summary | Auto Primary Indic for Care (ICD-10-CM)
Value Type | pointer
Value Domain | 80:AEMQ
Multiple Instances | false

## Allowable Entities

Precedence | Entity
--- | ---
1 | LOCATION
2 | PACKAGE

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:40 pm</p>{:/}