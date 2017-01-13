---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; TIU WHICH SIGNATURE ACTION 

 property | value 
--- | --- 
 label | {::nomarkdown}TIU WHICH SIGNATURE ACTION{:/}
 tag | {::nomarkdown}WHATACT{:/}
 routine | [TIUSRVA](http://code.osehra.org/dox/Routine_TIUSRVA_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}This RPC infers whether the user is trying to sign or cosign the docuementin question, and indicates which ASU ACTION the GUI should pass to the TIUAUTHORIZATION RPC.{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | Evaluate/return whether signature or cosignature
 Input Parameters | {::nomarkdown}TIUDA{:/}
 Lines | ```
 N TIUD0,TIUD12,TIUSTAT,SIGNER,COSIGNER,XTRASGNR
 S TIUD0=$G(^TIU(8925,+TIUDA,0)),TIUD12=$G(^TIU(8925,+TIUDA,12))
 S SIGNER=$P(TIUD12,U,4),COSIGNER=$P(TIUD12,U,8)
 I (DUZ'=SIGNER),(DUZ'=COSIGNER) S XTRASGNR=+$O(^TIU(8925.7,"AE",+TIUDA,+DUZ,0))
 I '$G(XTRASGNR) S XTRASGNR=$$ASURG^TIUADSIG(TIUDA)
 S TIUSTAT=+$P(TIUD0,U,5)
 S TIUY=$S(TIUSTAT'>5:"SIGNATURE",+$G(XTRASGNR):"SIGNATURE",1:"COSIGNATURE")```

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}TIUDA{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}This is the record number of the TIU Document in file 8925.{:/} | 




 Generated on January 13th 2017, 6:55:28 am