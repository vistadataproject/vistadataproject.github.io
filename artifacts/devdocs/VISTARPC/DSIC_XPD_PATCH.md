---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; DSIC XPD PATCH
# DSIC XPD PATCH

This invokes the Kernel API to determine if a patch has been installed or not.  As such, it requires that the application has an associated PACKAGE file entry.  This will not work for VEJD applications, but will work forDSI applications.

Property | Value
--- | ---
Label | PATCH
Routine | [DSICXPDU](http://code.osehra.org/dox/Routine_DSICXPDU_source.html)
Return Type | SINGLE VALUE


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
PKG | LITERAL | 50 | true | This is the name of the patch, e.g., LR*5.2*98.  This invokes the Kernel API.  As such it expects a PACKAGE file entry whose PREFIX field value is equal to the first &#x27;*&#x27; piece of the inputted patch name (e.g, LR).  This will work for DSI applications, but not for VEJD.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}