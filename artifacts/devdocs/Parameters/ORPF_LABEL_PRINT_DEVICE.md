---
layout: default
title: Parameters
---

#### [Developer Documentation](../index) &#187; [Parameters](TableOfContents) &#187; ORPF LABEL PRINT DEVICE<br/>
# ORPF LABEL PRINT DEVICE

This is the printer on the ward/clinic/other where the label shouldbe printed.  If the field PROMPT FOR LABELS is 0 or 2, this printeris automatically used to print the labels.  If the field PROMPT FORLABELS is 1, the user is asked for device with the entry in this fieldas a default.

## Properties

Property | Value
--- | ---
Summary | Label Print Device
Value Type | pointer
Value Domain | 3.5
Multiple Instances | false

## Allowable Entities

Precedence | Entity
--- | ---
1 | ROOM-BED
2 | LOCATION

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:40 pm</p>{:/}