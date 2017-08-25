---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; DSIF CNSLTS LEXCODE<br/>
# DSIF CNSLTS LEXCODE

Returns the Lexicon code for a given IEN.

## Properties

Property | Value
--- | ---
Label | LEXCODE
MUMPS Implementation | [DSIFCNS1](http://code.osehra.org/dox/Routine_DSIFCNS1_source.html)
Return Type | SINGLE VALUE


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
DSIFIEN | LITERAL |  | true | This is the Lexicon IEN you wish to know the code for.
DSIFAPP | LITERAL |  |  | This is the Lexicon application for which you are looking. I.e. ICD or CPT.
DSIFDT | LITERAL |  | true | This is the date you wish to look for the code; if you pass in nothing it assumes the current date.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}