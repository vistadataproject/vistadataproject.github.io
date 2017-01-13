---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; TIU ID DETACH ENTRY 

 property | value 
--- | --- 
 label | {::nomarkdown}TIU ID DETACH ENTRY{:/}
 tag | {::nomarkdown}IDDTCH{:/}
 routine | [TIUSRVP1](http://code.osehra.org/dox/Routine_TIUSRVP1_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}This call will remove an ID Entry from an Interdisciplinary Note.{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | Detach TIUDA from its ID Parent
 Input Parameters | {::nomarkdown}TIUDA{:/}
 Lines | ```
 N TIUX,IDDAD
 I '+$G(^TIU(8925,TIUDA,21)) D  Q
 . S TIUY="0^Record #"_TIUDA_" is NOT an ID Entry."
 S IDDAD=+$G(^TIU(8925,TIUDA,21))
 S TIUX(2101)="@"
 D FILE^TIUSRVP(.TIUY,TIUDA,.TIUX,1)
 D AUDLINK^TIUGR1(TIUDA,"d",IDDAD)
 D IDDEL^TIUALRT1(TIUDA)```

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}TIUDA{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}This is the internal entry number of the ID Entry which is to be removedfrom the ID Note.{:/} | 




 Generated on January 13th 2017, 6:55:29 am