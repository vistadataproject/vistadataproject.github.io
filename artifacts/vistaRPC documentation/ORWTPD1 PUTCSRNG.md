---
layout: default
title: VISTA RPC documentation
---



# [RPCs](TableOfContent.md) &#8594; ORWTPD1 PUTCSRNG 


 ## VISTA File 8994
 property | value 
--- | --- 
 label | {::nomarkdown}ORWTPD1 PUTCSRNG{:/}
 tag | {::nomarkdown}PUTCSRNG{:/}
 routine | [ORWTPD1](http://code.osehra.org/dox/Routine_ORWTPD1_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | 


## MUMPS Method description

 property | value 
 --- | --- 
 Method | PUTCSRNG^[ORWTPD1](http://code.osehra.org/dox/Routine_ORWTPD1_source.html)
 Method comment | Save user's Cover Sheet data range defaults.
 Input parameters | {::nomarkdown}INFO{:/}
 Code | ```  N ORINPT,OROUTPT,ORSTART,ORSTOP,ORUSER
 S OK=1,ORUSER=DUZ
 S ORSTART=+$P(INFO,U,3) S:ORSTART>999 ORSTART=999 S ORSTART=$S(ORSTART=0:"T",ORSTART<0:"T"_ORSTART,1:"T+"_ORSTART)
 S ORSTOP=+$P(INFO,U,4) S:ORSTOP>999 ORSTART=999 S ORSTOP=$S(ORSTOP=0:"T",ORSTOP<0:"T"_ORSTOP,1:"T+"_ORSTOP)
 S ORINPT=+$P(INFO,U,1),ORINPT=$S('ORINPT:"@",1:ORINPT)
 S OROUTPT=+$P(INFO,U,2),OROUTPT=$S('OROUTPT:"@",1:OROUTPT)
 D EN^XPAR(ORUSER_";VA(200,","ORQQCSDR CS RANGE START",1,ORSTART)
 D EN^XPAR(ORUSER_";VA(200,","ORQQCSDR CS RANGE STOP",1,ORSTOP)
 D EN^XPAR(ORUSER_";VA(200,","ORQQLR DATE RANGE INPT",1,ORINPT)
 D EN^XPAR(ORUSER_";VA(200,","ORQQLR DATE RANGE OUTPT",1,OROUTPT)```




 Generated on January 14th 2017, 7:26:36 am