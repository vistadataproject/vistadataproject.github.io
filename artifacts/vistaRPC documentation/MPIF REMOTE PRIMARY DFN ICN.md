---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; MPIF REMOTE PRIMARY DFN ICN 

 property | value 
--- | --- 
 label | MPIF REMOTE PRIMARY DFN ICN
 tag | PRIMARY
 routine | [MPIFRPC3](http://code.osehra.org/dox/Routine_MPIFRPC3_source.html)
 return value type | SINGLE VALUE
 description | This remote procedure call will return the primary DFN and ICN fora particular station and DFN.

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | SITE | LITERAL | 10 | true |  This is the site's station number ... a legacy station number can be passed. | 
| vs:Input_Parameter-8994_02 | DFN | LITERAL | 20 | true | This is a patient's internal IEN in the PATIENT file (#2).A legacy IEN can be passed along with a legacy station number. | 