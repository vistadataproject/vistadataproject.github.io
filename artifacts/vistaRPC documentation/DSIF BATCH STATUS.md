---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; DSIF BATCH STATUS 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}DSIF BATCH STATUS{:/}
 tag | {::nomarkdown}STATBAT{:/}
 routine | [DSIFBAT3](http://code.osehra.org/dox/Routine_DSIFBAT3_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Used to return a list of a current batch out of Fee Basis. or -1^Batch not found,  Quitting{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}BATCH{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}99{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Pass in Batch number not IEN.  Output:   (all dates in formatted FM date;External date FBOUT(0)=1 or -1^error message FBOUT(1)=Batch #^Obligation #^Type^Date opened^Clerk (Ien;name)            ^Date Supervisor closed FBOUT(2)=^Total $^Payment line count^Date finalized^Date Clerk           Closed^Date Transmitted^Person who completed(IEN;name)^Status FBOUT(3)=Station#^CNH batch(Y/N)^Batch exempt(Y/N)^Statistical Batch(Y/N){:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 19th 2017, 9:28:51 am</p>{:/}