---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; DSIC XPD PATCH<br/>
# DSIC XPD PATCH

This invokes the Kernel API to determine if a patch has been installed or not.  As such, it requires that the application has an associated PACKAGE file entry.  This will not work for VEJD applications, but will work forDSI applications.

## Properties

Property | Value
--- | ---
Label | PATCH
Routine | [DSICXPDU](http://code.osehra.org/dox/Routine_DSICXPDU_source.html)
Return Type | SINGLE VALUE


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
PKG | LITERAL | 50 | true | This is the name of the patch, e.g., LR*5.2*98.  This invokes the Kernel API.  As such it expects a PACKAGE file entry whose PREFIX field value is equal to the first &#x27;*&#x27; piece of the inputted patch name (e.g, LR).  This will work for DSI applications, but not for VEJD.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}