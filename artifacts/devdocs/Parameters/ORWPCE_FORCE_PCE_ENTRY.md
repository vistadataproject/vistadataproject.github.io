---
layout: default
title: Parameters
---

#### [Developer Documentation](../index) &#187; [Parameters](TableOfContents) &#187; ORWPCE FORCE PCE ENTRY<br/>
# ORWPCE FORCE PCE ENTRY

This parameter is used in the CPRS GUI to determine if PCE encounter information must be entered by the primary provider when required for a note.  Non-primary providers will be prompted for encounter data (prompt, not required) based on the parameter setting ORWPCE ASK ENCOUNTER UPDATE.

## Properties

Property | Value
--- | ---
Summary | Force PCE Entry
Value Type | set of codes
Value Domain | 0:NO;1:YES
Multiple Instances | false

## Allowable Entities

Precedence | Entity
--- | ---
1 | USER
2 | LOCATION
3 | SERVICE
4 | DIVISION
5 | SYSTEM
6 | PACKAGE

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:40 pm</p>{:/}