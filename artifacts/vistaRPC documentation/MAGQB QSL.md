---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; MAGQB QSL 

 property | value 
--- | --- 
 label | {::nomarkdown}MAGQB QSL{:/}
 tag | {::nomarkdown}BPQSL{:/}
 routine | [MAGQBUT1](http://code.osehra.org/dox/Routine_MAGQBUT1_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}This procedure call sets the queue file last process queue to the inputparameter.  This is used by the Queue Manager reset the queue method.{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}QUEUE TYPE{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}256{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This defines the queue type to be reset.{:/} | 
| {::nomarkdown}IEN{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}256{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This is the QUEUE file (#2006.03) internal entry number.{:/} | 




 Generated on January 13th 2017, 6:55:29 am