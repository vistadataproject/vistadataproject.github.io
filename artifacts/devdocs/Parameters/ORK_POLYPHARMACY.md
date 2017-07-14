---
layout: default
title: Parameters
---

#### [Developer Documentation](../index) &#187; [Parameters](TableOfContents) &#187; ORK POLYPHARMACY<br/>
# ORK POLYPHARMACY

The number of medications used to determine polypharmacy.  If the patientis taking more than the number of meds indicated by this parameter&#x27;svalue, polypharmacy exists.  This parameter is used by the order checkPolypharmacy.  This parameter accepts values from 0 to 100. 

## Properties

Property | Value
--- | ---
Summary | Number of Polypharmacy Medications
Value Type | numeric
Value Domain | 0:100:0
Multiple Instances | false

## Allowable Entities

Precedence | Entity
--- | ---
1 | LOCATION
2 | DIVISION
3 | SYSTEM
4 | PACKAGE

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:29 pm</p>{:/}