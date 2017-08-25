---
layout: default
title: Parameters
---

#### [Developer Documentation](../index) &#187; [Parameters](TableOfContents) &#187; ORCH CONTEXT MEDS<br/>
# ORCH CONTEXT MEDS

Specifies a date range (in days) for Meds tab display that dictates the length of time orders are displayed.  The parameter provides strings of delimited (&quot;; ) pieces, the first two of which are always a relative date range.  Users can determine the date range of medications that display on the Medications tab through the Tools/Options pull-down menu in CPRS. This parameter functions independently of display settings for the Orders tab.  If you need to alter the display range for expired medication orders on the Orders tab, please adjust the ORWOR EXPIRED ORDERS parameter accordingly.

## Properties

Property | Value
--- | ---
Summary | Meds Tab Context
Value Type | free text
Value Domain | 
Multiple Instances | false

## Allowable Entities

Precedence | Entity
--- | ---
1 | USER
5 | SYSTEM
9 | PACKAGE

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:40 pm</p>{:/}