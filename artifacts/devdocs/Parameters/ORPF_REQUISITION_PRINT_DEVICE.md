---
layout: default
title: Parameters
---

## [Parameters](TableOfContents) &#8594; ORPF REQUISITION PRINT DEVICE
# ORPF REQUISITION PRINT DEVICE

This is the printer on the ward/clinic/other where the requisitionshould be printed.  If the field PROMPT FOR REQUISITIONS is 0 or 2,this printer is automatically used to print the requisitions.  If thefield PROMPT FOR REQUISITIONS is 1, the user is asked for device withthe entry in this field as a default.

Property | Value
--- | ---
ID | 133
Summary | Requisition Print Device
Value Type | pointer
Value Domain | 3.5
Multiple Instances | false

### Allowable Entities

Precedence | Entity
--- | ---
1 | ROOM-BED
2 | LOCATION

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:01 pm</p>{:/}