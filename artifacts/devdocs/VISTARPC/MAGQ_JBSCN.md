---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; MAGQ JBSCN<br/>
# MAGQ JBSCN

This function returns the next image file entry to be evaluated by theBP Verifier function.

## Properties

Property | Value
--- | ---
Label | CNP2
Routine | [MAGQBPG1](http://code.osehra.org/dox/Routine_MAGQBPG1_source.html)
Return Type | SINGLE VALUE


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
IEN | LITERAL | 256 | true | This value is the initial $Order value applied to the Image file.
START | LIST | 32 | true | This is the starting IEN for the BP Verifier session.
STOP | LITERAL | 32 | true | This is the ending IEN for the BP Verifier session.
AUTO | LITERAL | 1 | true | When set this will allow the BP Verifier session to terminate automatically.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}