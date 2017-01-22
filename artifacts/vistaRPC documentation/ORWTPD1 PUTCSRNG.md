---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWTPD1 PUTCSRNG 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWTPD1 PUTCSRNG{:/}
 tag | {::nomarkdown}PUTCSRNG{:/}
 routine | [ORWTPD1](http://code.osehra.org/dox/Routine_ORWTPD1_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | 


### MUMPS Method description

 Property | Value 
 --- | --- 
 Method | PUTCSRNG^[ORWTPD1](http://code.osehra.org/dox/Routine_ORWTPD1_source.html)
 Method comment | Save user's Cover Sheet data range defaults.
 Input parameters | {::nomarkdown}INFO{:/}
 Code | {::nomarkdown}  N ORINPT,OROUTPT,ORSTART,ORSTOP,ORUSER<br> S OK=1,ORUSER=DUZ<br> S ORSTART=+$P(INFO,U,3) S:ORSTART>999 ORSTART=999 S ORSTART=$S(ORSTART=0:"T",ORSTART<0:"T"_ORSTART,1:"T+"_ORSTART)<br> S ORSTOP=+$P(INFO,U,4) S:ORSTOP>999 ORSTART=999 S ORSTOP=$S(ORSTOP=0:"T",ORSTOP<0:"T"_ORSTOP,1:"T+"_ORSTOP)<br> S ORINPT=+$P(INFO,U,1),ORINPT=$S('ORINPT:"@",1:ORINPT)<br> S OROUTPT=+$P(INFO,U,2),OROUTPT=$S('OROUTPT:"@",1:OROUTPT)<br> D EN^XPAR(ORUSER_";VA(200,","ORQQCSDR CS RANGE START",1,ORSTART)<br> D EN^XPAR(ORUSER_";VA(200,","ORQQCSDR CS RANGE STOP",1,ORSTOP)<br> D EN^XPAR(ORUSER_";VA(200,","ORQQLR DATE RANGE INPT",1,ORINPT)<br> D EN^XPAR(ORUSER_";VA(200,","ORQQLR DATE RANGE OUTPT",1,OROUTPT){:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code | {::nomarkdown} <a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Options/rOptions.pas">Options/rOptions.pas</a><br/>{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 22nd 2017, 3:10:56 am</p>{:/}