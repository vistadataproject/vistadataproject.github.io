---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; RMPR VIEW REQ 

 property | value 
--- | --- 
 label | RMPR VIEW REQ
 tag | EN
 routine | [RMPR9VR](http://code.osehra.org/dox/Routine_RMPR9VR_source.html)
 return value type | ARRAY
 description | This procedure supplies the View Request screen of file 668. Entry Point:   EN(RESULTS,RMPRA)^RMPR9VR RESULTS(0)= Order date/Suspense dateRESULTS(1)= RequestorRESULTS(2)= Suspended byRESULTS(3)= Initial Action DateRESULTS(4)= Completion Date

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | IEN | LITERAL | 150 | true |  | 