---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DVBA CAPRI GETCONTREMARKS 

 property | value 
--- | --- 
 label | DVBA CAPRI GETCONTREMARKS
 tag | WPGET
 routine | [DVBACREM](http://code.osehra.org/dox/Routine_DVBACREM_source.html)
 return value type | ARRAY
 description | This gets the remarks sent to the contractor concerning the 2507 REQUEST in file 396.3. The remarks are stored in the word processing field #103 ofthe 2507 EXAM file 396.4.

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | DVBEIEN | LITERAL |  | true | This is the Exam Ien to get the comments from | 