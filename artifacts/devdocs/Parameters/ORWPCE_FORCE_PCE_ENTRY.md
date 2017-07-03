---
layout: default
title: Parameters
---

## [Parameters](TableOfContents) &#8594; ORWPCE FORCE PCE ENTRY
# ORWPCE FORCE PCE ENTRY

This parameter is used in the CPRS GUI to determine if PCE encounter information must be entered by the primary provider when required for a note.  Non-primary providers will be prompted for encounter data (prompt, not required) based on the parameter setting ORWPCE ASK ENCOUNTER UPDATE.

Property | Value
--- | ---
ID | 4668
Summary | Force PCE Entry
Value Type | set of codes
Value Domain | 0:NO;1:YES
Multiple Instances | false

### Allowable Entities

Precedence | Entity
--- | ---
1 | USER
2 | LOCATION
3 | SERVICE
4 | DIVISION
5 | SYSTEM
6 | PACKAGE

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:01 pm</p>{:/}