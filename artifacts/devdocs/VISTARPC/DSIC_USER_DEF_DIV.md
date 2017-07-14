---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; DSIC USER DEF DIV<br/>
# DSIC USER DEF DIV

This will return the default division for a user.  If no default is indicated in the DIVISION multiple, then the return value will be:   1. if the user has only one division, and that division is not     explicitly marked as NO for default division, then return that     division  2. else, if the SITE parameter is passed with a value of 1, then     return the default value for the facility.

## Properties

Property | Value
--- | ---
Label | DIV
Routine | [DSICDUZ](http://code.osehra.org/dox/Routine_DSICDUZ_source.html)
Return Type | SINGLE VALUE


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
XDUZ | LITERAL | 20 | true | This is the pointer to file 200 for the user for which to return the default division.  The default value is DUZ
SITE | LITERAL | 1 | true | This boolean flag (1 or 0) will be used if the user has no default division specified in the DIVISION multiple in file 200.  If no default division, then return the value from $$SITE^VASITE.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}