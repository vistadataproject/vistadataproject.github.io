---
layout: default
title: Parameters
---

#### [Developer Documentation](../index) &#187; [Parameters](TableOfContents) &#187; ORAM I10 AUTO SEC INDICATION<br/>
# ORAM I10 AUTO SEC INDICATION

This is an Indication for care which will automatically be filed as the first Secondary Indication for each visit to the applicable Clinic. (e.g., if all visits to a non-licensed provider should be filed with Z51.81 Encounter for therapeutic drug level monitoring as the firstsecondary indication, you can specify that with this parameter, and theuser will still be able to select additional secondary indication(s) from the list).

## Properties

Property | Value
--- | ---
Summary | Auto Secondary Ind for Care (ICD-10-CM)
Value Type | pointer
Value Domain | 80:AEMQ
Multiple Instances | false

## Allowable Entities

Precedence | Entity
--- | ---
1 | LOCATION
2 | PACKAGE

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:29 pm</p>{:/}