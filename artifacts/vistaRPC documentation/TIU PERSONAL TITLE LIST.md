---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; TIU PERSONAL TITLE LIST 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}TIU PERSONAL TITLE LIST{:/}
 tag | {::nomarkdown}PERSLIST{:/}
 routine | [TIUSRVD](http://code.osehra.org/dox/Routine_TIUSRVD_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}This Remote Procedure returns the user's list of preferred titles for agiven class of documents, along with the default title, if specified.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}DUZ{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}This is the user's ID number (Pointer to file 200).{:/} | 
| {::nomarkdown}CLASS{:/} | {::nomarkdown}LITERAL{:/} |  |  | {::nomarkdown}This is the Class of Documents (Pointer to file 8925.1) from which thetitle is to be selected.{:/} | 
| {::nomarkdown}INDEX{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}This is the array subscript from which to begin incrementing (in the eventthat the preferred list is to be appended to an existing array).{:/} | 


### MUMPS Method description

 Property | Value 
 --- | --- 
 Method | PERSLIST^[TIUSRVD](http://code.osehra.org/dox/Routine_TIUSRVD_source.html)
 Method comment | Get personal list for a user
 Input parameters | {::nomarkdown}DUZ<br>CLASS<br>TIUC<br>TIUFLG{:/}
 Code | {::nomarkdown}  N TIUI,TIUDA,TIUDFLT,INLST<br> S TIUDA=+$O(^TIU(8925.98,"AC",DUZ,CLASS,0))<br> Q:+TIUDA'>0<br> I +$G(TIUFLG) S TIUC=1,TIUY(TIUC)="~SHORT LIST"<br> S TIUI=0,TIUC=+$G(TIUC)<br> F  S TIUI=$O(^TIU(8925.98,TIUDA,10,TIUI)) Q:+TIUI'>0  D<br> . N TIUPL,TIUTNM,TIUDTYP,TIUSEQ<br> . S TIUPL=$G(^TIU(8925.98,TIUDA,10,TIUI,0))<br> . S TIUDTYP=$P(TIUPL,U)<br> . I $S(+$$CANENTR^TIULP(TIUDTYP)'>0:1,+$$CANPICK^TIULP(TIUDTYP)'>0:1,1:0) Q<br> . S TIUTNM=$S($P(TIUPL,U,3)]"":$P(TIUPL,U,3),1:$$PNAME^TIULC1(+TIUDTYP))<br> . S TIUSEQ=+$P(TIUPL,U,2),TIUC=+$G(TIUC)+1<br> . S TIUSEQ=$S(+TIUSEQ:$S('$D(TIUY(TIUSEQ)):TIUSEQ,1:(TIUSEQ+1)),1:TIUC)<br> . S TIUY(TIUSEQ)="i"_TIUDTYP_U_TIUTNM,TIUC=+TIUSEQ<br> I +$G(TIUFLG) Q<br> S TIUDFLT=$$PERSDOC^TIULE(DUZ,+CLASS)<br> S (TIUI,TIUC)=0<br> F  S TIUI=$O(TIUY(TIUI)) Q:+TIUI'>0  D<br> . S TIUC=TIUI<br> . I +TIUDFLT,($P($G(TIUY(TIUI)),U)=("i"_+TIUDFLT)) S $P(TIUDFLT,U,2)=$P(TIUY(TIUI),U,2),INLST=TIUI<br> I +TIUDFLT D<br> . ;if default isn't in list, append it as an item<br> . I '$G(INLST) S TIUC=+$G(TIUC)+1,TIUY(TIUC)="i"_TIUDFLT<br> . ;otherwise, just append as default<br> . S TIUC=+$G(TIUC)+1,TIUY(TIUC)="d"_TIUDFLT{:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code |  [rDCSumm.pas](https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rDCSumm.pas)
 [rSurgery.pas](https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rSurgery.pas)
 [rTIU.pas](https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rTIU.pas)
 [Consults/rConsults.pas](https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Consults/rConsults.pas)


{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 20th 2017, 4:54:06 am</p>{:/}