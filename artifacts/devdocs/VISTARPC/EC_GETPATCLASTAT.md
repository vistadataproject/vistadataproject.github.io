---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; EC GETPATCLASTAT
# EC GETPATCLASTAT

Returns a patient in/out status and classification. Classifications are:Agent Orange, Ionizing Radiation, SC Condition, Environmental Contaminants andMilitary Sexual Trauma.

Property | Value
--- | ---
Label | PATCLAST
Routine | [ECUERPC1](http://code.osehra.org/dox/Routine_ECUERPC1_source.html)
Return Type | SINGLE VALUE


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
ECARY | LITERAL |  | true | Input variable ECARY contains the following values separated by up-arrow.  1. ECDFN - Patient ien (#2)  2. ECD   - DSS Unit ien (#724)  3. ECDT  - Procedure date and time (fileman format)



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}