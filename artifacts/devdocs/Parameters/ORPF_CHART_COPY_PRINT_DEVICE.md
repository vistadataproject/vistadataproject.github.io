---
layout: default
title: Parameters
---

#### [Developer Documentation](../index) &#187; [Parameters](TableOfContents) &#187; ORPF CHART COPY PRINT DEVICE<br/>
# ORPF CHART COPY PRINT DEVICE

This is the printer on the ward/clinic/other where the chart copyshould be printed.  If the field PROMPT FOR CHART COPY is 0 or 2, thisprinter is automatically used to print the report.  If the fieldPROMPT FOR CHART COPY is 1, the user is asked for device withthe entry in this field as a default.

## Properties

Property | Value
--- | ---
Summary | Chart Copy Print Device
Value Type | pointer
Value Domain | 3.5
Multiple Instances | false

## Allowable Entities

Precedence | Entity
--- | ---
1 | ROOM-BED
2 | LOCATION

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:40 pm</p>{:/}