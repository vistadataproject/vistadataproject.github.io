---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; DSIV DDR FINDER<br/>
# DSIV DDR FINDER

Call FIND^DIC to get a list of matches on the file for the input value

## Properties

Property | Value
--- | ---
Label | FIND
Routine | [DSIVDDR0](http://code.osehra.org/dox/Routine_DSIVDDR0_source.html)
Return Type | GLOBAL ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
FILE | LITERAL | 20 | true | This is the number of the file in which you wish to search.
IENS | LITERAL | 30 | true | This is the IENS through which you wish to search for the value VALUE. If you are searching the top level of a file, this should be null. See the FileMan Programmer&#x27;s Manual for instructions on constructing IENS strings.
FIELD | LITERAL | 250 | true |  This is an ^ (or &quot;;&quot;) delimited list of fields that you wish returned from each entry that matches the lookup conditions that you have specified.
NUMBER | LITERAL | 5 | true | This is the maximum number of entries to be returned. Defaults to all entries matching the lookup value VALUE.
INDEX | LITERAL | 50 | true | If you wish to do the lookup on specific indexes, then enter that here. The index string must be compliant with the FileMan documentation.
VALUE | LITERAL | 100 | true | Enter a value that will be used by FileMan for the lookup. This call does not support the .VALUE syntax allowed by FIND^DIC.
SCREEN | LITERAL | 250 | true | If you wish to use the DIC(&quot;S&quot;) equivalent then enter it here.
FLAGS | LITERAL | 20 | true | This is the FileMan FLAGS parameter used in the FILE^DIC API.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}