---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; DSIF ICD LEX SEARCH<br/>
# DSIF ICD LEX SEARCH

This RPC returns the ICD-10-CM category and code results of a searchbased upon a description or code value. The return is designed for displayin a tree view control.

## Properties

Property | Value
--- | ---
Label | LEXSRCH
Routine | [DSIFICD](http://code.osehra.org/dox/Routine_DSIFICD_source.html)
Return Type | GLOBAL ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
DSIFVAL | LITERAL |  | true | This is the description or code you wish to search for, with a 2 character minimum. This input is required.
DSIFDT | LITERAL |  |  | This is the date you wish to check for codes. This input is not required, but if not passed in it defaults to today.
DSIFLL | LITERAL |  |  | This is the maximum length of the list you wish to be returned. The default value is 30 if nothing is passed in.
DSIFF | LITERAL |  |  | This is the Coding System View you wish to retrieve, the default is 10D (ICD-10-CM) if nothing is passed in.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}