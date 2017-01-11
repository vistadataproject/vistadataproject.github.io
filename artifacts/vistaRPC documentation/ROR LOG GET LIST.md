---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; ROR LOG GET LIST 

 property | value 
--- | --- 
 label | ROR LOG GET LIST
 tag | LOGLIST
 routine | [RORRP007](http://code.osehra.org/dox/Routine_RORRP007_source.html)
 return value type | GLOBAL ARRAY
 description | The ROR LOG GET LIST remote procedure returns a list of logs associated with the registry in the provided time frame.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| REGIEN | LITERAL |  | true | The REGIEN parameter should contain a valid registry IEN (IEN of theregistry parameters record in the ROR REGISTRY PARAMETERS file #798.1).The output list will contain log activities associated with the registrydefined by this parameter. | 
| STDT | LITERAL |  |  | The STDT parameter defines the start date for the search of the log activities. By default (if $G(STDT)'>0), the search starts from the earliest record of the ROR LOG file. | 
| ENDT | LITERAL |  |  | The ENDT parameter defines the end date for the search of the logactivities. By default (if $G(ENDT)'>0), the search continues to the lastrecord of the ROR LOG file. | 