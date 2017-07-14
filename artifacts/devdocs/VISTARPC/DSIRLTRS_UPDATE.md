---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; DSIRLTRS UPDATE<br/>
# DSIRLTRS UPDATE

This RPC will add/update letters in file 19620.16 (DSIR LOCAL LETTERS).

## Properties

Property | Value
--- | ---
Label | UPDATE
Routine | [DSIRLTRS](http://code.osehra.org/dox/Routine_DSIRLTRS_source.html)
Return Type | SINGLE VALUE


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
IEN | LITERAL | 99 | true | Internal Entry Number of the Letter or Null if new.
DATA | LIST | 245 | true | Array that contains the Letter Data       Main Record &#x3D;&gt; M ^ Name ^ National Letter Pointer ^ SignatureBlock (C,F,S) ^ ID Clerk by Name (0 &#x3D; No, 1 &#x3D; Yes) ^ Address to Patient (0&#x3D; No, 1 &#x3D; Yes)         Paragraph Header &#x3D;&gt; PH ^ Name ^ Read Only (0 &#x3D; No, 1 &#x3D; Yes) [Thisnode occurs multiple times for each M entry]         Paragraph Text &#x3D;&gt; Text [This node occurs multiple times for eachPH entry]



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}