---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; YTAPI PRIVLEGE
# YTAPI PRIVLEGE

Returns user privlege to see psych test results. Input: YSCODE ;code of test or interview to check privelges forOutput:YSDATA(1)=[DATA]YSDATA(2)=1^user privileged for all tests        orYSDATA(2)=1^exempt test"        orYSDATA(2)=1^interview        orYSDATA(2)=1^exempt test        orYSDATA(2)=0^no access

Property | Value
--- | ---
Label | PRIVL
Routine | [YTAPI5](http://code.osehra.org/dox/Routine_YTAPI5_source.html)
Return Type | ARRAY




{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}