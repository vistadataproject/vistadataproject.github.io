---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; YTAPI PRIVLEGE<br/>
# YTAPI PRIVLEGE

Returns user privlege to see psych test results. Input: YSCODE ;code of test or interview to check privelges forOutput:YSDATA(1)=[DATA]YSDATA(2)=1^user privileged for all tests        orYSDATA(2)=1^exempt test"        orYSDATA(2)=1^interview        orYSDATA(2)=1^exempt test        orYSDATA(2)=0^no access

## Properties

Property | Value
--- | ---
Label | PRIVL
MUMPS Implementation | [YTAPI5](http://code.osehra.org/dox/Routine_YTAPI5_source.html)
Return Type | ARRAY




{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}