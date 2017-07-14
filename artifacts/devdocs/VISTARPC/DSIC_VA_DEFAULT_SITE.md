---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; DSIC VA DEFAULT SITE<br/>
# DSIC VA DEFAULT SITE

This will return the name and station number for a medical center division.  Optional input parameters are allowed.  However, if not passed then return the data for the primary division (or institution) as of TODAY.

## Properties

Property | Value
--- | ---
Label | SITE
Routine | [DSICVA](http://code.osehra.org/dox/Routine_DSICVA_source.html)
Return Type | SINGLE VALUE


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
DIV | LITERAL | 6 | true | This is a pointer to the medical center division file (#40.8).  If it is not passed then return data for the primary division as of that date.
DATE | LITERAL | 7 | true | This optional Fileman date only will be used to return division data of of that date.  Default value if not passed is TODAY.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}