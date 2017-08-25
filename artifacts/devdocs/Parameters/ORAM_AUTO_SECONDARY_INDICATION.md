---
layout: default
title: Parameters
---

#### [Developer Documentation](../index) &#187; [Parameters](TableOfContents) &#187; ORAM AUTO SECONDARY INDICATION<br/>
# ORAM AUTO SECONDARY INDICATION

This is an Indication for care which will automatically be filed as the first Secondary Indication for each visit to the applicable Clinic. (e.g., if all visits to a non-licensed provider should be filed with V58.83 ENCTR THERAP DRUG MONITOR as the first secondary indication, youcan specify that with this parameter, and the user will still be able toselect additional secondary indication(s) from the list).

## Properties

Property | Value
--- | ---
Summary | Auto Secondary Indic for Care (ICD-9-CM)
Value Type | pointer
Value Domain | 80:AEMQ
Multiple Instances | false

## Allowable Entities

Precedence | Entity
--- | ---
1 | LOCATION
2 | PACKAGE

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:40 pm</p>{:/}