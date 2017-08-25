---
layout: default
title: Parameters
---

#### [Developer Documentation](../index) &#187; [Parameters](TableOfContents) &#187; ORWPCE ASK ENCOUNTER UPDATE<br/>
# ORWPCE ASK ENCOUNTER UPDATE

When signing a note in the CPRS GUI, this parameter is used to determineunder what conditions to request the user enter encounter information.Note that encounter data is never required for inpatients.0 &#x3D; User is the Primary Encounter Provider, and Encounter Data is Needed1 &#x3D; User is the Primary Encounter Provider, and Patient is an Outpatient2 &#x3D; User is the Primary Encounter Provider3 &#x3D; Encounter Data is Needed4 &#x3D; Patient is an Outpatient5 &#x3D; Always6 &#x3D; Never7 &#x3D; Disable - Same as Never but disables the Encounter button

## Properties

Property | Value
--- | ---
Summary | Ask Encounter Update
Value Type | set of codes
Value Domain | 0:Primry/Data Needed;1:Primry/Outpt;2:Primry Always;3:Data Needed;4:Outpt;5:Always;6:Never;7:Disable
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