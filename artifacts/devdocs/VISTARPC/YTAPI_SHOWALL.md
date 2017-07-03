---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; YTAPI SHOWALL
# YTAPI SHOWALL

This API returns the text, bottom, introduction and possible correct responses for all items in a test in file 601. It will work only for tests as opposed to interviews or batteries. The ASI is not supported. Input:                 CODE: Test code from file 601 e.g. "CAGE", "BDI" Output:Array(1)=[DATA] ;indicates successful  callArray(2)=MMPI2 ;SECOND LINE IS TEST CodeArray(item number,"I",line number)=introductory textArray(item number,"T", line number)=text of questionArray(item number,"R",0)=allowed responsesArray(item number,"R",line number)= response cues

Property | Value
--- | ---
Label | SHOWALL
Routine | [YTAPI3](http://code.osehra.org/dox/Routine_YTAPI3_source.html)
Return Type | ARRAY




{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}