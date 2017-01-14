---
layout: default
title: VISTA RPC documentation
---



# [RPCs](TableOfContent.md) &#8594; KMPD TMG MON DATA 


 ## VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}KMPD TMG MON DATA{:/}
 tag | {::nomarkdown}TMGMON{:/}
 routine | [KMPDU7](http://code.osehra.org/dox/Routine_KMPDU7_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Return Timing Monitor data.{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}MONITOR START TIME{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}25{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Time the Timing Monitor started, in internal fileman format. This will be used to determine the Running Time (how long the system monitor has been running for this user. If not defined then $$NOW^XLFDT will be used.{:/} | {::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 14th 2017, 7:36:25 am</p>{:/}