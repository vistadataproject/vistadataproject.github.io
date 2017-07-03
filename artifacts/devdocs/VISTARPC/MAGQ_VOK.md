---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; MAGQ VOK
# MAGQ VOK

This procedure checks the 2nd line of the routine MAGQBUT4 forthe latest version number.  It will return 1 if the versionmatches the input "version" parameter and 0 if there is nomatch.

Property | Value
--- | ---
Label | VOKR
Routine | [MAGQBUT4](http://code.osehra.org/dox/Routine_MAGQBUT4_source.html)
Return Type | SINGLE VALUE


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
Version | LITERAL |  | true | This version number is expect to be the VistA Imaging major release number (x.x)concatenated with P and then concatenated with the patch number.For example 3.0P81



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}