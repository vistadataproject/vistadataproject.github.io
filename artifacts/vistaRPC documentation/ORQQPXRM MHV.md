---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORQQPXRM MHV 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORQQPXRM MHV{:/}
 tag | {::nomarkdown}MHV{:/}
 routine | [ORQQPXRM](http://code.osehra.org/dox/Routine_ORQQPXRM_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | 

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}DFN{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} |  | 
| {::nomarkdown}NAME{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} |  | 
| {::nomarkdown}ANS{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} |  | 


### MUMPS Method description

 Property | Value 
 --- | --- 
 Method | MHV^[ORQQPXRM](http://code.osehra.org/dox/Routine_ORQQPXRM_source.html)
 Input parameters | {::nomarkdown}DFN, NAME, ANS{:/}
 Code | {::nomarkdown}  N ORDATA,ORES,X<br> S ORY(0)=0<br> I '$$PATCH^XPDUTL("YS*5.01*85") S ORY(0)=2 Q<br> I '$L(ANS) Q<br> S ORES("DFN")=DFN,ORES("CODE")=NAME<br> F X=1:1:$L(ANS) I $E(ANS,X)'="X" D<br> .;I $E(ANS,X)="T" S $E(ANS,X)=1<br> .;I $E(ANS,X)="F" S $E(ANS,X)=2<br> .S ORES(X)=X_U_$E(ANS,X)<br> D CHECKCR^YTQPXRM4(.ORDATA,.ORES)<br> I $G(ORDATA(2))="OK" S ORY(0)=1 Q<br> S ORY(1)=$P($G(ORDATA(2)),U,2){:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code | {::nomarkdown} <a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rReminders.pas">rReminders.pas</a><br/>{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 25th 2017, 12:25:50 am</p>{:/}