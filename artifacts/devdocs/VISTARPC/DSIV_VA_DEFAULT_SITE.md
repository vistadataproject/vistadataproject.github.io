---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; DSIV VA DEFAULT SITE<br/>
# DSIV VA DEFAULT SITE

This will return the name and station number for a medical centerdivision.  Optional input parameters are allowed.  However, if not passedthen return the data for the primary division (or institution) as ofTODAY.

## Properties

Property | Value
--- | ---
Label | SITE
Routine | [DSIVVA](http://code.osehra.org/dox/Routine_DSIVVA_source.html)
Return Type | SINGLE VALUE


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
DIV | LITERAL | 6 | true | This is a pointer to the medical center division file (#40.8).  If it isnot passed then return data for the primary division as of that date.
DATE | LITERAL | 7 | true | This optional Fileman date only will be used to return division data ofthat date.  Default value if not passed is TODAY.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}