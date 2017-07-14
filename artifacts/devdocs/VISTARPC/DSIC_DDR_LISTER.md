---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; DSIC DDR LISTER<br/>
# DSIC DDR LISTER

This calls the Fileman lister, LIST^DIC to get a list of records matching the input value

## Properties

Property | Value
--- | ---
Label | LIST
Routine | [DSICDDR0](http://code.osehra.org/dox/Routine_DSICDDR0_source.html)
Return Type | GLOBAL ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
FILE | LITERAL | 20 | true | This is the file number of the file that will be searched
IENS | LITERAL | 30 | true | This is the standard Fileman IENS string when doing a search/lookup on a multiple in a file.
FIELD | LITERAL | 250 | true | &#x27;;&#x27; delimited list of fields requested for each record
FLAGS | LITERAL | 15 | true | This is the FLAGS parameter for the LIST^DIC api
NUMBER | LITERAL | 4 | true | Enter the maximum number of matching records you wish to retrieve.
FROM | LITERAL | 50 | true | Enter the string that will be the starting value to use when transversing the indexes looking for a match.
PARTIAL | LITERAL | 50 | true | This is the PARTIAL parameter in the LIST^DIC call.
INDEX | LITERAL | 50 | true | Enter the string of index names (separated by &#x27;^&#x27;) which the search willtransverse
SCREEN | LITERAL | 250 | true | If you wish to screen entries, then enter that executable M code.  This is the same as DIC(&quot;S&quot;)
IDENTIFY | LITERAL | 50 | true | This is the IDENTIFIER parameter in LIST^DIC call



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}