---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; VEJD TPA GET KIDS STATUS
# VEJD TPA GET KIDS STATUS

This does a Fileman lookup on the INSTALL file and returns the last entryfor the value passed.

Property | Value
--- | ---
Label | KID
Routine | [VEJDTP01](http://code.osehra.org/dox/Routine_VEJDTP01_source.html)
Return Type | ARRAY


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
VAL | LITERAL | 50 | true | Enter the name of the KIDS build for which you which to see itsinstallation state.  Pass the name of the KIDS build as it appears in theINSTALL file.  You may pass a partial name, but this call will only returnthe data on the last entry installed



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}