---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; MAGQ QRNGE 

 property | value 
--- | --- 
 label | MAGQ QRNGE
 tag | QRNGE
 routine | [MAGQBUT5](http://code.osehra.org/dox/Routine_MAGQBUT5_source.html)
 return value type | SINGLE VALUE
 description | This procedure is to either delete or re-queue a range of Vista ImagingBackground Processor queues.  The process parameter determines the action.

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | QUEUE | LITERAL | 15 | true | This determines the queue type that will be processed. | 
| vs:Input_Parameter-8994_02 | PROCESS | LITERAL | 15 | true | This determines whether the queue will be requeued or deleted.  Avalue of \DEL\ will designate a delete and a value of \REQ\ willdesignate a requeue. | 
| vs:Input_Parameter-8994_02 | START | LITERAL | 15 | true | This value will determine the start of the range of Queue file (#2006.03) entries that will be processed. | 
| vs:Input_Parameter-8994_02 | STOP | LITERAL | 15 | true | This will determine the last Queue file entry that will be processed. | 
| vs:Input_Parameter-8994_02 | PLACE | LITERAL | 15 | true | This value designates the Imaging site parameter entryfor which the queues to be processed are associated. | 