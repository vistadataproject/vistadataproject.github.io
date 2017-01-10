---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; MAG UTIL JBOFFLN 

 property | value 
--- | --- 
 label | MAG UTIL JBOFFLN
 tag | LINE
 routine | [MAGSDOFL](http://code.osehra.org/dox/Routine_MAGSDOFL_source.html)
 return value type | ARRAY
 description | Track Offline JukeBox images | Take Image files Offline This Remote Prcedure will add the new entry in MAGQUEUE(2006.033).The platter volume name will be used to index with IMAGE file IEN.

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | TXTLine | LITERAL | 256 | true | Text line in Offline Platter report.TXT | 
| vs:Input_Parameter-8994_02 | PLATTER | LITERAL | 256 | true | JUKEOX PLATTER NAME(LABEL) | 