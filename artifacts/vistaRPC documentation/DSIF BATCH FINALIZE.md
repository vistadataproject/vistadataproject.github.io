---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DSIF BATCH FINALIZE 

 property | value 
--- | --- 
 label | DSIF BATCH FINALIZE
 tag | FINALIZE
 routine | [DSIFBAT5](http://code.osehra.org/dox/Routine_DSIFBAT5_source.html)
 return value type | ARRAY
 description | 

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| BATCH IEN | LITERAL | 15 | true |  | 
| REJECT LINES | LIST | 80 | true | B3 Batches: REJL(line)=Pmt ID^Invoice^reject reason (2-40 characters) B9 Batches: REJL(1)=Invoice^reject reason (2-40 characters)] PMT ID = Patient IEN;Vendor IEN;Date of Serice IEN;Service provided IEN | 
| REJECT ALL | LITERAL | 1 | true | 1 (yes) 0 (no) | 