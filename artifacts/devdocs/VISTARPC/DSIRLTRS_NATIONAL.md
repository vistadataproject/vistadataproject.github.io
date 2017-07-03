---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; DSIRLTRS NATIONAL
# DSIRLTRS NATIONAL

This RPC is a wrapper around DSIRLTRS UPDATE with the exception that it will update the national letters in file 19620.15 (DSIR NATIONAL LETTERS).  This RPC should not be used at the site but is for DSS Inc. to apply updates to the national letters as requested/instructed by the VA Privacy Office.

Property | Value
--- | ---
Label | NATIONAL
Routine | [DSIRLTRS](http://code.osehra.org/dox/Routine_DSIRLTRS_source.html)
Return Type | SINGLE VALUE


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
IFN | LITERAL | 99 | true | Internal Entry Number of the Letter or Null if new.
DATA1 | LIST | 245 | true | Array that contains the Letter Data   Main Record &#x3D;&gt; M ^ Name ^ National/Local Flag (0 &#x3D; Local, 1 &#x3D; National)^ Signature Block (C,F,S) ^ ID Clerk by Name (0 &#x3D; No, 1 &#x3D; Yes) ^ Addressto Patient (0 &#x3D; No, 1 &#x3D; Yes)   Paragraph Header &#x3D;&gt; PH ^ Name ^ Read Only (0 &#x3D; No, 1 &#x3D; Yes) [This nodeoccurs multiple times for each M entry]   Paragraph Text &#x3D;&gt; Text [This node occurs multiple times for each PHentry]



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}