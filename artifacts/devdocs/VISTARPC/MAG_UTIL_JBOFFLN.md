---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; MAG UTIL JBOFFLN<br/>
# MAG UTIL JBOFFLN

Track Offline JukeBox images | Take Image files Offline This Remote Prcedure will add the new entry in MAGQUEUE(2006.033).The platter volume name will be used to index with IMAGE file IEN.

## Properties

Property | Value
--- | ---
Label | LINE
Routine | [MAGSDOFL](http://code.osehra.org/dox/Routine_MAGSDOFL_source.html)
Return Type | ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
TXTLine | LITERAL | 256 | true | Text line in Offline Platter report.TXT
PLATTER | LITERAL | 256 | true | JUKEOX PLATTER NAME(LABEL)



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}