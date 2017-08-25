---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; YTAPI SHOWALL<br/>
# YTAPI SHOWALL

This API returns the text, bottom, introduction and possible correct responses for all items in a test in file 601. It will work only for tests as opposed to interviews or batteries. The ASI is not supported. Input:                 CODE: Test code from file 601 e.g. "CAGE", "BDI" Output:Array(1)=[DATA] ;indicates successful  callArray(2)=MMPI2 ;SECOND LINE IS TEST CodeArray(item number,"I",line number)=introductory textArray(item number,"T", line number)=text of questionArray(item number,"R",0)=allowed responsesArray(item number,"R",line number)= response cues

## Properties

Property | Value
--- | ---
Label | SHOWALL
MUMPS Implementation | [YTAPI3](http://code.osehra.org/dox/Routine_YTAPI3_source.html)
Return Type | ARRAY




{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}