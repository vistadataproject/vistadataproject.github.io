---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORQQPL INIT USER 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORQQPL INIT USER{:/}
 tag | {::nomarkdown}INITUSER{:/}
 routine | [ORQQPL1](http://code.osehra.org/dox/Routine_ORQQPL1_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Returns user parameters for problem list{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}DUZ{:/} |  |  |  |  | 


### MUMPS Method description

 Property | Value 
 --- | --- 
 Method | INITUSER^[ORQQPL1](http://code.osehra.org/dox/Routine_ORQQPL1_source.html)
 Method comment | INITIALIZE FOR NEW USER
 Input parameters | {::nomarkdown}ORDUZ{:/}
 First comment | {::nomarkdown}<pre> taken from INIT^GMPLMGR<br/> leave GMPLUSER on symbol table - is evaluated in EDITSAVE<br/></pre>{:/}
 Code | {::nomarkdown}  N X,PV,CTXT,GMPLPROV,ORENT<br> S ORDUZ=$G(ORDUZ,DUZ)<br> S GMPLUSER=$$CLINUSER(ORDUZ)<br> S CTXT=$$GET^XPAR("ALL","ORCH CONTEXT PROBLEMS",1)<br> S X=$G(^GMPL(125.99,1,0)) ; IN1+6^GMPLMGR<br> S RETURN(0)=GMPLUSER ;  problem list user, or other user<br> S RETURN(1)=$$VIEW^GMPLX1(ORDUZ) ; GMPLVIEW("VIEW") - users default view<br> S RETURN(2)=+$P(X,U,2) ; verify transcribed problems<br> S RETURN(3)=+$P(X,U,3) ; prompt for chart copy<br> S RETURN(4)=+$P(X,U,4) ; use lexicon<br> S RETURN(5)=$S($P(X,U,5)="R":1,1:0) ; chron or reverse chron listing<br> S RETURN(6)=$S($P($G(CTXT),";",3)'="":$P($G(CTXT),";",3),1:"A")<br> S GMPLPROV=$P($G(CTXT),";",5)<br> I +GMPLPROV>0,$D(^VA(200,GMPLPROV)) D<br> . S RETURN(7)=GMPLPROV_U_$P(^VA(200,GMPLPROV,0),U)<br> E  S RETURN(7)="0^All"<br> S RETURN(8)=$$SERVICE^GMPLX1(ORDUZ) ; user's service/section<br> I $L(RETURN(1),"/")>1 D<br> . S PV=RETURN(1)<br> . S RETURN(1)=$P(PV,"/")<br> . I RETURN(1)="C" S GMPLVIEW("CLIN")=$P(PV,"/",2,99)<br> . I RETURN(1)="S" S GMPLVIEW("SERV")=$P(PV,"/",2,99)<br> S RETURN(9)=$G(GMPLVIEW("SERV")) ; ??? Where from - see tech doc<br> S RETURN(10)=$G(GMPLVIEW("CLIN")) ; ??? Where from - see tech doc<br> S RETURN(11)=""<br> S RETURN(12)=+$P($G(CTXT),";",4)    ; should comments display?<br> S ORENT="ALL^SRV.`"_+$$SERVICE^GMPLX1(ORDUZ,1)<br> S RETURN(13)=+$$GET^XPAR(ORENT,"ORQQPL SUPPRESS CODES",1) ; suppress codes?<br> K GMPLVIEW{:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code | {::nomarkdown} <a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rProbs.pas">rProbs.pas</a><br/>{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 26th 2017, 2:53:13 am</p>{:/}