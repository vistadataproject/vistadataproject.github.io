---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; DSIF INP ENTITLEMENTS<br/>
# DSIF INP ENTITLEMENTS

This RPC enters the Legal and Medical Entitlements in prep for the creation of the 7078.

## Properties

Property | Value
--- | ---
Label | ENTS
Routine | [DSIFNOT3](http://code.osehra.org/dox/Routine_DSIFNOT3_source.html)
Return Type | SINGLE VALUE


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
DFN | LITERAL | 99 | true | Patient File Pointer (File #2, Required)
IEN | LITERAL | 99 | true | Internal Entry Number for File 162.2 FEE NOTIFICATION/REQUEST (Required)
LEME | LITERAL | 3 | true | Legal, Medical Indicators (Multi-Piece Legal Entitlement;Medical Entitlement 1&#x3D;Yes, 0&#x3D;No) If Legal is 0 Medical is forced to be 0 and Suspense code should be entered. If Legal is 1 Medical can be 0 or 1
SUSP | LITERAL | 99 | true | Suspense Code (Pointer to file 161.27, Required if Legal or Medical is 0)
SDESC | LIST | 80 | true | Suspense Description (WP Array MUST START WITH 1. Only used if Suspense Code &#x3D; 4 [Other]) To delete the existing description, (only if the user wants it deleted) pass SUSD(1)&#x3D;&quot;@&quot;



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}