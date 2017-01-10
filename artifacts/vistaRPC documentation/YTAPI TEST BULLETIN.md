---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; YTAPI TEST BULLETIN 

 property | value 
--- | --- 
 label | YTAPI TEST BULLETIN
 tag | SNDBUL
 routine | [YTAPI9](http://code.osehra.org/dox/Routine_YTAPI9_source.html)
 return value type | ARRAY
 description | When a clerk gives a psychological test by order of a clinician, a VISTA email bulletin is sent to that clinician, informing him/her of the administration of the test, the date, the clerk and the patient. Input: DFN ;ien of file 2 Patient       YSORD ;DUZ of ordering clinician Output:only success vs. error is reported.YSDATA(1)=[DATA]