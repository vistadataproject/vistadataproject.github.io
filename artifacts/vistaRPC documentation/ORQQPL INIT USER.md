---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORQQPL INIT USER 

 property | value 
--- | --- 
 label | {::nomarkdown}ORQQPL INIT USER{:/}
 tag | {::nomarkdown}INITUSER{:/}
 routine | [ORQQPL1](http://code.osehra.org/dox/Routine_ORQQPL1_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Returns user parameters for problem list{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | INITIALIZE FOR NEW USER
 Input Parameters | {::nomarkdown}ORDUZ{:/}
 Lines | ```
 N X,PV,CTXT,GMPLPROV,ORENT
 S ORDUZ=$G(ORDUZ,DUZ)
 S GMPLUSER=$$CLINUSER(ORDUZ)
 S CTXT=$$GET^XPAR("ALL","ORCH CONTEXT PROBLEMS",1)
 S X=$G(^GMPL(125.99,1,0)) ; IN1+6^GMPLMGR
 S RETURN(0)=GMPLUSER ;  problem list user, or other user
 S RETURN(1)=$$VIEW^GMPLX1(ORDUZ) ; GMPLVIEW("VIEW") - users default view
 S RETURN(2)=+$P(X,U,2) ; verify transcribed problems
 S RETURN(3)=+$P(X,U,3) ; prompt for chart copy
 S RETURN(4)=+$P(X,U,4) ; use lexicon
 S RETURN(5)=$S($P(X,U,5)="R":1,1:0) ; chron or reverse chron listing
 S RETURN(6)=$S($P($G(CTXT),";",3)'="":$P($G(CTXT),";",3),1:"A")
 S GMPLPROV=$P($G(CTXT),";",5)
 I +GMPLPROV>0,$D(^VA(200,GMPLPROV)) D
 . S RETURN(7)=GMPLPROV_U_$P(^VA(200,GMPLPROV,0),U)
 E  S RETURN(7)="0^All"
 S RETURN(8)=$$SERVICE^GMPLX1(ORDUZ) ; user's service/section
 I $L(RETURN(1),"/")>1 D
 . S PV=RETURN(1)
 . S RETURN(1)=$P(PV,"/")
 . I RETURN(1)="C" S GMPLVIEW("CLIN")=$P(PV,"/",2,99)
 . I RETURN(1)="S" S GMPLVIEW("SERV")=$P(PV,"/",2,99)
 S RETURN(9)=$G(GMPLVIEW("SERV")) ; ??? Where from - see tech doc
 S RETURN(10)=$G(GMPLVIEW("CLIN")) ; ??? Where from - see tech doc
 S RETURN(11)=""
 S RETURN(12)=+$P($G(CTXT),";",4)    ; should comments display?
 S ORENT="ALL^SRV.`"_+$$SERVICE^GMPLX1(ORDUZ,1)
 S RETURN(13)=+$$GET^XPAR(ORENT,"ORQQPL SUPPRESS CODES",1) ; suppress codes?
 K GMPLVIEW```
 Leading comment lines | {::nomarkdown}taken from INIT^GMPLMGR<br/>leave GMPLUSER on symbol table - is evaluated in EDITSAVE{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}DUZ{:/} |  |  |  |  | 




 Generated on January 13th 2017, 6:55:28 am