---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; DSIV USER DEF DIV<br/>
# DSIV USER DEF DIV

This will return the default division for a user.  If no default isindicated in the DIVISION multiple, then the return value will be:   1. if the user has only one division, and that division is not     explicitly marked as NO for default division, then return that     division  2. else, if the SITE parameter is passed with a value of 1, then     return the default value for the facility.

## Properties

Property | Value
--- | ---
Label | DIV
MUMPS Implementation | [DSIVDUZ](http://code.osehra.org/dox/Routine_DSIVDUZ_source.html)
Return Type | SINGLE VALUE


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
XDUZ | LITERAL | 20 | true | This is the pointer to file 200 for the user for which to return thedefault division.  The default value is DUZ
SITE | LITERAL | 1 | true | This boolean flag (1 or 0) will be used if the user has no defaultdivision specified in the DIVISION multiple in file 200.  If no defaultdivision, then return the value from $$SITE^VASITE.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}