---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; DSIF CNSLTS LEX
# DSIF CNSLTS LEX

This RPC performs a Lexicon search based upon what is passed in. Cloned from LEX^ORWPCE

Property | Value
--- | ---
Label | LEX
Routine | [DSIFCNS1](http://code.osehra.org/dox/Routine_DSIFCNS1_source.html)
Return Type | ARRAY


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
DSIFVAL | LITERAL |  | true | This is the text or code you wish to search Lexicon for.
DSIFAPP | LITERAL |  | true | This is the type of search you want to perform: CPT or ICD. Null searches all of Lexicon
DSIFDT | LITERAL |  | true | This is the date you want to do the Lexicon search for. If nothing is passed, it uses the current date.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}