---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DSIF BATCH STATUS 

 property | value 
--- | --- 
 label | DSIF BATCH STATUS
 tag | STATBAT
 routine | [DSIFBAT3](http://code.osehra.org/dox/Routine_DSIFBAT3_source.html)
 return value type | ARRAY
 description | Used to return a list of a current batch out of Fee Basis. or -1^Batch not found,  Quitting

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| BATCH | LITERAL | 99 | true | Pass in Batch number not IEN.  Output:   (all dates in formatted FM date;External date FBOUT(0)=1 or -1^error message FBOUT(1)=Batch #^Obligation #^Type^Date opened^Clerk (Ien;name)            ^Date Supervisor closed FBOUT(2)=^Total $^Payment line count^Date finalized^Date Clerk           Closed^Date Transmitted^Person who completed(IEN;name)^Status FBOUT(3)=Station#^CNH batch(Y/N)^Batch exempt(Y/N)^Statistical Batch(Y/N) | 




 ###### Generated on January 11th 2017, 6:39:43 am