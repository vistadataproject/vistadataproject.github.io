---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWTPD1 PUTCSRNG 

 property | value 
--- | --- 
 label | {::nomarkdown}ORWTPD1 PUTCSRNG{:/}
 tag | {::nomarkdown}PUTCSRNG{:/}
 routine | [ORWTPD1](http://code.osehra.org/dox/Routine_ORWTPD1_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | 


### Method description

 property | value 
 --- | --- 
 Method comment | Save user's Cover Sheet data range defaults.
 Input Parameters | {::nomarkdown}INFO{:/}
 Lines | ```{::nomarkdown} N ORINPT,OROUTPT,ORSTART,ORSTOP,ORUSER<br/> S OK=1,ORUSER=DUZ<br/> S ORSTART=+$P(INFO,U,3) S:ORSTART>999 ORSTART=999 S ORSTART=$S(ORSTART=0:"T",ORSTART<0:"T"_ORSTART,1:"T+"_ORSTART)<br/> S ORSTOP=+$P(INFO,U,4) S:ORSTOP>999 ORSTART=999 S ORSTOP=$S(ORSTOP=0:"T",ORSTOP<0:"T"_ORSTOP,1:"T+"_ORSTOP)<br/> S ORINPT=+$P(INFO,U,1),ORINPT=$S('ORINPT:"@",1:ORINPT)<br/> S OROUTPT=+$P(INFO,U,2),OROUTPT=$S('OROUTPT:"@",1:OROUTPT)<br/> D EN^XPAR(ORUSER_";VA(200,","ORQQCSDR CS RANGE START",1,ORSTART)<br/> D EN^XPAR(ORUSER_";VA(200,","ORQQCSDR CS RANGE STOP",1,ORSTOP)<br/> D EN^XPAR(ORUSER_";VA(200,","ORQQLR DATE RANGE INPT",1,ORINPT)<br/> D EN^XPAR(ORUSER_";VA(200,","ORQQLR DATE RANGE OUTPT",1,OROUTPT)```{:/}




 Generated on January 13th 2017, 7:11:27 am