---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; YTAPI SHOWIT<br/>
# YTAPI SHOWIT

This API returns the text, bottom, introduction and possible correct responses for a specified test item in file 601. It will work only for tests as opposed to interviews or batteries. The ASI is not supported. Input:                 CODE: Test code from file 601 e.g. "CAGE", "BDI"ITEM: a positive whole number between 1 and the highest item number for the specified test. Output:Array(1)=[DATA] ;indicates successful  callArray(2)=MMPI2^1 ;SECOND LINE IS TEST Code^ item numberArray(item number,"I",line number)=introductory textArray(item number,"T", line number)=text of questionArray(item number,"R",0)=allowed responsesArray(item number,"R",line number)= response cues

## Properties

Property | Value
--- | ---
Label | SHOWIT
Routine | [YTAPI3](http://code.osehra.org/dox/Routine_YTAPI3_source.html)
Return Type | ARRAY




{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}