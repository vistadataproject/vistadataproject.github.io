---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; DSIF CNSLTS LEX<br/>
# DSIF CNSLTS LEX

This RPC performs a Lexicon search based upon what is passed in. Cloned from LEX^ORWPCE

## Properties

Property | Value
--- | ---
Label | LEX
Routine | [DSIFCNS1](http://code.osehra.org/dox/Routine_DSIFCNS1_source.html)
Return Type | ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
DSIFVAL | LITERAL |  | true | This is the text or code you wish to search Lexicon for.
DSIFAPP | LITERAL |  | true | This is the type of search you want to perform: CPT or ICD. Null searches all of Lexicon
DSIFDT | LITERAL |  | true | This is the date you want to do the Lexicon search for. If nothing is passed, it uses the current date.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}