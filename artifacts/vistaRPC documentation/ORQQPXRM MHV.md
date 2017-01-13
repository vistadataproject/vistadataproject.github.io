---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORQQPXRM MHV 

 property | value 
--- | --- 
 label | {::nomarkdown}ORQQPXRM MHV{:/}
 tag | {::nomarkdown}MHV{:/}
 routine | [ORQQPXRM](http://code.osehra.org/dox/Routine_ORQQPXRM_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | 


### Method description

 property | value 
 --- | --- 
 Input Parameters | {::nomarkdown}DFN<br/>NAME<br/>ANS{:/}
 Lines | ```
 N ORDATA,ORES,X
 S ORY(0)=0
 I '$$PATCH^XPDUTL("YS*5.01*85") S ORY(0)=2 Q
 I '$L(ANS) Q
 S ORES("DFN")=DFN,ORES("CODE")=NAME
 F X=1:1:$L(ANS) I $E(ANS,X)'="X" D
 .;I $E(ANS,X)="T" S $E(ANS,X)=1
 .;I $E(ANS,X)="F" S $E(ANS,X)=2
 .S ORES(X)=X_U_$E(ANS,X)
 D CHECKCR^YTQPXRM4(.ORDATA,.ORES)
 I $G(ORDATA(2))="OK" S ORY(0)=1 Q
 S ORY(1)=$P($G(ORDATA(2)),U,2)```

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}DFN{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} |  | 
| {::nomarkdown}NAME{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} |  | 
| {::nomarkdown}ANS{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} |  | 




 Generated on January 13th 2017, 6:55:29 am