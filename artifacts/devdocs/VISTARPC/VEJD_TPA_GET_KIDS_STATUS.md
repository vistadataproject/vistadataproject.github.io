---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; VEJD TPA GET KIDS STATUS<br/>
# VEJD TPA GET KIDS STATUS

This does a Fileman lookup on the INSTALL file and returns the last entryfor the value passed.

## Properties

Property | Value
--- | ---
Label | KID
Routine | [VEJDTP01](http://code.osehra.org/dox/Routine_VEJDTP01_source.html)
Return Type | ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
VAL | LITERAL | 50 | true | Enter the name of the KIDS build for which you which to see itsinstallation state.  Pass the name of the KIDS build as it appears in theINSTALL file.  You may pass a partial name, but this call will only returnthe data on the last entry installed



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}